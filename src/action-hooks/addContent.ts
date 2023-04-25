import { ApiRequestParams } from "../api-request";
import { useCreate } from "../glue-layer";

interface Content {
    "@id"?: string;
    title: string;
}

type ContentArgs = {
    path: string;
    data: Content;
};

export const useAddContent = ({ path, data }: ContentArgs) => {
    const options: ApiRequestParams = {
        data,
    };

    return useCreate(path, options);
};
