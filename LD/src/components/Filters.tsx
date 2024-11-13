import React from 'react';
import { Car } from '../types/car';

interface FiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  brand: string;
  category: string;
  year: string;
  minPrice: string;
  maxPrice: string;
}

export default function Filters({ onFilterChange }: FiltersProps) {
  const [filters, setFilters] = React.useState<FilterState>({
    brand: '',
    category: '',
    year: '',
    minPrice: '',
    maxPrice: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const newFilters = {
      ...filters,
      [e.target.name]: e.target.value
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      <div>
        <label className="block text-sm font-medium text-white/60 mb-2">Marque</label>
        <select
          name="brand"
          value={filters.brand}
          onChange={handleChange}
          className="w-full bg-white/10 border-none text-white rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Toutes les marques</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Porsche">Porsche</option>
          <option value="Lamborghini">Lamborghini</option>
          <option value="Ferrari">Ferrari</option>
          <option value="Bentley">Bentley</option>
          <option value="Land Rover">Land Rover</option>
          <option value="Rolls-Royce">Rolls-Royce</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-white/60 mb-2">Catégorie</label>
        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="w-full bg-white/10 border-none text-white rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Toutes les catégories</option>
          <option value="sport">Sport</option>
          <option value="luxury">Luxe</option>
          <option value="suv">SUV</option>
          <option value="supercar">Supercar</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-white/60 mb-2">Année</label>
        <select
          name="year"
          value={filters.year}
          onChange={handleChange}
          className="w-full bg-white/10 border-none text-white rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Toutes les années</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-white/60 mb-2">Prix min (€)</label>
        <input
          type="number"
          name="minPrice"
          value={filters.minPrice}
          onChange={handleChange}
          placeholder="Min"
          className="w-full bg-white/10 border-none text-white rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white/60 mb-2">Prix max (€)</label>
        <input
          type="number"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleChange}
          placeholder="Max"
          className="w-full bg-white/10 border-none text-white rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}