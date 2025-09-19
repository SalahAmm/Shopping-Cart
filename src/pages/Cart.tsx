import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '../components/ui/card';
import { ShoppingCart , ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

const Cart = () => {
  return (
    <>
    <div className='mt-15 sm:w-1/2 m-auto'>
      <Card className=" text-center hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex flex-col items-center gap-6">
            <div className="border rounded-full bg-gray-300 p-3"><ShoppingCart/></div>
            <p className="font-semibold text-xl">Your cart is empty</p>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-400">Start shopping to add items to your cart!</p>
        </CardContent>
        <CardFooter className='flex justify-center'>
          <Button asChild className=''>
            <Link to="/shop">Continue Shopping <ArrowRight/> </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
    </>
  );
};

export default Cart;
