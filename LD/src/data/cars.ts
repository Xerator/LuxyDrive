import { Car } from '../types/car';

export const cars: Car[] = [
  {
    id: 1,
    name: 'Mercedes-AMG GT',
    brand: 'Mercedes',
    year: 2023,
    price: 350,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1200',
    specs: {
      transmission: 'Automatique',
      seats: 2,
      luggage: 2,
      fuel: 'Essence',
      power: 585
    },
    rating: 4.9,
    category: 'sport'
  },
  {
    id: 2,
    name: 'Porsche 911 GT3',
    brand: 'Porsche',
    year: 2022,
    price: 450,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
    specs: {
      transmission: 'PDK',
      seats: 2,
      luggage: 2,
      fuel: 'Essence',
      power: 510
    },
    rating: 5.0,
    category: 'sport'
  },
  {
    id: 3,
    name: 'Lamborghini Huracán',
    brand: 'Lamborghini',
    year: 2023,
    price: 650,
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1200',
    specs: {
      transmission: 'Automatique',
      seats: 2,
      luggage: 2,
      fuel: 'Essence',
      power: 640
    },
    rating: 4.8,
    category: 'supercar'
  },
  {
    id: 4,
    name: 'Bentley Continental GT',
    brand: 'Bentley',
    year: 2021,
    price: 550,
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=1200',
    specs: {
      transmission: 'Automatique',
      seats: 4,
      luggage: 3,
      fuel: 'Essence',
      power: 550
    },
    rating: 4.9,
    category: 'luxury'
  },
  {
    id: 5,
    name: 'Range Rover Sport',
    brand: 'Land Rover',
    year: 2023,
    price: 300,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=1200',
    specs: {
      transmission: 'Automatique',
      seats: 5,
      luggage: 4,
      fuel: 'Hybride',
      power: 400
    },
    rating: 4.7,
    category: 'suv'
  },
  {
    id: 6,
    name: 'Ferrari F8 Tributo',
    brand: 'Ferrari',
    year: 2022,
    price: 750,
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200',
    specs: {
      transmission: 'Automatique',
      seats: 2,
      luggage: 1,
      fuel: 'Essence',
      power: 720
    },
    rating: 5.0,
    category: 'supercar'
  },
  {
    id: 7,
    name: 'Rolls-Royce Ghost',
    brand: 'Rolls-Royce',
    year: 2021,
    price: 900,
    image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&q=80&w=1200',
    specs: {
      transmission: 'Automatique',
      seats: 5,
      luggage: 4,
      fuel: 'Essence',
      power: 571
    },
    rating: 4.9,
    category: 'luxury'
  },
  {
    id: 8,
    name: 'Porsche Taycan',
    brand: 'Porsche',
    year: 2023,
    price: 400,
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=1200',
    specs: {
      transmission: 'Automatique',
      seats: 4,
      luggage: 3,
      fuel: 'Électrique',
      power: 625
    },
    rating: 4.8,
    category: 'sport'
  }
];