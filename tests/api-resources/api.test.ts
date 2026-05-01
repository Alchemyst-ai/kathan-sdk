// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Kathan from 'kathan';

const client = new Kathan({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource api', () => {
  // Mock server tests are disabled
  test.skip('endWebrtcSession', async () => {
    const responsePromise = client.api.endWebrtcSession();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('endWebrtcSession: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.endWebrtcSession(
        {
          query_session_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          body_session_id: '8f14e45f-ceea-467a-a0b1-2d3e4f5a6b7c',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Kathan.NotFoundError);
  });
});
