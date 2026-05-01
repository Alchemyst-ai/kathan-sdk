// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Kathan from 'kathan';

const client = new Kathan({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webrtc', () => {
  // Mock server tests are disabled
  test.skip('exchangeOffer: only required params', async () => {
    const responsePromise = client.webrtc.exchangeOffer({
      apiKey: 'ak_live_abc123',
      campaignId: 'camp_01HZX8K9PQRSTUVWXYZ',
      orgId: 'org_01HZX8K9PQRSTUVWXYZ',
      sdp: 'v=0\r\no=- 4611731400430051336 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\nm=audio 9 UDP/TLS/RTP/SAVPF 111\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:F7gI\r\na=ice-pwd:x9cml/YzichV2+XlhiMu8g\r\na=fingerprint:sha-256 12:34:56:...\r\na=setup:actpass\r\na=mid:0\r\na=sendrecv\r\na=rtpmap:111 opus/48000/2\r\n',
      type: 'offer',
      userId: 'user_01HZX8K9PQRSTUVWXYZ',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('exchangeOffer: required and optional params', async () => {
    const response = await client.webrtc.exchangeOffer({
      apiKey: 'ak_live_abc123',
      campaignId: 'camp_01HZX8K9PQRSTUVWXYZ',
      orgId: 'org_01HZX8K9PQRSTUVWXYZ',
      sdp: 'v=0\r\no=- 4611731400430051336 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\nm=audio 9 UDP/TLS/RTP/SAVPF 111\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:F7gI\r\na=ice-pwd:x9cml/YzichV2+XlhiMu8g\r\na=fingerprint:sha-256 12:34:56:...\r\na=setup:actpass\r\na=mid:0\r\na=sendrecv\r\na=rtpmap:111 opus/48000/2\r\n',
      type: 'offer',
      userId: 'user_01HZX8K9PQRSTUVWXYZ',
      extraPath: 'extraPath',
      toNumber: 'toNumber',
      webrtc_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
