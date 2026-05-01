// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Health and status
 */
export class Health extends APIResource {
  /**
   * Returns the health status of the WebRTC API service.
   *
   * @example
   * ```ts
   * const response = await client.health.check();
   * ```
   */
  check(options?: RequestOptions): APIPromise<HealthCheckResponse> {
    return this._client.get('/health', options);
  }
}

/**
 * Health probe response.
 */
export interface HealthCheckResponse {
  /**
   * Service identifier — always `webrtc-api-ts` for this API.
   */
  service?: string;

  /**
   * Liveness indicator. Always `healthy` when the service is reachable.
   */
  status?: 'healthy';
}

export declare namespace Health {
  export { type HealthCheckResponse as HealthCheckResponse };
}
