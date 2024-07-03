/* tslint:disable */
/* eslint-disable */
/**
 * Streaming Avatar SDK
 * Heygen Streaming Avatar
 *
 * The version of the OpenAPI document: 1.0.4
 * Contact: api@heygen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface IceCandidate
 */
export interface IceCandidate {
    /**
     * 
     * @type {string}
     * @memberof IceCandidate
     */
    candidate?: string;
    /**
     * 
     * @type {number}
     * @memberof IceCandidate
     */
    sdpMLineIndex?: number;
    /**
     * 
     * @type {string}
     * @memberof IceCandidate
     */
    sdpMid?: string;
    /**
     * 
     * @type {string}
     * @memberof IceCandidate
     */
    usernameFragment?: string;
}

/**
 * Check if a given object implements the IceCandidate interface.
 */
export function instanceOfIceCandidate(value: object): value is IceCandidate {
    return true;
}

export function IceCandidateFromJSON(json: any): IceCandidate {
    return IceCandidateFromJSONTyped(json, false);
}

export function IceCandidateFromJSONTyped(json: any, ignoreDiscriminator: boolean): IceCandidate {
    if (json == null) {
        return json;
    }
    return {
        
        'candidate': json['candidate'] == null ? undefined : json['candidate'],
        'sdpMLineIndex': json['sdpMLineIndex'] == null ? undefined : json['sdpMLineIndex'],
        'sdpMid': json['sdpMid'] == null ? undefined : json['sdpMid'],
        'usernameFragment': json['usernameFragment'] == null ? undefined : json['usernameFragment'],
    };
}

export function IceCandidateToJSON(value?: IceCandidate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'candidate': value['candidate'],
        'sdpMLineIndex': value['sdpMLineIndex'],
        'sdpMid': value['sdpMid'],
        'usernameFragment': value['usernameFragment'],
    };
}
