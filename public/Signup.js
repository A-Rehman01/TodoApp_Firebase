function signup() {
    let emailsign = document.getElementById('emailsign');
    let passwordsign = document.getElementById('passwordsign');
    if (emailsign.value === '' || passwordsign.value === '') {
        let errormessage = document.getElementById('errormessage').innerHTML='Insert Email or Password'
        return
    }
    firebase.auth().createUserWithEmailAndPassword(emailsign.value, passwordsign.value)
        .then(function (result) {
            console.log(result)
            Loginpage();
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            let errormessage = document.getElementById('errormessage').innerHTML=errorMessage
            console.log(errorMessage);
        });
}
function Loginpage(){
    window.location.replace('./login/index.html'); 
}