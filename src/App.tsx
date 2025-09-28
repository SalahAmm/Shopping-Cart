// import {Home , ShoppingCart , ShoppingBag} from 'lucide-react';
import NavBar from './components/NavBar'
import { Outlet } from 'react-router'
import './App.css'
import {useState} from 'react';


//  what a cart item looks like

export type CartItem = {
  id : number;
  title : string;
  price: number;
  description: string;
  image: string;
  quantity: number;
};

// what Product look like 

export type Product = {
  id : number;
  title : string;
  price: number;
  description: string;
  images: string;
}

function App() {

  // State to store all cart items
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // Function to add item to cart
  
    const addToCart = (product: Product , quantity: number ) => {
       // check if item already exist in cart 
       const existingItem = cartItems.find( item => item.id === product.id);

       // if item exists , update quantity
       if (existingItem) {
       setCartItems(cartItems.map(item => (
        item.id === product.id 
        ? {...item, quantity: item.quantity + quantity}
        : item
       )));
       
    } else {
      // if item doesn't exist, add it as new item 
        const newItem: CartItem = {
          id: product.id,
          title: product.title,
          price: product.price,
          description: product.description,
          image: product.images, 
          quantity: quantity
        };
        setCartItems([...cartItems, newItem]);
    }
  }; // Added missing closing brace for addToCart function

  // Update quantity of specific item

  const updateQuantity = (id: number , newQuantity: number) => {
    
      // if quantity less than 0 remove item
    if (newQuantity <= 0) {
      removeFromCart(id);
  } else {
    setCartItems(cartItems.map(item => 
      item.id === id
      ? {... item , quantity: newQuantity}
      : item
    ));
  } 
};


// remove item from cart 

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item=> item.id !== id));
  }


  const getTotalItems = () => {
    return cartItems.reduce((total , item) => total + item.quantity , 0);
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total , item) => total + item.price * item.quantity , 0);
  }

  // create context to pass to children components
  const cartContext = {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    getTotalItems,
    getTotalPrice
  };

  return (
    <>

    <div className='min-h-screen w-full m-auto p-5 sm:w-full md:w-full box-border ' >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <NavBar cartCount={getTotalItems()} />
      <Outlet context={cartContext}/>
      </div>
    </div>

    </>
  )
}

export default App
