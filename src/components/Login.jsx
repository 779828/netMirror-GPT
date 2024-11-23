import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    
    email.current.value = "";
    password.current.value = "";
    if (!isSignInForm && fullName.current) {
      fullName.current.value = "";
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_small.jpg"
          alt="logo"
        />
      </div>
      <form
        className=" w-1/4 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-80"
        
      > 
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          ref={fullName}
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
