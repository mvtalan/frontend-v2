import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import UsernameMenu from "./UserNameMenu";

const MainNav = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        <span>
            {isAuthenticated ? (
                <>
                <Link to="/order-status" className="font-bold hover:text-orange-500">
                    Order Status
                </Link>
                <UsernameMenu />
                </>
            ) : (
                <Button 
                    variant="ghost" 
                    className="font-bold hover:text-orange-500 hover:bg:white"
                    onClick={async () => await loginWithRedirect() }
                >
                    Login
                </Button>
            )}
        </span>
    );
};

export default MainNav;