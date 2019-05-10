import * as assert from "assert";
import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
// import {
//   User,
// } from '@server/model';
import { config } from "@shared/config";
import { Logger } from "@shared/logger";

/** Database options interface */
interface IDatabaseOptions {
  url: string;
}

/** Class to connect to the database
 *
 * @param options The options passed in -- i.e url
 * @param log? The logger for debugging
 *
 * @method connect
 */
export class DatabaseConnection {
  connection: Promise<Connection>;
  log: Logger = new Logger("shared/database");
  options: IDatabaseOptions;

  constructor(options: IDatabaseOptions, log?: Logger) {
    this.options = options;
    if (log) {
      this.log = log;
    }
  }

  connect = () => {
    // const { DATABASE_URL } = config;
    const DATABASE_URL = "mysql:///root/root@localhost:3306/Thomas";
    assert(DATABASE_URL, "options.url is blank");
    this.log.info("Connecting to database", {
      DATABASE_URL
    });

    this.connection = createConnection({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "clt",
      entities: [],
      synchronize: true,
      logging: false,
      ssl: config.DATABASE_SSL === "1",
      url: DATABASE_URL // from process.env
    });
  }; // end of connect()
}
