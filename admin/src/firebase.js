import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAmdnUpG9ILt0mMVvtK6GEPwR5K15A6o1M",
	authDomain: "netflix-29308.firebaseapp.com",
	projectId: "netflix-29308",
	storageBucket: "netflix-29308.appspot.com",
	messagingSenderId: "623900793635",
	appId: "1:623900793635:web:2b31d94a7e23f0e5d18a96",
	measurementId: "G-J2RF2DS578",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
