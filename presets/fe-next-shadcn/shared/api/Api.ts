import { AxiosResponse, ResponseType } from "axios";
import {
    ApiConfig,
    Api as BaseApi,
    ContentType,
    FullRequestParams,
} from "./BaseApi";
import { handleApiError } from "shared/utils";

export class Api<
    SecurityDataType extends unknown,
> extends BaseApi<SecurityDataType> {
    private readonly _format?: Readonly<ResponseType>;
    constructor(config: ApiConfig<SecurityDataType> = {}) {
        super(config);
        this._format = config.format;
    }

    public request = <T = any, _E = any>({
        ...params
    }: FullRequestParams): Promise<AxiosResponse<T>> => {
        try {
            return this.instance.request({
                ...this.mergeRequestParams(params),
                headers: {
                    ...(params.headers || {}),
                    ...(params.type && params.type !== ContentType.FormData
                        ? { "Content-Type": params.type }
                        : {}),
                },
                params: params.query,
                responseType: params.format || this._format || undefined,
                data:
                    params.type === ContentType.Text &&
                    params.body && typeof params.body !== "string"
                        ? JSON.stringify(params.body)
                        : params.body,
                url: params.path,
            });
        } catch (err) {
            return handleApiError(err);
        }
    };
}
