// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Session management
 */
export class API extends APIResource {
  /**
   * Terminates an active WebRTC session. The `session_id` may be supplied as a query
   * parameter or in the JSON body; the query parameter takes precedence.
   *
   * @example
   * ```ts
   * const response = await client.api.endWebrtcSession({
   *   query_session_id: '8f14e45f-ceea-467a-a0b1-2d3e4f5a6b7c',
   *   body_session_id: '8f14e45f-ceea-467a-a0b1-2d3e4f5a6b7c',
   * });
   * ```
   */
  endWebrtcSession(
    params: APIEndWebrtcSessionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIEndWebrtcSessionResponse> {
    const { query_session_id, ...body } = params ?? {};
    return this._client.post('/api/end', { query: { session_id: query_session_id }, body, ...options });
  }
}

/**
 * Confirmation that a session was terminated.
 */
export interface APIEndWebrtcSessionResponse {
  /**
   * ID of the session that was terminated.
   */
  session_id?: string;

  /**
   * Result indicator — always `ended` when the call succeeds.
   */
  status?: 'ended';
}

export interface APIEndWebrtcSessionParams {
  /**
   * Query param: ID of the session to terminate. Takes precedence over the body
   * field if both are provided.
   */
  query_session_id?: string;

  /**
   * Body param: ID of the session to terminate.
   */
  body_session_id?: string;
}

export declare namespace API {
  export {
    type APIEndWebrtcSessionResponse as APIEndWebrtcSessionResponse,
    type APIEndWebrtcSessionParams as APIEndWebrtcSessionParams,
  };
}
