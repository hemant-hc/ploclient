interface Content {
    "@id"?: string;
    title: string;
}
type ContentArgs = {
    path: string;
    data: Content;
};
export declare const useAddContent: ({ path, data }: ContentArgs) => (import("@tanstack/react-query").UseMutateAsyncFunction<any, unknown, void, unknown> | {
    data: undefined;
    error: null;
    isError: false;
    isIdle: true;
    isLoading: false;
    isSuccess: false;
    status: "idle";
    mutate: import("@tanstack/react-query").UseMutateFunction<any, unknown, void, unknown>;
    reset: () => void;
    context: unknown;
    failureCount: number;
    failureReason: unknown;
    isPaused: boolean;
    variables: void;
} | {
    data: undefined;
    error: null;
    isError: false;
    isIdle: false;
    isLoading: true;
    isSuccess: false;
    status: "loading";
    mutate: import("@tanstack/react-query").UseMutateFunction<any, unknown, void, unknown>;
    reset: () => void;
    context: unknown;
    failureCount: number;
    failureReason: unknown;
    isPaused: boolean;
    variables: void;
} | {
    data: undefined;
    error: unknown;
    isError: true;
    isIdle: false;
    isLoading: false;
    isSuccess: false;
    status: "error";
    mutate: import("@tanstack/react-query").UseMutateFunction<any, unknown, void, unknown>;
    reset: () => void;
    context: unknown;
    failureCount: number;
    failureReason: unknown;
    isPaused: boolean;
    variables: void;
} | {
    data: any;
    error: null;
    isError: false;
    isIdle: false;
    isLoading: false;
    isSuccess: true;
    status: "success";
    mutate: import("@tanstack/react-query").UseMutateFunction<any, unknown, void, unknown>;
    reset: () => void;
    context: unknown;
    failureCount: number;
    failureReason: unknown;
    isPaused: boolean;
    variables: void;
})[];
export {};
