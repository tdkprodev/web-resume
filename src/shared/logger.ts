import * as debug from "debug";
import { IDebugger } from "debug";

export interface IObjectStream {
  write(data: { [key: string]: any }): void;
}

export interface IWriteStreams {
  stream: IObjectStream;
  filter: LoggerFilter;
}

export type LoggerType = {
  [key in "debug" | "error" | "info" | "log" | "warn"]: IDebugger
};

export type LoggerFilter = { [key in keyof LoggerType]: boolean };

/**
 * Class to help with the logging to debug and optionally other streams
 * Based on the debug library from npm
 */
export class Logger {
  public static prefix: string = "";

  /** All the individual loggers for this instance */
  private _logger: LoggerType;

  /** The streams that loggers also append to */
  private static _writeStreams: IWriteStreams[] = [];

  /** Set prefix
   *
   * @param value The prefix string
   */
  public static setNamespacePrefix(value: string) {
    Logger.prefix = value;
  }

  /** Add a write stream that logs should be written to */
  public static addStream(stream: IObjectStream, filter: LoggerFilter) {
    this._writeStreams.push({ stream, filter });
  }

  /** Log debugging information
   *
   * @param message The message to log
   * @param ...rest The arguments to append
   */
  public debug(message: any, ...rest: any[]) {
    this._log("debug", message, ...rest);
  }

  /** Log an error message
   *
   * @param message The message to log
   * @param ...rest The arguments to append
   */
  public error(message: any, ...rest: any[]) {
    this._log("error", message, ...rest);
  }

  /** Log a verbose message
   *
   * @param message The message to log
   * @param ...rest The arguments to append
   */
  public info(message: any, ...rest: any[]) {
    this._log("info", message, ...rest);
  }

  /** Log a message with the default log type
   *
   * @param message The message to log
   * @param ...rest The arguments to append
   */
  public log(message: any, ...rest: any[]) {
    this._log("log", message, ...rest);
  }

  /** Log a warning message
   *
   * @param message The message to log
   * @param ...rest The arguments to append
   */
  public warn(message: any, ...rest: any[]) {
    this._log("warn", message, ...rest);
  }

  /** Actually log the message
   *
   * @param logType The log type : 'debug' | 'error' | 'info' | 'log' | 'warn'
   * @param message The message to log
   * @param ...rest The arguments to append
   */
  private _log(logType: keyof LoggerType, message: any, ...rest: any[]) {
    const logger = this._logger[logType];
    logger(message, ...rest);

    if (logger.enabled && message instanceof Object) {
      for (const stream of Logger._writeStreams) {
        if (stream.filter[logType]) stream.stream.write(message);
      }
    }
  }

  constructor(public namespace: string) {
    this._logger = {
      debug: debug(`${Logger.prefix}${namespace}:debug`),
      error: debug(`${Logger.prefix}${namespace}:error`),
      info: debug(`${Logger.prefix}${namespace}:info`),
      log: debug(`${Logger.prefix}${namespace}:log`),
      warn: debug(`${Logger.prefix}${namespace}:warn`)
    };
  }
}
