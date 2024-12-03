import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMAGE, PROFILE } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;
    
    if(!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, 
            photoURL: PROFILE
          }).then(() => {
            const refreshedUser = auth.currentUser;
            const { uid, email, displayName, photoURL } = refreshedUser;
            dispatch(
              addUser({
                uid,
                email,
                displayName,
                photoURL,
              })
            );
          }).catch((error) => {
            setErrorMessage(error.message);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage);
        });
    };

    // email.current.value = "";
    // password.current.value = "";
    // if (!isSignInForm && fullName.current) {
    //   fullName.current.value = "";
    // }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="fixed h-screen w-screen"
          src={BG_IMAGE}
          alt="bg-image"
        />
      </div>
      <form
        className="h-4/4 w-1/4 absolute p-8 bg-black my-36 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-70"
      > 
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          ref={name}
          type="text"
          placeholder="Full Name"
          className="bg-gray-700 p-4 my-4 w-full"
        />}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="bg-gray-700 p-4 my-4 w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="bg-gray-700 p-4 my-4 w-full"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-800 rounded-lg w-full" onClick={handleButtonClick}>
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now."} </p>
      </form>
    </div>
  )
};

export default Login;
