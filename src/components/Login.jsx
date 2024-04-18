import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";


const Login = () => {
    const { loginUser, googleLogin, githubLogin, setUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log( email, password);

        loginUser(email, password)
            .then(() => {
                // console.log(result.user);
                // setUser(result.user)
                e.target.reset();
                navigate('/');
                

            })
            .catch(() => setError("Invalid Email or Password"))
        setError("");
    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            setUser(result.user);
            navigate('/');
                
            // toast("Successful!")
            
        })
        .catch(() => toast("Something Wrong!"))
    }
    const handleGithubLogin = () => {

        githubLogin()
        .then(result => {
            setUser(result.user);
            navigate('/');
                
            
            
        })
        .catch(() => toast("Something Wrong!"))
    }

    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="hero  ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl text-orange-200 font-bold">Please Login!</h1>

                    </div>
                    <div className="card  shrink-0 w-full max-w-sm shadow-2xl bg-blue-100 ">
                        <form onSubmit={handleLogin} className="card-body ">


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input type="password" name="password" placeholder="password" className="input input-bordered w-full " required />

                                </div>

                            </div>
                            {/* show error message */}
                            <div>
                                {
                                    error && <span className="text-red-500">{error}</span>
                                }
                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        
                        <p className="text-center">Continue with?</p>
                        <div className="flex justify-between  mx-8 mt-2">
                            <button onClick={handleGoogleLogin} className="  "><img className="w-8 h-8 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="" /> </button>
                            <p className="text-gray-900 text-center font-bold ">OR</p>
                            <button onClick={handleGithubLogin} className="  "><img className="w-10 h-10 rounded-full" src="https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg" alt="" /> </button>
                        </div>
                        <div className="flex justify-between text-gray-700 text-xs opacity-70">
                            <p className="ml-7">Google</p>
                            <p className="mr-8">Github</p>
                        </div>
                        <p className="text-center mx-4">Don't have account? Please<Link to="/register"><button className="btn btn-link text-black">Register</button></Link></p>

                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;