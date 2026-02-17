import IceCoffee from "../assets/IceCoffee.jpg";
import Cappuccino from "../assets/cappuccino.png";
import CaramelLatte from "../assets/caramelLatte.png";
import Espresso from "../assets/espresso.jpg";
import ChocolateCake from "../assets/chocolateCake.jpg";
import Cheesecake from "../assets/cheesecake.jpg";
import Tiramisu from "../assets/tiramisu.png";
import Croissant from "../assets/croissant.jpg";
import Pancakes from "../assets/pancakes.jpg";
import FrenchToast from "../assets/frenchToast.jpg";

export const productData = [
  {
    id: 1,
    name: "Ice Coffee",
    category: "Beverages",
    price: "4.99",
    stock: "120",
    active: true,
    image: IceCoffee,
  },
  {
    id: 2,
    name: "Espresso",
    category: "Beverages",
    price: "3.99",
    stock: "150",
    active: false,
    image: Espresso,
  },
  {
    id: 3,
    name: "Tiramisu",
    category: "Desserts",
    price: "7.49",
    stock: "30",
    active: true,
    image: Tiramisu,
  },
  {
    id: 4,
    name: "Caramel Latte",
    category: "Beverages",
    price: "5.99",
    stock: "85",
    active: true,
    image: CaramelLatte,
  },
  {
    id: 5,
    name: "Chocolate Cake",
    category: "Desserts",
    price: "6.99",
    stock: "45",
    active: false,
    image: ChocolateCake,
  },

  {
    id: 6,
    name: "Croissant",
    category: "Breakfast",
    price: "3.49",
    stock: "100",
    active: true,
    image: Croissant,
  },
  {
    id: 7,
    name: "Cheesecake",
    category: "Desserts",
    price: "6.49",
    stock: "40",
    active: true,
    image: Cheesecake,
  },

  {
    id: 8,
    name: "Cappuccino",
    category: "Beverages",
    price: "5.49",
    stock: "95",
    active: true,
    image: Cappuccino,
  },
  {
    id: 9,
    name: "Pancakes",
    category: "Breakfast",
    price: "7.99",
    stock: "60",
    active: true,
    image: Pancakes,
  },
  {
    id: 10,
    name: "French Toast",
    category: "Breakfast",
    price: "8.49",
    stock: "55",
    active: false,
    image: FrenchToast,
  },
];

export const orderData = [
  {
    id: 1,
    product_id: 1,
    quantity: 2,
    active: true,
  },
  {
    id: 2,
    product_id: 3,
    quantity: 1,
    active: true,
  },
  {
    id: 3,
    product_id: 5,
    quantity: 3,
    active: true,
  },
  {
    id: 4,
    product_id: 2,
    quantity: 1,
    active: false,
  },
  {
    id: 5,
    product_id: 8,
    quantity: 4,
    active: true,
  },
  {
    id: 6,
    product_id: 4,
    quantity: 2,
    active: true,
  },
  {
    id: 7,
    product_id: 6,
    quantity: 5,
    active: true,
  },
  {
    id: 8,
    product_id: 9,
    quantity: 1,
    active: false,
  },
  {
    id: 9,
    product_id: 1,
    quantity: 2,
    active: true,
  },
  {
    id: 10,
    product_id: 7,
    quantity: 3,
    active: true,
  },
];
