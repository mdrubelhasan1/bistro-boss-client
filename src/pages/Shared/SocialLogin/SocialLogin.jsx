import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { googleSignIn } = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const saveUser = { name: loggedInUser.dispalyName, email: loggedInUser.email }

        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify()
        })
          .then(res => res.json())
          .then(() => {
            navigate(from, { replace: true });

          })



      })
  }

  return (
    <div>
      <div className="divider"></div>
      <div className=" text-center my-4">
        <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
          <FcGoogle />
        </button>
      </div>

    </div>
  );
};

export default SocialLogin;