// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId
// };

const firebaseConfig = {
	apiKey: 'AIzaSyAkxdJkaZeFu7mnpH_p4-hcbWZw56LwWSg',
	authDomain: 'eduverse-b37bb.firebaseapp.com',
	projectId: 'eduverse-b37bb',
	storageBucket: 'eduverse-b37bb.appspot.com',
	messagingSenderId: '128480715559',
	appId: '1:128480715559:web:017b7ed0e3ed7af0dd7f02',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);