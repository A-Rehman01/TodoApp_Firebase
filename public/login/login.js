function login (){ 
    let LoginEmail = document.getElementById('LoginEmail');
    let Loginpassword = document.getElementById('Loginpassword');

    if (LoginEmail.value === '' || Loginpassword.value === '') {
        let errormessage = document.getElementById('errormessage').innerHTML='Insert Email or Password'
        return
    }
    firebase.auth().signInWithEmailAndPassword(LoginEmail.value, Loginpassword.value)
    .then(function(result){
        console.log(result)
        Todo();
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        let errormessage = document.getElementById('errormessage').innerHTML=errorMessage
      })
}

function Todo(){
    window.location.replace('../../Todos/index.html');
}