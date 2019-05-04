import { Typography } from "@material-ui/core";
import * as React from "react";

interface IProps {
  classes: any;
}

export const VsCodeHoverDetail = (props: IProps) => (
  <React.Fragment>
    <Typography color="inherit">Tooltip with HTML</Typography>
    <em>{"And here's"}</em> <b>{"some"}</b> <u>{"amazing content"}</u>.{" "}
    {"It's very engaging. Right?"}
    <a href="https://google.com">google</a>
    <span className={props.classes.arrow} />
  </React.Fragment>
);

export const VimHoverDetail = (props: IProps) => (
  <React.Fragment>
    <Typography color="inherit">Tooltip with HTML</Typography>
    <em>{"And here's"}</em> <b>{"some"}</b> <u>{"amazing content"}</u>.{" "}
    {"It's very engaging. Right?"}
    <span className={props.classes.arrow} />
  </React.Fragment>
);

export const TypeScriptHoverDetail = (props: IProps) => (
  <React.Fragment>
    <Typography color="inherit">Tooltip with HTML</Typography>
    <em>{"And here's"}</em> <b>{"some"}</b> <u>{"amazing content"}</u>.{" "}
    {"It's very engaging. Right?"}
    <span className={props.classes.arrow} />
  </React.Fragment>
);

export const ReactHoverDetail = (props: IProps) => (
  <React.Fragment>
    <Typography color="inherit">Tooltip with HTML</Typography>
    <em>{"And here's"}</em> <b>{"some"}</b> <u>{"amazing content"}</u>.{" "}
    {"It's very engaging. Right?"}
    <span className={props.classes.arrow} />
  </React.Fragment>
);

export const NodeHoverDetail = (props: IProps) => (
  <React.Fragment>
    <Typography color="inherit">Tooltip with HTML</Typography>
    <em>{"And here's"}</em> <b>{"some"}</b> <u>{"amazing content"}</u>.{" "}
    {"It's very engaging. Right?"}
    <span className={props.classes.arrow} />
  </React.Fragment>
);

export const TypeOrmHoverDetail = (props: IProps) => (
  <React.Fragment>
    <Typography color="inherit">Tooltip with HTML</Typography>
    <em>{"And here's"}</em> <b>{"some"}</b> <u>{"amazing content"}</u>.{" "}
    {"It's very engaging. Right?"}
    <span className={props.classes.arrow} />
  </React.Fragment>
);

// export {
//   VsCodeHoverDetail,
//   VimHoverDetail,
//   TypeScriptHoverDetail,
//   ReactHoverDetail,
//   NodeHoverDetail,
//   TypeOrmHoverDetail
// };
