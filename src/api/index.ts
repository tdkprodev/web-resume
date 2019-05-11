import { Endpoint, ParamsType, TokenMap } from "./endpoint";

import { Request, RequestHandler, Response, Router } from "express";

import { Logger } from "@shared/logger";

/** Instantiate Logger and initialize it with log.info to avoid errors if nothing calls the logger */
const log = new Logger("api/index");
log.info("Logger initialized");

export type ISuccessResponse<T> = { success: true } & T;
export type IFailureResponse = { code: string; success: false };
export type IApiResponse<T> = ISuccessResponse<T> | IFailureResponse;

/**
 * The router to be imported into server/rest to serve as rest APIs
 * Each of the api directory under api/ will also import this router
 * to add endpoints to it.
 *
 * Thanks to closure, this router variable listens for all of the specified endpoints
 * from the options passed to each individual createEndpoint call.
 *
 * By the nature of how this system was implemented, the express routing happens automatically (as if magic)
 * when you create an endpoint using createEndpoint() with the specified options passed in.
 *
 * i.e. for a user endpoint
 * const create = createEndpoint()(options);
 *
 * options = {
 *   permissions: string;       - For our simplified use case, it is an empty string which defaults to false (PERMISSIONS.NONE = '')
 *   method: MethodType;
 *   path: string;
 *   formData?: boolean;        - Determines whether a body will be passed into apiCall(options?, body?)
 *   tokens?: TTokens;
 *   query?: any;
 * }
 *
 * The create variable is an endpoint, an instance of the Endpoint class that has the very important
 * method -- apiCall().
 */
export const router = Router();

/**
 * Function that handles the endpoint
 * @param endpoint The endpoint from the return of createEndpoint()(options)
 * @param callback  The callback to invoke if/when the permissions check is valid
 * and the joi data validation is valid from the request handler within handleEndPoint
 * @param middleware? The optional array of middlewares to handle the request
 * @returns sends the Promise from calling the callback passed to the handleEndpoint back to the requested client.
 *
 * type TokenMap = { [key: string]: any }
 * type ParamsType<T> = { [key in keyof T]: any }
 */
export function handleEndpoint<TBody, TResult, TTokens extends TokenMap>(
  endpoint: Endpoint<TBody, TResult, TTokens>,
  callback: (
    body: TBody,
    request: Request & { params?: ParamsType<TTokens> }
  ) => Promise<IApiResponse<TResult>>,
  middleware?: RequestHandler[]
) {
  /** Get metadata passed in from endpoint */
  const { method, path, permissions } = endpoint;
  const url = `${path}${endpoint.tokenString}`;

  /** Log the request method and url */
  log.info("Installing method", `[${method.toUpperCase()}] ${url}`);
  log.info("Permissions: ", permissions);

  /** Declare the path to listen for and the request handler`
   *
   * router[method](
   *  @param path The url path to listen for
   *  @param middleware? The middlewares to handle the request before passing it to the request handler
   *  @param requestHandler The request handler that will return either a successful response or an error
   * )
   *
   * Uses the express Router instance to listen for a url path and trigger a request handler that will
   * check for permissions if the permissions was passed in. If the permission is valid, execute the
   * handleEndpoint callback, which will return a response and send that response to the client.
   */
  router[method](
    `/${path}${endpoint.tokenString}`,
    middleware || [],
    async (request: Request, response: Response) => {
      try {
        const body: TBody = request.body;
        const [scope, ...stubs] = path.split("/", 2);

        /** Logs the paths and method */
        log.info(`${scope}.${stubs.join("/")} [${method.toUpperCase()}]`);

        /** PERMISSIONS CHECKING GOES HERE */

        /** If the permission paths were set and the code makes it here, await the async callback
         * passing in the body and merged request with the user info, await for the response
         * and send the response to the client.
         */
        response.send(await callback(body, Object.assign(request)));
      } catch (error) {
        log.error(error);
        response.send({
          success: false,
          code: `${error}`
        });
      }
    }
  ); // end express request routing
}
