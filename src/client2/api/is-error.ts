import { IFailureResponse } from "../../api";

export function isError(json: any): json is IFailureResponse {
  return json && json.success === false;
}
