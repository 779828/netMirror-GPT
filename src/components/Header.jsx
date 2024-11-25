import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(store => store.user)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {})
    .catch((error) => {
      // An error happened.
    });

  };

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && <div className='flex'>
        <img className="mt-3 mr-1 w-10 h-10 cursor-pointer rounded-3xl" src={user?.photoURL} />
        <button onClick={handleSignOut} className="mt-3 p-2 w-20 h-10 rounded-lg bg-red-700">Sign Out</button>
      </div>}
    </div>
  )
};

export default Header;