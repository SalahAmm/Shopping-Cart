import { NavLink } from "react-router";
import { Button } from "./ui/button";
import { Home, ShoppingBag, ShoppingCart } from "lucide-react";

const NavBar = () => {
  return (
    <>
      <div className="border-b-1 w-9/10 h-16 m-auto flex justify-between">
        <div className="p-4 text-xl font-bold  ">
          <NavLink to="home">ShopCart</NavLink>
        </div>

        <div className="flex gap-8 justify-center items-center p-8">
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
    </>
  );
};

export default NavBar;
