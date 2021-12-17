const msalConfig = {
  auth: {
    clientId: "d62083d8-fdc0-4a6a-8618-652380eebdb9",
    authority: "https://login.microsoftonline.com/fbacd48d-ccf4-480d-baf0-31048368055f",
    redirectUri: "http://localhost:4200",
    postLogoutRedirectUri: 'http://localhost:4200',
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where the cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if we have issues on IE11 or Edge
  }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
const loginRequest = {
  scopes: ["openid", "profile", "User.Read"]
 };

// Add scopes here for access token to be used at Microsoft Graph API endpoints.
const tokenRequest = {
  scopes: ["User.Read", "Mail.Read"]
 };