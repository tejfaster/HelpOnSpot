import Firebase from 'firebase'

const firebaseConfig = {
    apiKey:"AIzaSyDLdNmh9r64I6rlld5mEwayFSC1u5b1Yyc",
    databaseURL:'https://helponspot-c69af-default-rtdb.firebaseio.com/',
    projectId:'helponspot-c69af',
    appId:'1:815738741485:android:8e58142c59d49807ed62e4',
};

export default Firebase.initializeApp(firebaseConfig);

