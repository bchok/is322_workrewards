var login = function (){
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');

    //get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    //signin
    const promise = auth.signInWithEmailAndPassword(email, pass);
    //document.getElementById('myNavigator').pushPage('homeScreen.html');

};

var signUp = function () {
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');

    
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    //signup
    const promise = auth.createUserWithEmailAndPassword(email, pass);
};

var logout = function() {
    firebase.auth().signOut();
    ons.ready(function (){
        document.getElementById('myNavigator').pushPage('login.html');
    });
};

//Authentication Listener
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        console.log(firebaseUser);
        document.getElementById('myNavigator').pushPage('homeScreen.html');
    } else {
        console.log('not logged in');
    }
});

var singleCat = function(){
    document.getElementById('myNavigator').pushPage('singleCat.html');
};

var singUserWork = function(){
    document.getElementById('myNavigator').pushPage('singUserWork.html');
};

var singUserPost = function(){
    document.getElementById('myNavigator').pushPage('singUserPost.html');
};

var jobDetails = function(){
    document.getElementById('myNavigator').pushPage('jobDetails.html');
};

//pull categories data from database
ons.ready(function(){
    var databaseRef = firebase.database().ref();
    databaseRef.on("value", snapshot => {
        console.log(snapshot.val());
    });
    
});