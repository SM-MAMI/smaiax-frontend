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


// May contain unused imports in some cases
// @ts-ignore
import type { NameDto } from './name-dto';

/**
 * 
 * @export
 * @interface RegisterDto
 */
export interface RegisterDto {
    /**
     * 
     * @type {string}
     * @memberof RegisterDto
     */
    'userName': string;
    /**
     * 
     * @type {string}
     * @memberof RegisterDto
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof RegisterDto
     */
    'password': string;
    /**
     * 
     * @type {NameDto}
     * @memberof RegisterDto
     */
    'name': NameDto;
}

