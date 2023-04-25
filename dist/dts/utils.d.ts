/**
 * Create a function that add X-Forwarded Headers to superagent requests
 * @function addHeadersFactory
 * @param {Object} req Original request object
 * @return {function} Superagent request function
 */
export declare const addHeadersFactory: (orig: any) => (request: any) => void;
export declare const getBackendURL: (path: string) => string;
