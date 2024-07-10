import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
   

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>
        <li><Link to='/secret'>Secret</Link></li>
        <li>
            <Link to='/dashboard/mycart'>
                <button className="btn">
                   <FaShoppingCart />
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </Link>
        </li>


        {
            user ?
                <>
                    {/* <span>{user?.displayName}</span> */}
                    <button onClick={handleLogout} className="btn btn-ghost">LogOut</button>
                </> :
                <>
                    <li><Link to='/login'>Login</Link></li>
                </>
        }

    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-50 bg-green-500 text-orange-500 max-w-screen-lg">
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
                        {navOptions}
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