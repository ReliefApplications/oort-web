// Select DOM elements to work with
const signInButton = document.getElementById("SignIn");

function showWelcomeMessage(account) {
    // Reconfiguring DOM elements
    signInButton.setAttribute("onclick", "signOut();");
    signInButton.setAttribute('class', "btn btn-success")
    signInButton.innerHTML = "Sign Out";
}