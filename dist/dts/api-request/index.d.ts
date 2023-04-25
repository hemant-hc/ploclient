import type request from "superagent";
export type ApiRequestParams = {
    params?: any;
    data?: any;
    type?: any;
    headers?: any;
    checkUrl?: boolean;
};
export declare function apiRequest(method: string, path: string, options?: ApiRequestParams): Promise<any>;
export default class API {
    [m: string]: (path: string, options?: ApiRequestParams) => Promise<request.Response>;
    constructor(req?: Request);
}
