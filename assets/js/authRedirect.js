const myMSALObj = new Msal.UserAgentApplication(msalConfig);

const signInButton = document.getElementById("signIn");
const signOutButton = document.getElementById('signOut');

function authCallback(error, response) {
  // TODO
  //handle redirect response
}

function signIn() {
  myMSALObj.handleRedirectCallback(authCallback);
  myMSALObj.loginRedirect(loginRequest)
}

function signOut() {
  myMSALObj.logout();
}

function callMSGraph(theUrl, accessToken, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
           callback(JSON.parse(this.responseText));
        }
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    xmlHttp.send();
}

function getTokenPopup(request) {
  return myMSALObj.acquireTokenSilent(request)
    .catch(error => {
      console.log(error);
      console.log("silent token acquisition fails. acquiring token using popup");

      // fallback to interaction when silent call fails
        return myMSALObj.acquireTokenPopup(request)
          .then(tokenResponse => {
            return tokenResponse;
          }).catch(error => {
            console.log(error);
          });
    });
}