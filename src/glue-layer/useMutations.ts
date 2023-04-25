import { useMutation } from "@tanstack/react-query";
import { apiRequest, ApiRequestParams } from "../api-request";

enum MUTATION_TYPES {
    create = "create",
}

export function useMutations(
    path: string,
    options?: ApiRequestParams & { type: string }
) {
    const { params, type } = options || {};

    const mutationFn = async () => {
        switch (type) {
            case MUTATION_TYPES.create:
                return apiRequest("post", path, options);
            default:
                return Promise.reject(`Incorrect mutations HTTP verb: ${type}`);
        }
    };

    const mutationOtions = {
        mutationKey: [path, type],
    };

    const { mutateAsync, ...meta } = useMutation(mutationFn, mutationOtions);
    return [mutateAsync, meta];
}

export function useCreate(path: string, options?: ApiRequestParams) {
    return useMutations(path, {
        ...options,
        type: MUTATION_TYPES.create,
    });
}
