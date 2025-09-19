import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Truck, Shield, Star } from "lucide-react";
import React, { type ReactElement } from 'react';
import {
  Card,
  CardHeader,
  // CardFooter,
  // CardTitle,
  // CardAction,
  // CardDescription,
  CardContent,
} from '@/components/ui/card';

type CardInfoType = {
  icon: ReactElement,
  title: string,
  info: string,
}

const Home = () => {

  const cardInfo: Array<CardInfoType> = [{
    icon: <ShoppingBag/>,
    title: 'Quality Products',
    info: 'Carefully curated selection of premium items from trusted suppliers.'
  },
  {
    icon: <Truck/>,
    title: 'Fast Shipping',
    info: "Quick and reliable delivery to your doorstep within 3-5 business days.",
  },
  {
    icon: <Shield/>,
    title: 'Secure Shopping',
    info: 'Your payment information is protected with industry-standard encryption.',
  },
  {
    icon: <Star/>,
    title: 'Top Rated',
    info: 'Join thousands of satisfied customers who love shopping with us.',
  }

];




  return (
    <>
      <div className="h-screen">
        <div className="h-4/10 flex justify-center bg-gradient-to-tl from-white via-white to-gray-200">
          <div className="w-7/10 flex flex-col items-center justify-center ">
            <div className="h-2/10 font-bold text-6xl">Welcome to ShopCart</div>
            <div className="h-2/10 text-2xl text-center text-gray-500">
              Discover amazing products at unbeatable prices. Your one-stop shop
              for everything you need.
            </div>
            <div className="h-2/10 w-3/10 flex justify-center items-center gap-6">
              <Button asChild className="w-40 hover:text-violet-600">
                <Link to="/shop">
                  {<ShoppingBag size={20} className="mr-2" />} Start Shopping
                </Link>
              </Button>
              <Button asChild className="w-30 text-blue-500" variant="outline">
                <Link to="/cart">View Cart</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="h-6/10 flex justify-center bg-gradient-to-tl  to-gray-100">
          <div className="w-full flex flex-col items-center justify-center ">
            <div className="h-1/10 font-bold text-4xl">
              Why Choose ShopCart?
            </div>
            <div className="h-2/11 w-7/10  text-lg text-center text-gray-500">
        We're committed to providing the best shopping experience with exceptional service and quality products.             
            </div>
            <div className="w-9/10 grid grid-cols-4 gap-4">
              {cardInfo.map(({icon , title, info}, index) => (
                <Card key={index} className=" text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col items-center gap-6">
                      <div className="border rounded-full bg-gray-300 p-3">{icon}</div>
                      <p className="font-semibold text-lg">{title}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center">{info}</p>
                  </CardContent>
                </Card>
              ))} 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
