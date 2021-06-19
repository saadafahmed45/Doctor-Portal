import React, { useContext } from 'react';
import "firebase/auth";
import firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import { UserContext } from "../../App";
import { useHistory, useLocation } from 'react-router-dom';
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      console.log(signedInUser);
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

  return (
    <div className="login-page container">
    <div className="row align-items-center" style={{ height: "100vh" }}>
      <div className="col-md-6 shadow p-5">
        <div className="form-group">
          <label htmlFor="">User Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input type="password" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="" className="text-danger">Forgot your password?</label>
        </div>
        <div className="from-group mt-5">
          <button className="btn btn-brand" onClick={handleGoogleSignIn}>Google Sign in</button>
        </div>
      </div>
      <div className="col-md-6 d-none d-md-block align-self-end">
      </div>
    </div>
  </div>
  );
};

export default Login;
