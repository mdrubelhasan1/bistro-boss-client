import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaCartShopping, FaUsers } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { FaHome, FaShoppingBag } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaBook } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import useCart from "../hooks/useCart";

const DashB = () => {
    const [cart] = useCart();

    // TODO: load data from the server to have dynamic isAdmin based on data
    const isAdmin = true;
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu w-80 p-4">

                    {
                        isAdmin? <>
                          <li>
                        <NavLink to='/dashboard/userhome' ><FaHome /> Admin Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/histroy'><ImSpoonKnife /> Add Item</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservations'><TfiMenuAlt /> Manage Items</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservations'><FaBook /> Manage Bookings</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/allusers'><FaUsers /> Al Users</NavLink>
                    </li>
                    
                        </> : <>
                         <li>
                        <NavLink to='/dashboard/userhome' ><FaHome /> User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/histroy'><GiWallet /> Payment History</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservations'><FaCalendar /> Reservations</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/mycart' ><FaCartShopping /> My Cart
                            <span className="badge  badge-secondary">+{cart?.length || 0}</span>
                        </NavLink>

                    </li>
                        </>
                    }
                   

                    <div className="divider"></div>

                    <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to='/menu'> <IoMdMenu /> Our Menu</NavLink></li>
                    <li><NavLink to='/order/salad'> <FaShoppingBag />Order Food</NavLink></li>

                </ul>
            </div>
        </div>
    );
};

export default DashB;