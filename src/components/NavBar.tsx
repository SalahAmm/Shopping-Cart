import { NavLink } from "react-router";
import { Button } from "./ui/button";
import { Home, ShoppingBag, ShoppingCart } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="border-b-1 h-auto md:h-16 m-auto">
      <div className="flex flex-col md:flex-row md:justify-between p-4">
        <div className="text-xl font-bold text-center md:text-left">
          <NavLink to="home">ShopCart</NavLink>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center py-4 md:py-0">
          <NavLink to="/home">
            {({ isActive }) =>
              isActive ? (
                <Button variant="secondary">
                  <Home size={20} className="mr-2" />
                  Home
                </Button>
              ) : (
                <Button variant="ghost" className="text-gray-500">
                  <Home size={20} className="mr-2" />
                  Home
                </Button>
              )
            }
          </NavLink>
          <NavLink to="/shop">
            {({ isActive }) =>
              isActive ? (
                <Button variant="secondary">
                  <ShoppingBag size={20} className="mr-2" />
                  Shop
                </Button>
              ) : (
                <Button variant="ghost" className="text-gray-500">
                  <ShoppingBag size={20} className="mr-2" />
                  Shop
                </Button>
              )
            }
          </NavLink>
          <NavLink to="/cart">
            {({ isActive }) =>
              isActive ? (
                <Button variant="secondary">
                  <ShoppingCart size={20} className="mr-2" />
                  Cart
                </Button>
              ) : (
                <Button variant="ghost" className="text-gray-500">
                  <ShoppingCart size={20} className="mr-2" />
                  Cart
                </Button>
              )
            }
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
