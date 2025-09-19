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
    <div className="h-screen flex flex-col">
      <div className="flex-none py-8 md:py-16 flex justify-center bg-gradient-to-tl from-white via-white to-gray-200">
        <div className="w-[90%] md:w-[70%] flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-6">Welcome to ShopCart</h1>
          <p className="text-lg md:text-2xl text-center text-gray-500 mb-8">
            Discover amazing products at unbeatable prices. Your one-stop shop
            for everything you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Button asChild className="w-full sm:w-40 hover:text-violet-600">
              <Link to="/shop">
                <ShoppingBag size={20} className="mr-2" /> Start Shopping
              </Link>
            </Button>
            <Button asChild className="w-full sm:w-40 text-blue-500" variant="outline">
              <Link to="/cart">View Cart</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center bg-gradient-to-tl to-gray-100">
        <div className="w-[90%] flex flex-col items-center justify-evenly py-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center">
              Why Choose ShopCart?
            </h2>
            <p className="text-base md:text-lg text-center text-gray-500 max-w-3xl">
              We're committed to providing the best shopping experience with exceptional service and quality products.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
  );
};



export default Home;
