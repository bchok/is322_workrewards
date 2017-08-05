//Getting Web Elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');


//Add login event
btnLogin.addEventListener('click', e => {
    //get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    //signin
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

});

btnSignUp.addEventListener('click', e => {
    //get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    //signup
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

});

document.addEventListener('init', function(event){
    if (event.target.matches('#profile')) {
        var btnLogout = event.target.querySelector('btnLogout');
        btnLogout.addEventListener('click', e => {
            firebase.auth().signOut();
        });
    }
});


//Authentication Listener
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        console.log(firebaseUser);
        document.getElementById('myNavigator').pushPage('homeScreen.html');
    } else {
        console.log('not logged in');
        document.getElementById('myNavigator').pushPage('index.html');
    }
});

