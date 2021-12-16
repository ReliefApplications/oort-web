const msalConfig = {
    auth: {
      clientId: "8e237c86-3d84-4dda-b38d-b92031d77af1",
      authority: "https://login.microsoftonline.com/f610c0b7-bd24-4b39-810b-3dc280afb590",
      redirectUri: "https://ems-safe.who.int",
      postLogoutRedirectUri: 'https://ems-safe.who.int/auth',
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

  // Add here scopes for access token to be used at MS Graph API endpoints.
  const tokenRequest = {
    scopes: ["Mail.Read"]
  };