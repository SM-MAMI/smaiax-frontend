/* tslint:disable */
/* eslint-disable */
/**
 * SMAIAX Backend API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { ProblemDetails } from '../models';
// @ts-ignore
import type { SmartMeterCreateDto } from '../models';
// @ts-ignore
import type { SmartMeterOverviewDto } from '../models';
/**
 * SmartMeterApi - axios parameter creator
 * @export
 */
export const SmartMeterApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {SmartMeterCreateDto} [smartMeterCreateDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addSmartMeter: async (smartMeterCreateDto?: SmartMeterCreateDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/smartMeters`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(smartMeterCreateDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSmartMeterById: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getSmartMeterById', 'id', id)
            const localVarPath = `/api/smartMeters/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSmartMeters: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/smartMeters`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SmartMeterApi - functional programming interface
 * @export
 */
export const SmartMeterApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SmartMeterApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {SmartMeterCreateDto} [smartMeterCreateDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addSmartMeter(smartMeterCreateDto?: SmartMeterCreateDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addSmartMeter(smartMeterCreateDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SmartMeterApi.addSmartMeter']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSmartMeterById(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SmartMeterOverviewDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSmartMeterById(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SmartMeterApi.getSmartMeterById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSmartMeters(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<SmartMeterOverviewDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSmartMeters(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SmartMeterApi.getSmartMeters']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SmartMeterApi - factory interface
 * @export
 */
export const SmartMeterApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SmartMeterApiFp(configuration)
    return {
        /**
         * 
         * @param {SmartMeterCreateDto} [smartMeterCreateDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addSmartMeter(smartMeterCreateDto?: SmartMeterCreateDto, options?: RawAxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.addSmartMeter(smartMeterCreateDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSmartMeterById(id: string, options?: RawAxiosRequestConfig): AxiosPromise<SmartMeterOverviewDto> {
            return localVarFp.getSmartMeterById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSmartMeters(options?: RawAxiosRequestConfig): AxiosPromise<Array<SmartMeterOverviewDto>> {
            return localVarFp.getSmartMeters(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SmartMeterApi - object-oriented interface
 * @export
 * @class SmartMeterApi
 * @extends {BaseAPI}
 */
export class SmartMeterApi extends BaseAPI {
    /**
     * 
     * @param {SmartMeterCreateDto} [smartMeterCreateDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SmartMeterApi
     */
    public addSmartMeter(smartMeterCreateDto?: SmartMeterCreateDto, options?: RawAxiosRequestConfig) {
        return SmartMeterApiFp(this.configuration).addSmartMeter(smartMeterCreateDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SmartMeterApi
     */
    public getSmartMeterById(id: string, options?: RawAxiosRequestConfig) {
        return SmartMeterApiFp(this.configuration).getSmartMeterById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SmartMeterApi
     */
    public getSmartMeters(options?: RawAxiosRequestConfig) {
        return SmartMeterApiFp(this.configuration).getSmartMeters(options).then((request) => request(this.axios, this.basePath));
    }
}
