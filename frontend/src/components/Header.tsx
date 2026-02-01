import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
    const {isLoggedIn} = useAppContext();
    return(
        <div className = "bg-blue-800 py-6">
            <div className = "container mx-auto flex justify-between">
                <span className = "text-3xl text-white font-bold tracking-tight">
                    <Link to="/">StayMate.com</Link>
                </span>
                <span className = "flex space-x-2">
                    {isLoggedIn ? <>
                    <Link to="/my-booking">My Booking</Link> 
                    <Link to="/my-hotels">My Hotels</Link> 
                    <SignOutButton  />
                    </>: 
                    <Link to="/sign-in" className ="flex bg-white items-center text-blue-600 px-3 hover:bg-grey-100" >
                    Sign In
                    </Link>
                     }
                    
                </span>
            </div>
        </div>

);
}; 

export default Header;