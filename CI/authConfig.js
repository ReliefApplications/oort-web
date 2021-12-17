const msalConfig = {
    auth: {
      clientId: "a85e101e-e193-4a3f-8911-c6e89bc973e6",
      authority: "https://login.microsoftonline.com/common",
      redirectUri: "https://oort-dev.oortcloud.tech/web-element/",
      postLogoutRedirectUri: 'https://oort-dev.oortcloud.tech/web-element/',
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