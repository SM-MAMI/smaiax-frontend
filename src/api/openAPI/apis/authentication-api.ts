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
import type { LoginDto } from '../models';
// @ts-ignore
import type { Ok } from '../models';
// @ts-ignore
import type { ProblemDetails } from '../models';
// @ts-ignore
import type { RegisterDto } from '../models';
// @ts-ignore
import type { TokenDto } from '../models';
/**
 * AuthenticationApi - axios parameter creator
 * @export
 */
export const AuthenticationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {LoginDto} loginDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login: async (loginDto: LoginDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'loginDto' is not null or undefined
            assertParamExists('login', 'loginDto', loginDto)
            const localVarPath = `/api/authentication/login`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(loginDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {TokenDto} tokenDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logout: async (tokenDto: TokenDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tokenDto' is not null or undefined
            assertParamExists('logout', 'tokenDto', tokenDto)
            const localVarPath = `/api/authentication/logout`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(tokenDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {TokenDto} tokenDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refresh: async (tokenDto: TokenDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tokenDto' is not null or undefined
            assertParamExists('refresh', 'tokenDto', tokenDto)
            const localVarPath = `/api/authentication/refresh`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(tokenDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {RegisterDto} registerDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        register: async (registerDto: RegisterDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'registerDto' is not null or undefined
            assertParamExists('register', 'registerDto', registerDto)
            const localVarPath = `/api/authentication/register`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(registerDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthenticationApi - functional programming interface
 * @export
 */
export const AuthenticationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthenticationApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {LoginDto} loginDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async login(loginDto: LoginDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TokenDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.login(loginDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthenticationApi.login']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {TokenDto} tokenDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async logout(tokenDto: TokenDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.logout(tokenDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthenticationApi.logout']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {TokenDto} tokenDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async refresh(tokenDto: TokenDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TokenDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.refresh(tokenDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthenticationApi.refresh']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {RegisterDto} registerDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async register(registerDto: RegisterDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.register(registerDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthenticationApi.register']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AuthenticationApi - factory interface
 * @export
 */
export const AuthenticationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthenticationApiFp(configuration)
    return {
        /**
         * 
         * @param {LoginDto} loginDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login(loginDto: LoginDto, options?: RawAxiosRequestConfig): AxiosPromise<TokenDto> {
            return localVarFp.login(loginDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {TokenDto} tokenDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logout(tokenDto: TokenDto, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.logout(tokenDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {TokenDto} tokenDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refresh(tokenDto: TokenDto, options?: RawAxiosRequestConfig): AxiosPromise<TokenDto> {
            return localVarFp.refresh(tokenDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {RegisterDto} registerDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        register(registerDto: RegisterDto, options?: RawAxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.register(registerDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthenticationApi - object-oriented interface
 * @export
 * @class AuthenticationApi
 * @extends {BaseAPI}
 */
export class AuthenticationApi extends BaseAPI {
    /**
     * 
     * @param {LoginDto} loginDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public login(loginDto: LoginDto, options?: RawAxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).login(loginDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {TokenDto} tokenDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public logout(tokenDto: TokenDto, options?: RawAxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).logout(tokenDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {TokenDto} tokenDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public refresh(tokenDto: TokenDto, options?: RawAxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).refresh(tokenDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {RegisterDto} registerDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public register(registerDto: RegisterDto, options?: RawAxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).register(registerDto, options).then((request) => request(this.axios, this.basePath));
    }
}

