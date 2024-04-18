import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";


const UpdateProfile = () => {

    const{user, userUpdateProfile} = useContext(AuthContext);
   
    
        const {
          register,
          handleSubmit,
          setValue
          
          
        } = useForm();

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

        //set initial value
        useEffect(() => {
            setValue("username", user.displayName);
            setValue("image", user.photoURL);
          }, [user.displayName, user.photoURL, setValue]);

    return (
        <div>
            <Helmet>
                <title>Update Profile</title>
            </Helmet>

            <div>
                <section className="p-6">
                    <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                       
                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
                            <div className="space-y-2 col-span-full lg:col-span-1">
                                <p className="font-medium">My Profile</p>
                                <img src={user.photoURL} alt="img" className="w-28 h-28 dark:bg-gray-500 rounded-lg dark:bg-gray-300" />
                                
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="username" className="text-sm ">Username</label>
                                    <input 
                                    id="username" 
                                    type="text"  
                                    // value={user.displayName}
                                   
                                    className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" 
                                    {...register("username")}/>
                                    
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="website" className="text-sm">Email</label>
                                    <input id="website" type="email" value={user.email} disabled
                                    className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" {...register("email")}/>
                                     <span className="text-xs text-red-500">Dont change it</span>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="bio" className="text-sm">PhotoURL</label>
                                    <input id="bio" 
                                    // value={user.photoURL} 
                                    className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300" 
                                    {...register("image")}></input>
                                    
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="bio" className="text-sm"></label>
                                    <div className="flex items-center space-x-2 mt-4">
                                        
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