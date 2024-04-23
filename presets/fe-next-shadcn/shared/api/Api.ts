import { AxiosResponse, ResponseType } from 'axios'
import {ApiConfig, Api as BaseApi, ContentType, FullRequestParams} from './BaseApi'

export class Api<SecurityDataType extends unknown> extends BaseApi<SecurityDataType> {
    private readonly _format?: Readonly<ResponseType>;
    constructor(config: ApiConfig<SecurityDataType> = {}) {
        super(config)
        this._format = config.format;
    }

    public request = async <T = any, _E = any>({
        ...params
      }: FullRequestParams): Promise<AxiosResponse<T>> => {
        try {
            return await this.instance.request({
                ...this.mergeRequestParams(params),
                headers: {
                    ...(params.headers || {}),
                    ...(params.type && params.type !== ContentType.FormData ? { "Content-Type": params.type } : {}),
                },
                params: params.query,
                responseType: params.format || this._format || undefined,
                data: params.type === ContentType.Text && params.body && true && typeof params.body !== "string"
                    ? JSON.stringify(params.body)
                    : params.body,
                url: params.path,
            })
        } catch (error) {
            console.log("error ngab")
            throw error;
        }
      };
}
