export interface Car {
  id: number;
  name: string;
  brand: string;
  year: number;
  price: number;
  image: string;
  specs: {
    transmission: string;
    seats: number;
    luggage: number;
    fuel: string;
    power: number;
  };
  rating: number;
  category: 'sport' | 'luxury' | 'suv' | 'supercar';
}