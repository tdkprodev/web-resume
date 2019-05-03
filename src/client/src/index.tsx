import App from "@src/app";
import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
