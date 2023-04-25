import { ApiRequestParams } from "../api-request";
import { useFetchDetails } from "../glue-layer";

interface Content {
    "@id"?: string;
    title: string;
}

type ContentArgs = {
    path: string;
    version?: string;
    page?: number;
    fullObjects?: boolean;
};

export const useGetContent = ({
    path,
    version,
    page,
    fullObjects,
}: ContentArgs) => {
    const options: ApiRequestParams = {
        params: {
            ...(version && { version }),
            ...(fullObjects && { fullobjects: fullObjects }),
        },
    };

    if (version) {
        path = `${path}/@history/${version}`;
    }
    return useFetchDetails(path, options);
};
