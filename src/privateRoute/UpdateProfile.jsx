import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";


const UpdateProfile = () => {

    const{user, userUpdateProfile} = useContext(AuthContext);
    
    
        const {
          register,
          handleSubmit,
          formState: { errors },
          
          
        } = useForm()
        const onSubmit = (data) => {
            // console.log(data)

            
            const name = data.username
            
            const image = data.image;
            // console.log(name, image);

            //update user  profile
            userUpdateProfile(name, image)
            .then(() => toast("Profile updated successfully!"))
            .catch(() => toast("Something Wrong!"))

        };

    return (
        <div>
            <Helmet>
                <title>Update Profile</title>
            </Helmet>

            <div>
                <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
                    <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                       
                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                            <div className="space-y-2 col-span-full lg:col-span-1">
                                <p className="font-medium">Profile</p>
                                <p className="text-xs">You can update your name & photo here</p>
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="username" className="text-sm">Username</label>
                                    <input id="username" type="text" placeholder={user.displayName} className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" {...register("username", { required: true })}/>
                                    {errors.username && <span className="text-xs text-red-500">This field is required</span>}
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="website" className="text-sm">Email</label>
                                    <input id="website" type="email" placeholder={user.email} className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" {...register("email")}/>
                                     <span className="text-xs text-red-500">Dont change it</span>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="bio" className="text-sm">PhotoURL</label>
                                    <input id="bio" placeholder={user.photoURL} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300" {...register("image", { required: true })}></input>
                                    {errors.image && <span className="text-xs text-red-500">This field is required</span>}
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="bio" className="text-sm">Photo</label>
                                    <div className="flex items-center space-x-2">
                                        <img src={user.photoURL} alt="img" className="w-10 h-10 dark:bg-gray-500 rounded-full dark:bg-gray-300" />
                                        <button type="submit" className="px-4 py-2 border rounded-md dark:border-gray-800">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </section>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateProfile;