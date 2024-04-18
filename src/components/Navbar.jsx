import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);
    // console.log(user);
    // const [image, setImage] = useState(user.photoURL);

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/updateProfile'>Update
            Profile</NavLink></li>
        <li><NavLink to='/userProfile'>User Profile</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 mt-8 ">
            <div className="navbar-start">
                <div className="dropdown z-10">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img className="w-12 h-12 rounded-full" src="https://t4.ftcdn.net/jpg/03/33/39/57/360_F_333395790_t8aeuXKVOojMngKZIBvvs44E0Rqqrlna.jpg" alt="" />
                <a className="btn btn-ghost text-4xl font-bold">Havenly</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-4">
               
                {
                    user ? <div className=" flex items-center gap-4">

                        <div className="tooltip" data-tip={user.displayName? user.displayName: "Not Found"}>
                        <img className="rounded-full w-10 h-10 " alt="img" src={user.photoURL ? user.photoURL : "https://m.media-amazon.com/images/I/71ZtQnzOU4L._AC_UY1100_.jpg"} />
                        </div>
                        <button onClick={logOut} className="btn btn-primary bg-orange-200 text-orange-600 border-none text-[16px] font-bold ">Logout</button>

                    </div>

                        :
                        <div className="flex gap-4">
                            <NavLink to='/login' className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                                    <span className="relative text-white">Log in</span>
                                </span>
                            </NavLink>
                            <NavLink to='/register' className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                                    <span className="relative text-white">Register</span>
                                </span>
                            </NavLink>
                        </div>
                }



            </div>
        </div>
    );
};

export default Navbar;