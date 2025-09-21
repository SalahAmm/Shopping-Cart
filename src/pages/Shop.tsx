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

type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

const Shop = () => {
  const [products, setProduct] = useState<Products[]>([]);

  //Fetch Product Data

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-10 lg:h-">
        {products.map(({ id, title, price, description, image }) => (
          <Card key={id} className="flex flex-col h-full">
            <div className="bg-gray-200 m-3 p-3 aspect-square flex items-center justify-center sm:h-48 overflow-hidden rounded">
              <img
                src={image}
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
                <Button>
                  <ArrowUp />
                </Button>
                <Input
                  type="number"
                  defaultValue={1}
                  min={0}
                  max={10}
                  step={1}
                />
                <Button>
                  <ArrowDown />
                </Button>
              </div>
              <div className="w-full flex justify-center">
                <Button>
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
