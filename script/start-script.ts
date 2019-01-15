/**
 * Start client server
 */
import { spawn, SpawnOptions } from "child_process";

const args = ["start"];
const opts: SpawnOptions = { stdio: "inherit", cwd: "src/client", shell: true };
spawn("yarn", args, opts);
