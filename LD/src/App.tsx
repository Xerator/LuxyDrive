import React, { useState } from 'react';
import { Car as CarIcon, Phone, Mail, MapPin, Search, Calendar, Star } from 'lucide-react';
import CarCard from './components/CarCard';
import CarModal from './components/CarModal';
import Filters, { FilterState } from './components/Filters';
import { cars } from './data/cars';
import { Car } from './types/car';

function App() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    brand: '',
    category: '',
    year: '',
    minPrice: '',
    maxPrice: ''
  });

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = !filters.brand || car.brand === filters.brand;
    const matchesCategory = !filters.category || car.category === filters.category;
    const matchesYear = !filters.year || car.year.toString() === filters.year;
    const matchesMinPrice = !filters.minPrice || car.price >= parseInt(filters.minPrice);
    const matchesMaxPrice = !filters.maxPrice || car.price <= parseInt(filters.maxPrice);

    return matchesSearch && matchesBrand && matchesCategory && matchesYear && 
           matchesMinPrice && matchesMaxPrice;
  });

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section avec la vidéo */}
      <div className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="https://player.vimeo.com/external/492617907.hd.mp4?s=c902e8f3f2736a8a26a7509ad8f861e0091ad5b9&profile_id=175" type="video/mp4" />
        </video>

        <div className="relative z-10">
          <header className="absolute top-0 left-0 right-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <CarIcon className="w-8 h-8 text-blue-500" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
                    LuxDrive
                  </span>
                </div>
                <nav className="hidden md:flex gap-8">
                  <a href="#fleet" className="text-white/90 hover:text-blue-500 transition">Notre Flotte</a>
                  <a href="#services" className="text-white/90 hover:text-blue-500 transition">Services</a>
                  <a href="#contact" className="text-white/90 hover:text-blue-500 transition">Contact</a>
                </nav>
                <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all hover:scale-105">
                  Réserver
                </button>
              </div>
            </div>
          </header>

          <div className="h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl space-y-8">
                <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
                  Vivez l'excellence<br />
                  <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
                    automobile
                  </span>
                </h1>
                <p className="text-xl text-white/80">
                  Une sélection exclusive des véhicules les plus prestigieux pour une expérience de conduite incomparable.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all hover:scale-105 flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Réserver maintenant
                  </button>
                  <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                    <Star className="w-5 h-5" />
                    Nos meilleures offres
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters Section */}
      <div className="bg-gradient-to-b from-black to-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl">
            <div className="flex items-center gap-4">
              <Search className="w-6 h-6 text-blue-500" />
              <input
                type="text"
                placeholder="Rechercher une marque ou un modèle..."
                className="w-full bg-transparent border-none text-white placeholder-white/50 focus:ring-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <Filters onFilterChange={setFilters} />
        </div>
      </div>

      {/* Fleet Section */}
      <div id="fleet" className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Notre Flotte d'Exception</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Découvrez notre sélection de véhicules de prestige, soigneusement choisis pour répondre à vos plus hautes exigences.
            </p>
          </div>
          
          {filteredCars.length === 0 ? (
            <div className="text-center text-white/60 py-12">
              Aucun véhicule ne correspond à vos critères de recherche.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map(car => (
                <CarCard
                  key={car.id}
                  car={car}
                  onDoubleClick={() => setSelectedCar(car)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Contactez-nous</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center">
              <Phone className="w-8 h-8 text-blue-500 mx-auto mb-4" />
              <p className="text-lg font-semibold text-white mb-2">Téléphone</p>
              <p className="text-white/60">+33 1 23 45 67 89</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center">
              <Mail className="w-8 h-8 text-blue-500 mx-auto mb-4" />
              <p className="text-lg font-semibold text-white mb-2">Email</p>
              <p className="text-white/60">contact@luxdrive.fr</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center">
              <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-4" />
              <p className="text-lg font-semibold text-white mb-2">Adresse</p>
              <p className="text-white/60">123 Avenue des Champs-Élysées, Paris</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <CarIcon className="w-6 h-6 text-blue-500" />
                <span className="text-xl font-bold text-white">LuxDrive</span>
              </div>
              <p className="text-white/60">
                L'excellence automobile depuis 2010
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
              <ul className="space-y-4 text-white/60">
                <li>Location courte durée</li>
                <li>Location longue durée</li>
                <li>Chauffeur privé</li>
                <li>Transfert aéroport</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Informations</h3>
              <ul className="space-y-4 text-white/60">
                <li>À propos</li>
                <li>Conditions générales</li>
                <li>Confidentialité</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Newsletter</h3>
              <p className="text-white/60 mb-4">
                Restez informé de nos dernières offres
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 bg-white/10 rounded-full px-4 py-2 text-white border-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700 transition">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {selectedCar && (
        <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
      )}
    </div>
  );
}

export default App;