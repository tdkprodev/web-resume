import { readFileSync } from "fs";
import { resolve } from "path";
import { assocPath, keys, mergeDeepRight, reduce } from "ramda";
import { Logger } from "@shared/logger";

/** Instantiate and initialize Logger to avoid error */
const log = new Logger("config loader");
log.info("Logger initialized");

/** The interface for config  */
interface IConfig {
  DATABASE_URL: string;
  DATABASE_SSL: string;

  PORT: string;

  DB_PORT: string;
  DB_HOST: string;
  DB_NAME: string;
  DB_USER: string;
  DB_PASS: string;

  PASSWORD_SALT: number;
  VERIFICATION_DIFFICULTY: number;
}

/** Function helper to read a file from path by resoving the path */
function softRequire(path: string) {
  try {
    return JSON.parse(readFileSync(resolve(path)).toString("ascii"));
  } catch (error) {
    log.error(error);
    return {};
  }
}

/** Export the config object created from the config.json */
export const config: IConfig = reduce<string, any>(
  mergeDeepRight,
  {} as IConfig,
  [
    softRequire("config.json"),
    reduce<string, IConfig>(
      (data, key) => assocPath(key.split("."), process.env[key], data),
      {} as IConfig,
      // @ts-ignore
      keys(process.env)
    )
  ]
);
