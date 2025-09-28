import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Star, ArrowUp, ArrowDown, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router";
import { type CartItem } from "@/App";

type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string;
};

// context type 
type CartContextType = {
  cartItem: CartItem[];
  addToCart: (product: Products, quantity: number) => void;
  updateQuantity: (id: number, newQuantity: number) => void;
  removeFromCart: (id: number) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
};



const Shop = () => {
  const [products, setProduct] = useState<Products[]>([]);

  // get cart function from app.tsx  

  const { addToCart } = useOutletContext<CartContextType>();

  const [quantities , setQuantities] = useState<{[key:number]: number}>({});

  //Fetch Product Data

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      // initialize quantities to 1 
      const initializeQuantities : {[key:number] : number}= {}; 
      json.forEach((product:Products) => {
        initializeQuantities[product.id] = 1;
      });
      setQuantities(initializeQuantities);
      }
    );


  }, []);


  // handle adding item to cart
    const handleAddToCart = (product: Products) => {
      const quanitity = quantities[product.id] || 1;
      addToCart(product , quanitity);
      //reset to 1
      setQuantities( prev => ({
        ...prev,
        [product.id]: 1
      }))
    }

  // handle increase quanitity for specific product
  const handleIncrease = (productId: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.min((prev[productId] || 1) + 1 , 10)
    }));

  }


  const handleDecrease = (productId: number ) => {
    setQuantities(prev => ( {
      ...prev,
      [productId] : Math.max((prev[productId] || 1) - 1 , 1) 
    }));
  }



const handleQuantitiesChange = (productId: number , value: string) => {
  const numValue  = parseInt(value) || 1;

  setQuantities( prev => ({
    ...prev,
    [productId]: Math.max(1 , Math.min(numValue , 10))
  }));
}


  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-10 lg:h-">
        {products.map(({ id, title, price, description, images }) => (
          <Card key={id} className="flex flex-col h-full shadow">
            <div className="m-3 p-3 aspect-square flex items-center justify-center sm:h-48 overflow-hidden rounded">
              <img
                src={images}
                alt=""
                className="hover:scale-110 transition duration-300 ease-in-out max-w-full max-h-full object-contain"
              />
            </div>

            <CardContent className="flex-1 min-h-0">
              <div>
                <p className="font-bold text-lg text-center p-4 line-clamp-6">
                  {title}
                </p>
                <CardDescription>
                  <div className="p-2 flex gap-2 items-center border-b-1">
                    <p>5/5</p>
                    <Star fill="yellow" strokeWidth={0} />
                  </div>
                  <p className="text-center sm:line-clamp-4">{description}</p>
                </CardDescription>
                <p className="p-3 text-center font-bold text-3xl">${price}</p>
              </div>
            </CardContent>

            <CardFooter className="flex-none flex flex-col justify-center gap-3 items-center p-4">
              <div className="flex gap-2 items-center justify-between p-2">
                <Button onClick={() => handleIncrease(id)}>
                  <ArrowUp />
                </Button>
                <Input
                  type="number"
                  value={quantities[id] || 1}
                  min={0}
                  max={10}
                  step={1}
                  onChange={(e) => handleQuantitiesChange(id , e.target.value)}
                />
                <Button onClick={() => handleDecrease(id)}>
                  <ArrowDown />
                </Button>
              </div>
              <div className="w-full flex justify-center">
                <Button onClick={()=> handleAddToCart({id , title , price , description , images})}>
                  <ShoppingCart /> Add to Cart
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Shop;
