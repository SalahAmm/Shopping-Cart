import { NavLink } from "react-router";
import { Button } from "./ui/button";
import { Home, ShoppingBag, ShoppingCart } from "lucide-react";

type NavBarProps = {
  cartCount:  number;
};

const NavBar = ({ cartCount }: NavBarProps) => {
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
                  {cartCount > 0 && (
                    <span className="relative inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full ml-1">
                      {cartCount}
                    </span>
                  )}
                </Button>
              ) : (
                <Button variant="ghost" className="text-gray-500 relative">
                  <ShoppingCart size={20} className="mr-2" />
                  Cart
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                      {cartCount}
                    </span>
                  )}
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
