/**
 * Create an endpoint using the options passed in.
 *
 * Expose a createEndpoint function that returns a function that takes
 * an options object as parameter and return a new endpoint instance
 * of the Endpoint class that uses the options object to make a api request
 * to the server by calling fetch() and returns the response from the api request
 * to the client.
 *
 * TL;DR
 * Calling createEndpoint returns an endpoint instance that exposes
 * a apiCall() method that is used to make api requests to the server.
 *
 * apiCall(options?, body?) takes an optional options and an optional body parameters.
 *
 * options? an object with the signature { params?: object, query?: object }
 *
 */

import { stringify } from 'querystring';
import { values } from 'ramda';
import { IApiResponse } from './index'; // import the IApiResponse interface

/** Get token from localStorage or return an empty string */
export function getCurrentToken() {
  if (typeof localStorage === 'undefined') {
    return '';
  }
  return localStorage.getItem('token') || '';
}

export interface ICallbackOptions {
  body?: any;
  options?: { [key in 'param' | 'query']?: { [key: string]: any } };
  result?: any;
}

export type MethodType = 'post' | 'get' | 'put' | 'delete';
export type TokenMap = { [key: string]: any };
export type ParamsType<T> = { [key in keyof T]: any };

export type EndpointConstructorKeys =
  | 'method'
  | 'formData'
  | 'path'
  | 'permissions'
  | 'query'
  | 'tokens';

/**
 * Endpoint class that takes an options object, make a request and return a response.
 * @param options The options object containing permission, method
 */
export class Endpoint<TBody, TResponse, TTokens extends TokenMap> {
  public path: string;
  public method: MethodType;
  public formData?: boolean;
  public permissions: string;
  public tokens?: TTokens;
  public query?: any;

  /**
   * Parses the tokens object from the options passed in with createEndpoint and
   * returns a token string or empty string if no token object was specified.
   *
   * @returns a string representing a token that will be used to represent a route
   * parameter for the routing using express.
   *
   * The form will be /:<tokenString>
   *
   * i.e
   * app.get('/users/:id', (req, res) => {});
   */
  public get tokenString() {
    if (!this.tokens) return '';
    const tokens = Object.entries(this.tokens).reduce(
      (result, [key, value]) => `:${key}`,
      {},
    );
    return `/${tokens}`;
  }

  /** constructor */
  constructor(
    options: Pick<Endpoint<TBody, TResponse, TTokens>, EndpointConstructorKeys>,
  ) {
    this.method = options.method;
    this.path = options.path;
    this.permissions = options.permissions;
    this.formData = options.formData;
    this.tokens = options.tokens;
    this.query = options.query;
  }

  /**
   * Function that makes the request to the server api and returns a response
   * @param options? The options object optionally containing the:  method, path, permissions, formData, tokens, query
   * @param body? The body passed in -- usually an object or formData
   * @return response from the api request in the form of a promise.
   *
   * This method is the most important one to understand for the client side. The convention for using this method is as follow:
   *
   * NounEndpoint.action.apiCall(options?, body?): Promise<IApiResponse<TResponse>>
   *
   * i.e
   * const user = { firstName: 'Iam', lastName: 'Legend' };
   * const result = UserEndpoint.create.apiCall(null, { user });
   */
  public async apiCall(
    options?: {} | null,
    body?: TBody,
  ): Promise<IApiResponse<TResponse>> {
    let requestBody;
    const token = getCurrentToken ? getCurrentToken() : '';
    if (this.formData) {
      requestBody = body;
    } else if (this.method !== 'get') {
      requestBody = typeof body === 'string' ? body : JSON.stringify(body);
    }

    /** Build parameters and queryString from options passed in if applicable */
    let parameters = '';
    let queryString = '';

    if (options) {
      if ('params' in options) {
        parameters = `/${values((options as any).params || {}).join('/')}`;
      }

      if ('query' in options) {
        queryString = `?${stringify((options as any).query)}`;
      }
    }

    /**
     * Configure the headerConfig based on whether a formData was passed in.
     *
     * The token is a string that is queried from LocalStorage or an empty string if none exist in LocalStorage.
     * The token is used to set to the Authorization setting in Request.headers.
     */
    const headerConfig: { [key: string]: string } = {
      Accept: 'application/json',
      Authorization: `${token}`,
    };

    /**
     * If a formData was passed in, set the Content-Type setting to 'application/json' in Request.headers
     */
    if (!this.formData) {
      headerConfig['Content-Type'] = 'application/json';
    }

    /**
     * Make a request to the server api endpoint based on data passed in and stores it in a variable call response.
     */
    const response = await fetch(
      `/rest/${this.path}${parameters}${queryString}`,
      {
        body: requestBody as any,
        headers: new Headers(headerConfig),
        method: this.method,
      },
    );

    /** Return the response as a json */
    return (await response.json()) as IApiResponse<TResponse>;
  }
}

/** Function that returns a function that takes a parameter options object and returning an
 * instance of an Endpoint class passing in the options object
 *
 * () => (options) => new Endpoint(options)
 */
export const createEndpoint = <TBody, TResponse>() => <TTokens>(
  options: Pick<Endpoint<TBody, TResponse, TTokens>, EndpointConstructorKeys>,
) => new Endpoint<TBody, TResponse, TTokens>(options);
