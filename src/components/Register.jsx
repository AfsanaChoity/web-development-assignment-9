import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";


const Register = () => {
    const { createUser, userUpdateProfile } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState("");
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        // formState: { errors },
      } = useForm();

      //submit form
      const onSubmit = (data) => {
        // console.log(data);
        const email = data.email;
        const password = data.password;
        const image = data.image;
        const name = data.fullname;

        if (password.length < 6) {
            setError("Password must be 6 characters")
            return;
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
            setError("Password must contain one uppercase letter & one lowercase letter")
            return;
        }


        //create user and update profile
        createUser(email, password)
        .then(result => {
            
            userUpdateProfile(name, image)
                .then(() =>{
                    if(result.user){
                        toast("Registration Successful!")
                    }
                })
            
            // setUser(result.user)
            reset();
            // navigate('/')
        })
        .catch(error => setError(error.message.split("/")[1].split(")")[0]))

        setError('');
      }

    

    

    

    return (
        <div className="">
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div className="hero  ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl text-orange-200 font-bold">Register Please!</h1>

                    </div>
                    <div className="card  shrink-0 w-full max-w-sm shadow-2xl bg-blue-100 ">
                        <form onSubmit={handleSubmit(onSubmit)}className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required {...register("fullname")}/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="Text" name="photo" placeholder="Give Your Photo URL" className="input input-bordered"  required {...register("image")}/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered"  required {...register("email")}/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input type={ showPassword? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full"  required {...register("password")}/>
                                    <span className="absolute top-1/3 right-2" onClick={ () => setShowPassword(!showPassword)}>
                                        {
                                            showPassword? <FaEyeSlash></FaEyeSlash> :
                                            <FaEye></FaEye>
                                        }
                                    </span>
                                </div>

                            </div>
                            {/* show error message */}
                            <div>
                                {
                                    error && <span className="text-red-500">{error}</span>
                                }
                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className="text-center mx-4">Already have account? Please<Link to="/login"><button className="btn btn-link text-black">Login</button></Link></p>

                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;