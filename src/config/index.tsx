// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics"; // Dihapus karena tidak didukung di React Native
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe4U9qUgWi-hWyhuhHK8duAn7Zlp54BQA",
  authDomain: "gefibrasummer2025.firebaseapp.com",
  databaseURL: "https://gefibrasummer2025-default-rtdb.firebaseio.com",
  projectId: "gefibrasummer2025",
  storageBucket: "gefibrasummer2025.firebasestorage.app",
  messagingSenderId: "66799709229",
  appId: "1:66799709229:web:28883982e19b5fbd18dca4",
  measurementId: "G-4MKG47KQ3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Dihapus karena tidak didukung di React Native

// Test Firebase connection
console.log('🔥 Firebase Config:', {
  projectId: firebaseConfig.projectId,
  authDomain: firebaseConfig.authDomain,
  appId: firebaseConfig.appId,
  messagingSenderId: firebaseConfig.messagingSenderId,
  apiKey: firebaseConfig.apiKey ? '✅ Set' : '❌ Missing'
});

// Test Auth instance
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
console.log('🔥 Firebase Auth initialized:', auth ? '✅ Success' : '❌ Failed');

export default app;
export { auth };