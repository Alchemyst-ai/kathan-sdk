// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Kathan } from '../client';

export abstract class APIResource {
  protected _client: Kathan;

  constructor(client: Kathan) {
    this._client = client;
  }
}
