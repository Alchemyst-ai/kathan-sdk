// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * WebRTC signaling
 */
export class Webrtc extends APIResource {
  /**
   * Submit a WebRTC SDP offer to establish a peer connection. Returns an SDP answer
   * and a unique webrtc_id for the session.
   *
   * @example
   * ```ts
   * const response = await client.webrtc.exchangeOffer({
   *   apiKey: 'ak_live_abc123',
   *   campaignId: 'camp_01HZX8K9PQRSTUVWXYZ',
   *   orgId: 'org_01HZX8K9PQRSTUVWXYZ',
   *   sdp: 'v=0\r\no=- 4611731400430051336 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\nm=audio 9 UDP/TLS/RTP/SAVPF 111\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:F7gI\r\na=ice-pwd:x9cml/YzichV2+XlhiMu8g\r\na=fingerprint:sha-256 12:34:56:...\r\na=setup:actpass\r\na=mid:0\r\na=sendrecv\r\na=rtpmap:111 opus/48000/2\r\n',
   *   type: 'offer',
   *   userId: 'user_01HZX8K9PQRSTUVWXYZ',
   * });
   * ```
   */
  exchangeOffer(
    body: WebrtcExchangeOfferParams,
    options?: RequestOptions,
  ): APIPromise<WebrtcExchangeOfferResponse> {
    return this._client.post('/webrtc/offer', { body, ...options });
  }
}

/**
 * SDP answer and the session id assigned to this peer connection.
 */
export interface WebrtcExchangeOfferResponse {
  /**
   * SDP answer string the browser should set as its remote description.
   */
  sdp?: string;

  /**
   * SDP description type — always `answer`.
   */
  type?: 'answer';

  /**
   * Session ID. Use this value in the websocket paths (`/ws/audio/{session_id}`,
   * `/ws/audio-out/{session_id}`) and when calling `/api/end`.
   */
  webrtc_id?: string;
}

export interface WebrtcExchangeOfferParams {
  /**
   * API key authenticating the caller's organization.
   */
  apiKey: string;

  /**
   * Campaign ID whose configuration (prompt, voice, model) drives the session.
   */
  campaignId: string;

  /**
   * Organization ID owning the campaign.
   */
  orgId: string;

  /**
   * SDP offer string produced by the browser's RTCPeerConnection.createOffer().
   */
  sdp: string;

  /**
   * SDP description type. For this endpoint should always be `offer`; the other
   * values are accepted for forward compatibility with the RTCSessionDescriptionInit
   * shape.
   */
  type: 'offer' | 'answer' | 'pranswer' | 'rollback';

  /**
   * End-user ID initiating the call.
   */
  userId: string;

  /**
   * Additional routing path appended to the downstream WebSocket URL — useful for
   * inbound/transfer flows.
   */
  extraPath?: string;

  /**
   * Lead phone number in E.164 format. Used to inject lead context into the agent
   * prompt.
   */
  toNumber?: string;

  /**
   * Optional client-supplied session ID. If omitted, the server generates one and
   * returns it in the response.
   */
  webrtc_id?: string;
}

export declare namespace Webrtc {
  export {
    type WebrtcExchangeOfferResponse as WebrtcExchangeOfferResponse,
    type WebrtcExchangeOfferParams as WebrtcExchangeOfferParams,
  };
}
