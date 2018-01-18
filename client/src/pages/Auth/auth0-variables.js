let baseUrl = window.location.protocol + '//' + window.location.hostname;
baseUrl += window.location.port == 3000 ? ':' + window.location.port : '';
console.log("protocol/hostname", baseUrl);

export const AUTH_CONFIG = {
  domain: 'mrr.auth0.com',
  clientId: 'Bmo7h1ckSWUNwFv2FSpEc50s84ab7va1',
  callbackUrl: `${baseUrl}/callback`
}
