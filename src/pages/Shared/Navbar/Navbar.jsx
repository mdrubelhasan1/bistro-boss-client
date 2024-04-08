import { Link } from "react-router-dom";

const Navbar = () => {
    const navOptions = <>
        <li><Link to= '/'>Home</Link></li>
        <li><Link to= '/menu'>Our Menu</Link></li>
        
        <li><a>Item 3</a></li>
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-40 bg-black text-white max-w-screen-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  bg-base-300 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn border-0 border-b-4">Get Started</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;