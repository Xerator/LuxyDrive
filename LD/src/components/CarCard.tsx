import React from 'react';
import { Users, Briefcase, Fuel, Star, Zap } from 'lucide-react';
import { Car } from '../types/car';

interface CarCardProps {
  car: Car;
  onDoubleClick: () => void;
}

export default function CarCard({ car, onDoubleClick }: CarCardProps) {
  return (
    <div
      className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer"
      onDoubleClick={onDoubleClick}
    >
      <div className="aspect-[16/9] overflow-hidden relative">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
          <Star className="w-4 h-4" />
          {car.rating}
        </div>
        <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {car.year}
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-blue-400 mb-1">{car.brand}</p>
            <h3 className="text-xl font-bold text-white">{car.name}</h3>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-blue-500">€{car.price}</p>
            <p className="text-sm text-white/60">/jour</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-white/80">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-500" />
            <span>{car.specs.seats}</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-blue-500" />
            <span>{car.specs.power} ch</span>
          </div>
          <div className="flex items-center gap-2">
            <Fuel className="w-5 h-5 text-blue-500" />
            <span>{car.specs.fuel}</span>
          </div>
        </div>
        
        <div className="pt-4 border-t border-white/10 flex justify-between items-center">
          <p className="text-sm text-white/60">{car.specs.transmission}</p>
          <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white">
            {car.category}
          </span>
        </div>
      </div>
    </div>
  );
}