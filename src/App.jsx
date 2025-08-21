import React, { useState } from 'react';
import { Search, MapPin, Star, Clock, Shield, Mail, Heart, Share2 } from 'lucide-react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [likedServices, setLikedServices] = useState(new Set());

  const services = [
    {
      id: 1,
      title: "Professional House Painting",
      category: "Painting",
      price: "$2,500 - $4,200",
      rating: 4.9,
      reviews: 127,
      location: "Seattle, WA",
      duration: "3-5 days",
      image: "🎨",
      description: "Transform your home with premium quality interior and exterior painting services.",
      features: ["Premium Paint", "Color Consultation", "Surface Prep", "Cleanup Included"]
    },
    {
      id: 2,
      title: "Kitchen Renovation",
      category: "Renovation",
      price: "$15,000 - $35,000",
      rating: 4.8,
      reviews: 89,
      location: "Seattle, WA",
      duration: "2-4 weeks",
      image: "🏠",
      description: "Complete kitchen makeover with modern appliances and custom cabinetry.",
      features: ["Custom Design", "Premium Materials", "Licensed Contractors", "Warranty Included"]
    },
    {
      id: 3,
      title: "Plumbing Repair & Installation",
      category: "Plumbing",
      price: "$150 - $800",
      rating: 4.7,
      reviews: 203,
      location: "Seattle, WA",
      duration: "2-6 hours",
      image: "🔧",
      description: "Expert plumbing services for repairs, installations, and emergency fixes.",
      features: ["24/7 Emergency", "Licensed Plumber", "Quality Parts", "Satisfaction Guaranteed"]
    },
    {
      id: 4,
      title: "Electrical Services",
      category: "Electrical",
      price: "$200 - $1,500",
      rating: 4.9,
      reviews: 156,
      location: "Seattle, WA",
      duration: "1-3 days",
      image: "⚡",
      description: "Safe and reliable electrical work by certified electricians.",
      features: ["Code Compliant", "Safety Inspection", "Modern Upgrades", "Emergency Service"]
    },
    {
      id: 5,
      title: "Landscaping & Garden Design",
      category: "Landscaping",
      price: "$1,200 - $8,500",
      rating: 4.6,
      reviews: 94,
      location: "Seattle, WA",
      duration: "1-2 weeks",
      image: "🌿",
      description: "Beautiful landscape design and maintenance for your outdoor space.",
      features: ["Custom Design", "Native Plants", "Irrigation Setup", "Seasonal Maintenance"]
    },
    {
      id: 6,
      title: "Roofing Services",
      category: "Roofing",
      price: "$8,000 - $25,000",
      rating: 4.8,
      reviews: 112,
      location: "Seattle, WA",
      duration: "3-7 days",
      image: "🏘️",
      description: "Professional roofing installation, repair, and maintenance services.",
      features: ["Weather Resistant", "Insurance Claims", "Free Inspection", "Long-term Warranty"]
    },
    {
      id: 7,
      title: "HVAC Installation & Repair",
      category: "HVAC",
      price: "$300 - $6,000",
      rating: 4.7,
      reviews: 178,
      location: "Seattle, WA",
      duration: "4-8 hours",
      image: "❄️",
      description: "Heating, ventilation, and air conditioning services for optimal comfort.",
      features: ["Energy Efficient", "Smart Thermostats", "Regular Maintenance", "Emergency Repairs"]
    },
    {
      id: 8,
      title: "Flooring Installation",
      category: "Flooring",
      price: "$3,500 - $12,000",
      rating: 4.5,
      reviews: 87,
      location: "Seattle, WA",
      duration: "3-5 days",
      image: "🪵",
      description: "Premium flooring installation including hardwood, tile, and luxury vinyl.",
      features: ["Material Selection", "Professional Install", "Floor Preparation", "Finishing Work"]
    },
    {
      id: 9,
      title: "Bathroom Remodeling",
      category: "Renovation",
      price: "$8,000 - $20,000",
      rating: 4.9,
      reviews: 145,
      location: "Seattle, WA",
      duration: "1-3 weeks",
      image: "🛁",
      description: "Complete bathroom transformation with modern fixtures and design.",
      features: ["3D Design", "Luxury Fixtures", "Waterproofing", "ADA Compliant"]
    },
    {
      id: 10,
      title: "Window Cleaning & Repair",
      category: "Cleaning",
      price: "$150 - $600",
      rating: 4.4,
      reviews: 234,
      location: "Seattle, WA",
      duration: "2-4 hours",
      image: "🪟",
      description: "Professional window cleaning and repair services for crystal clear views.",
      features: ["Eco-Friendly", "Screen Cleaning", "Sill Wiping", "Regular Schedule"]
    },
    {
      id: 11,
      title: "Carpentry & Custom Woodwork",
      category: "Carpentry",
      price: "$500 - $3,000",
      rating: 4.8,
      reviews: 76,
      location: "Seattle, WA",
      duration: "1-2 weeks",
      image: "🪚",
      description: "Custom carpentry work including built-ins, cabinets, and repairs.",
      features: ["Custom Design", "Quality Wood", "Precision Work", "Installation Included"]
    },
    {
      id: 12,
      title: "Pest Control Services",
      category: "Pest Control",
      price: "$200 - $800",
      rating: 4.6,
      reviews: 198,
      location: "Seattle, WA",
      duration: "1-2 hours",
      image: "🐛",
      description: "Comprehensive pest control and prevention services for your home.",
      features: ["Safe Methods", "Pet Friendly", "Follow-up Service", "Prevention Tips"]
    },
    {
      id: 13,
      title: "Gutter Cleaning & Repair",
      category: "Maintenance",
      price: "$180 - $500",
      rating: 4.5,
      reviews: 167,
      location: "Seattle, WA",
      duration: "2-4 hours",
      image: "🏠",
      description: "Professional gutter cleaning, repair, and protection services.",
      features: ["Safety First", "Debris Removal", "Leak Repair", "Guard Installation"]
    },
    {
      id: 14,
      title: "Pool Cleaning & Maintenance",
      category: "Pool Service",
      price: "$120 - $400",
      rating: 4.7,
      reviews: 143,
      location: "Seattle, WA",
      duration: "1-2 hours",
      image: "🏊",
      description: "Complete pool cleaning and maintenance services for crystal clear water.",
      features: ["Chemical Balance", "Equipment Check", "Weekly Service", "Seasonal Opening"]
    },
    {
      id: 15,
      title: "Moving & Relocation Services",
      category: "Moving",
      price: "$400 - $2,500",
      rating: 4.3,
      reviews: 189,
      location: "Seattle, WA",
      duration: "4-8 hours",
      image: "📦",
      description: "Professional moving services with careful handling of your belongings.",
      features: ["Packing Service", "Insurance Coverage", "Local & Long Distance", "Storage Options"]
    }
  ];

  const categories = ['All', ...new Set(services.map(service => service.category))];
  
  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleLike = (serviceId) => {
    const newLiked = new Set(likedServices);
    if (newLiked.has(serviceId)) {
      newLiked.delete(serviceId);
    } else {
      newLiked.add(serviceId);
    }
    setLikedServices(newLiked);
  };

  const handleContactClick = (serviceName) => {
    window.location.href = `mailto:hello@gearfify.com?subject=Inquiry about ${serviceName}&body=Hi, I'm interested in learning more about your ${serviceName}. Please contact me with more details.`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50">
      <header className="bg-gradient-to-r from-slate-900 via-gray-900 to-zinc-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex-shrink-0">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Gearfify
              </h1>
            </div>
            
            <div className="flex-1 lg:text-right">
              <p className="text-xl text-gray-300 mb-8 max-w-2xl lg:ml-auto">
                Connect with professional service providers for all your home and business needs
              </p>
              
              <div className="max-w-2xl lg:ml-auto relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-white/90 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-slate-700 to-gray-800 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Professional Services Near You
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover top-rated professionals for all your home and business needs. 
            Quality guaranteed, satisfaction assured.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <div key={service.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden">
              <div className="relative p-6 pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-4xl">{service.image}</div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleLike(service.id)}
                      className={`p-2 rounded-full transition-all transform hover:scale-110 ${
                        likedServices.has(service.id)
                          ? 'bg-red-100 text-red-500'
                          : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${likedServices.has(service.id) ? 'fill-current' : ''}`} />
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 transition-all transform hover:scale-110">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-slate-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-1 text-slate-600" />
                    {service.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1 text-slate-600" />
                    {service.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="w-4 h-4 mr-1 text-amber-500" />
                    {service.rating} ({service.reviews} reviews)
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Shield className="w-4 h-4 mr-1 text-emerald-600" />
                    Verified Pro
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {service.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-slate-50 text-slate-700 text-xs rounded-md font-medium border border-slate-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-slate-800">{service.price}</span>
                    <span className="text-sm text-gray-500 ml-2">per project</span>
                  </div>
                  <button
                    onClick={() => handleContactClick(service.title)}
                    className="bg-gradient-to-r from-slate-700 to-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:from-slate-800 hover:to-gray-900 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </main>
      
      <footer className="bg-slate-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Gearfify
            </h3>
            <p className="text-gray-400 mb-6">
              Your trusted platform for professional services
            </p>
            <div className="flex justify-center gap-6 text-sm text-gray-400">
              <span>© 2024 Gearfify</span>
              <span>•</span>
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
              <span>•</span>
              <span>Contact: hello@gearfify.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;