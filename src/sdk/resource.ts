// File generated from our OpenAPI spec by Scalar. See README.md for details.

import type { TheFirstGalaxy } from './client';

export abstract class APIResource {
  protected _client: TheFirstGalaxy;

  constructor(client: TheFirstGalaxy) {
    this._client = client;
  }
}
