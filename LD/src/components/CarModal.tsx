import React, { useState } from 'react';
import { X, Calendar, View } from 'lucide-react';
import BookingForm from './BookingForm';
import CarViewer3D from './CarViewer3D';

interface CarModalProps {
  car: {
    id: number;
    name: string;
    price: number;
    image: string;
    specs: {
      transmission: string;
      seats: number;
      luggage: number;
      fuel: string;
    };
  } | null;
  onClose: () => void;
}

export default function CarModal({ car, onClose }: CarModalProps) {
  const [showBooking, setShowBooking] = useState(false);
  const [show3DView, setShow3DView] = useState(false);

  if (!car) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full relative overflow-hidden">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full z-10"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="grid md:grid-cols-2 gap-6 p-6">
            <div className="aspect-video overflow-hidden rounded-xl relative group">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setShow3DView(true)}
                className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white gap-2"
              >
                <View className="w-6 h-6" />
                Voir en 3D
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold">{car.name}</h3>
                <p className="text-3xl font-bold text-blue-600 mt-2">€{car.price}/jour</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-gray-600">Transmission</p>
                  <p className="font-semibold">{car.specs.transmission}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-gray-600">Sièges</p>
                  <p className="font-semibold">{car.specs.seats}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-gray-600">Bagages</p>
                  <p className="font-semibold">{car.specs.luggage} valises</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-gray-600">Carburant</p>
                  <p className="font-semibold">{car.specs.fuel}</p>
                </div>
              </div>
              
              <button
                onClick={() => setShowBooking(true)}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Réserver maintenant
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {showBooking && (
        <BookingForm onClose={() => setShowBooking(false)} carName={car.name} />
      )}
      
      {show3DView && (
        <CarViewer3D onClose={() => setShow3DView(false)} />
      )}
    </>
  );
}