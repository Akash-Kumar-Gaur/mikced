import React from "react";
import styles from "./index.module.scss";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import BrandName from "../../components/BrandName";

const provider = new GoogleAuthProvider();
// import { initializeFb } from "../../firebase.configs";

const Login = () => {
  const auth = getAuth();
  auth.languageCode = "en";
  const onSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className={`${styles.centerColumn} ${styles.loginWrapper}`}>
      <div className={`${styles.centerColumn} ${styles.brand}`}>
        <img
          src={require("../../assets/images/logo.png")}
          alt="mikced"
          className={styles.brandLogo}
        />
        <BrandName size={26} color="#444" />
      </div>
      <div className={`${styles.centerColumn} ${styles.loginWelcome}`}>
        <h2>Welcome to the unmixed-verse</h2>
      </div>
      <div className={`${styles.centerColumn} ${styles.loginWithPhone}`}>
        <input type="tel" placeholder="Enter your mobile number" />
        <button>Send OTP</button>
      </div>
      <div className={styles.separator}>---------- OR ----------</div>
      <div className={styles.socialLogin}>
        <button className={styles.centerRow} onClick={onSignIn}>
          <img src={require("../../assets/images/google.png")} alt="google" />
          Login with Google
        </button>
        <span style={{ color: "#42424280", fontSize: '12px ' }}>
          Please don't login now
        </span>
      </div>
    </div>
  );
};

export default Login;
