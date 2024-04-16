import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";


const Login = () => {
    const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log( email, password);

        loginUser(email, password)
            .then(result => {
                // console.log(result.user);
                
                e.target.reset();
                navigate('/');
                

            })
            .catch(error => setError("Invalid Email or Password"))
        setError("");
    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            // console.log(result.user);
            navigate('/');
                
            // toast("Successful!")
            
        })
        .catch(error => toast("Something Wrong!"))
    }
    const handleGithubLogin = () => {

        githubLogin()
        .then(result => {
            console.log(result.user);
            navigate('/');
                
            
            
        })
        .catch(error => toast("Something Wrong!"))
    }

    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="hero  ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl text-blue-400 font-bold">Login Here!</h1>

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
                        <div className="flex justify-between mx-8">
                            <button onClick={handleGoogleLogin} className="btn  mb-6">Google </button>
                            <button onClick={handleGithubLogin} className="btn  mb-6">GitHub </button>
                        </div>
                        <p className="text-center mx-4">Don't have account? Please<Link to="/register"><button className="btn btn-link">Register</button></Link></p>

                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;