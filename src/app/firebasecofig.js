import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB83J97UjchRIL6irq_Fd0qJPtw4XoffnE",
  authDomain: "autoservisroyal.firebaseapp.com",
  projectId: "autoservisroyal",
  storageBucket: "autoservisroyal.appspot.com",
  messagingSenderId: "838025248102",
  appId: "1:838025248102:web:fa414fa511f2fb346c1ca7",
  measurementId: "G-BK7T3PZYZ3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};
export {analytics};