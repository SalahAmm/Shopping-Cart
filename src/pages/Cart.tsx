import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '../components/ui/card';
import { ShoppingCart, ArrowRight, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import { useOutletContext } from 'react-router';
import { type CartItem , type Product} from '@/App';

// Context type to match what's passed from App.tsx
type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  updateQuantity: (id: number, newQuantity: number) => void;
  removeFromCart: (id: number) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
};

const Cart = () => {
  // Get cart functions and data from App.tsx context
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useOutletContext<CartContextType>();

  // Handle quantity increase
  const handleIncrease = (id: number, currentQuantity: number) => {
    updateQuantity(id, currentQuantity + 1);
  };

  // Handle quantity decrease
  const handleDecrease = (id: number, currentQuantity: number) => {
    if (currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1);
    }
  };

  // Handle item removal
  const handleRemove = (id: number) => {
    removeFromCart(id);
  };

  // If cart is empty, show empty state
  if (cartItems.length === 0) {
    return (
      <div className='mt-15 sm:w-1/2 m-auto'>
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex flex-col items-center gap-6">
              <div className="border rounded-full bg-gray-300 p-3">
                <ShoppingCart />
              </div>
              <p className="font-semibold text-xl">Your cart is empty</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-400">Start shopping to add items to your cart!</p>
          </CardContent>
          <CardFooter className='flex justify-center'>
            <Button asChild>
              <Link to="/shop">Continue Shopping <ArrowRight /> </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  // If cart has items, show cart contents
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h1>
      
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <Card key={item.id} className="p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Product Image */}
                <div className="w-full sm:w-32 h-32 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                
                {/* Product Details */}
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold text-lg line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                  <p className="text-xl font-bold">${item.price.toFixed(2)}</p>
                </div>
                
                {/* Quantity Controls and Remove */}
                <div className="flex flex-col sm:items-end gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:text-red-700 self-end"
                  >
                    <Trash2 size={16} />
                  </Button>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDecrease(item.id, item.quantity)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={16} />
                    </Button>
                    
                    <span className="w-12 text-center font-semibold">
                      {item.quantity}
                    </span>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleIncrease(item.id, item.quantity)}
                    >
                      <Plus size={16} />
                    </Button>
                  </div>
                  
                  <p className="font-semibold">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-4">
            <CardHeader className="px-0 pt-0">
              <h2 className="text-xl font-bold">Order Summary</h2>
            </CardHeader>
            
            <CardContent className="px-0 space-y-4">
              <div className="flex justify-between">
                <span>Items ({cartItems.reduce((total, item) => total + item.quantity, 0)})</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              
              <hr />
              
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
            </CardContent>
            
            <CardFooter className="px-0 pb-0 flex flex-col gap-3">
              <Button className="w-full" size="lg">
                Proceed to Checkout
              </Button>
              
              <Button variant="outline" asChild className="w-full">
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;
