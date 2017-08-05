window.fn = {};
window.fn.data = null;

ons.ready(function(){
    document.addEventListener('click', function(event){
        if(event.target.id == "index"){
            const btnLogin = document.getElementById('btnLogin');
            const txtEmail = document.getElementById('txtEmail');
            const txtPassword = document.getElementById('txtPassword');

            //signin
            const promise = auth.signInWithEmailAndPassword(email, pass);
            promise.catch(event => console.log(e.message));
        }
        if(event.target.id == "profile"){
            const btnLogout = document.getElementById('btnLogout');
            firebase.auth().signOut();
        }

    });
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