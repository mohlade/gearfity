import React, { useState } from 'react';
import { Search, MapPin, Star, Clock, Shield, Mail, Heart, Share2, ChevronDown, ChevronUp, Filter } from 'lucide-react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Painting');
  const [expandedCategories, setExpandedCategories] = useState(new Set(['Painting']));
  const [likedServices, setLikedServices] = useState(new Set());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const services = [
    {
      id: 1,
      title: "Professional House Painting",
      category: "Painting",
      price: "$2,500 - $4,200",
      rating: 4.9,
      reviews: 127,
      location: "Across US",
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
      location: "Across US",
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
      location: "Across US",
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
      location: "Across US",
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
      location: "Across US",
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
      location: "Across US",
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
      location: "Across US",
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
      location: "Across US",
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
      location: "Across US",
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
      location: "Across US",
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
      location: "Across US",
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
      location: "Across US",
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
      location: "Across US",
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
      location: "Across US",
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
      location: "Across US",
      duration: "4-8 hours",
      image: "📦",
      description: "Professional moving services with careful handling of your belongings.",
      features: ["Packing Service", "Insurance Coverage", "Local & Long Distance", "Storage Options"]
    }
  ];

  const categories = [...new Set(services.map(service => service.category))];
  
  // Group services by category
  const servicesByCategory = {};
  categories.forEach(category => {
    servicesByCategory[category] = services.filter(service => 
      service.category === category && (
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
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

  const toggleCategoryExpansion = (category) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const handleContactClick = (serviceName) => {
    window.location.href = `mailto:hello@gearfify.me?subject=Inquiry about ${serviceName}&body=Hi, I'm interested in learning more about your ${serviceName}. Please contact me with more details.`;
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
    // Expand the selected category
    const newExpanded = new Set([category]);
    setExpandedCategories(newExpanded);
  };

  const totalServices = Object.values(servicesByCategory).flat().length;

  const ServiceCard = ({ service }) => (
    <div className="group bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 overflow-hidden">
      <div className="relative p-5">
        <div className="flex justify-between items-start mb-4">
          <div className="text-3xl">{service.image}</div>
          <div className="flex gap-2">
            <button
              onClick={() => toggleLike(service.id)}
              className={`p-2 rounded-full transition-all transform hover:scale-110 ${
                likedServices.has(service.id)
                  ? 'bg-red-100 text-red-500'
                  : 'bg-gray-200 text-gray-400 hover:bg-gray-300'
              }`}
            >
              <Heart className={`w-4 h-4 ${likedServices.has(service.id) ? 'fill-current' : ''}`} />
            </button>
            <button className="p-2 rounded-full bg-gray-200 text-gray-400 hover:bg-gray-300 transition-all transform hover:scale-110">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-slate-700 transition-colors">
          {service.title}
        </h4>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
          {service.description}
        </p>
        
        <div className="grid grid-cols-1 gap-2 mb-4 text-sm">
          <div className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-2 text-slate-600" />
            {service.location}
          </div>
          <div className="flex items-center text-gray-500">
            <Clock className="w-4 h-4 mr-2 text-slate-600" />
            {service.duration}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-500">
              <Star className="w-4 h-4 mr-1 text-amber-500" />
              {service.rating} ({service.reviews})
            </div>
            <div className="flex items-center text-emerald-600">
              <Shield className="w-4 h-4 mr-1" />
              <span className="text-xs font-medium">Verified</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {service.features.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md font-medium"
            >
              {feature}
            </span>
          ))}
          {service.features.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">
              +{service.features.length - 2} more
            </span>
          )}
        </div>
      </div>
      
      <div className="px-5 py-4 bg-white border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <span className="text-lg font-bold text-slate-800 block">{service.price}</span>
            <span className="text-xs text-gray-500">per project</span>
          </div>
          <button
            onClick={() => handleContactClick(service.title)}
            className="w-full sm:w-auto bg-gradient-to-r from-slate-700 to-gray-800 text-white px-4 py-2 rounded-lg font-semibold hover:from-slate-800 hover:to-gray-900 transition-all transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm"
          >
            <Mail className="w-4 h-4" />
            Contact
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50">
      <header className="bg-gradient-to-r from-slate-900 via-gray-900 to-zinc-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: 'radial-gradient(circle at 25px 25px, #fbbf24 2px, transparent 0)',
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent mb-4">
                Gearfify
              </h1>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm font-medium border border-amber-500/30">
                  Weekend Jobs
                </span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/30">
                  Flexible Schedule
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                  Part-Time Work
                </span>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
              Your Gateway to <span className="text-amber-400">Profitable Service Work</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8 text-left">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💼</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">For Service Professionals</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Turn your skills into steady income. Whether you're a painter, plumber, electrician, or handyman - 
                      find clients who need your expertise. Set your own rates and schedule.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Weekend/Part-Time Work</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Perfect for side hustles or building your own business. Work weekends, evenings, or whenever fits your life. 
                      From quick repairs to major renovations - choose projects that match your availability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20 mb-8">
              <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                <div className="text-4xl">🚀</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Start Earning Today</h3>
                  <p className="text-gray-300 text-sm">
                    Join thousands of service professionals making <span className="text-amber-400 font-semibold">$50-150/hour</span> across the US. 
                    From simple handyman tasks to specialized trades - there's work waiting for your skills.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-300 mb-6">
                Browse available service opportunities by category and connect directly with homeowners and businesses who need your expertise.
              </p>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Category Dropdown Filter */}
      <div className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <Filter className="w-5 h-5" />
              <span className="hidden sm:inline">Filter by Category:</span>
              <span className="sm:hidden">Category:</span>
            </div>
            
            <div className="relative w-full sm:w-64">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
              >
                <span className="font-medium text-gray-700">
                  {selectedCategory} ({servicesByCategory[selectedCategory]?.length || 0})
                </span>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-64 overflow-y-auto">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                        selectedCategory === category ? 'bg-amber-50 text-amber-700 font-semibold' : 'text-gray-700'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category}</span>
                        <span className="text-sm text-gray-500">
                          ({servicesByCategory[category]?.length || 0})
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="text-sm text-gray-500">
              Showing {totalServices} services
            </div>
          </div>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Available Service Opportunities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Browse {selectedCategory.toLowerCase()} opportunities and start earning with flexible, well-paying service jobs.
          </p>
        </div>
        
        {/* Category-based Service Listings */}
        <div className="space-y-6">
          {/* Show selected category first */}
          {(() => {
            const selectedCategoryServices = servicesByCategory[selectedCategory] || [];
            if (selectedCategoryServices.length === 0) return null;
            
            return (
              <div key={selectedCategory} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                {/* Category Header */}
                <div 
                  className="px-6 py-4 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-gray-200 cursor-pointer hover:from-amber-100 hover:to-orange-100 transition-all"
                  onClick={() => toggleCategoryExpansion(selectedCategory)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-800">{selectedCategory}</h3>
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-full">
                        {selectedCategoryServices.length} {selectedCategoryServices.length === 1 ? 'service' : 'services'}
                      </span>
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                        Selected
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500 hidden sm:inline">
                        {expandedCategories.has(selectedCategory) ? 'Collapse' : 'Expand'}
                      </span>
                      {expandedCategories.has(selectedCategory) ? 
                        <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      }
                    </div>
                  </div>
                </div>
                
                {/* Services Grid - Collapsible */}
                <div className={`transition-all duration-300 ease-in-out ${
                  expandedCategories.has(selectedCategory) 
                    ? 'max-h-none opacity-100' 
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  {expandedCategories.has(selectedCategory) && (
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {selectedCategoryServices.map(service => (
                          <ServiceCard key={service.id} service={service} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })()}
          
          {/* Show other categories below */}
          {categories.filter(category => category !== selectedCategory).map(category => {
            const categoryServices = servicesByCategory[category] || [];
            if (categoryServices.length === 0) return null;
            
            return (
              <div key={category} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                {/* Category Header */}
                <div 
                  className="px-6 py-4 bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200 cursor-pointer hover:from-slate-100 hover:to-gray-100 transition-all"
                  onClick={() => toggleCategoryExpansion(category)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-800">{category}</h3>
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-full">
                        {categoryServices.length} {categoryServices.length === 1 ? 'service' : 'services'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500 hidden sm:inline">
                        {expandedCategories.has(category) ? 'Collapse' : 'Expand'}
                      </span>
                      {expandedCategories.has(category) ? 
                        <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      }
                    </div>
                  </div>
                </div>
                
                {/* Services Grid - Collapsible */}
                <div className={`transition-all duration-300 ease-in-out ${
                  expandedCategories.has(category) 
                    ? 'max-h-none opacity-100' 
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  {expandedCategories.has(category) && (
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categoryServices.map(service => (
                          <ServiceCard key={service.id} service={service} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        {totalServices === 0 && searchTerm && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No jobs found</h3>
            <p className="text-gray-500">Try adjusting your search terms or browse categories above</p>
          </div>
        )}
      </main>
      
      <footer className="bg-slate-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Gearfify
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Your trusted platform for connecting skilled service professionals with clients who need quality work done.
              </p>
              <div className="flex gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  Part-Time Friendly
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                  Flexible Work
                </span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-amber-400">For Service Professionals</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Find part-time work opportunities</li>
                <li>• Set your own rates and schedule</li>
                <li>• Connect directly with clients</li>
                <li>• Build your service business</li>
                <li>• Earn $50-150/hour in your field</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-amber-400">Popular Categories</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Painting & Interior Work</li>
                <li>• Plumbing & Electrical</li>
                <li>• Home Renovation Projects</li>
                <li>• Landscaping & Outdoor</li>
                <li>• Handyman Services</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-sm text-gray-400 mb-4">
              <span>© 2024 Gearfify</span>
              <span className="hidden sm:inline">•</span>
              <span>Privacy Policy</span>
              <span className="hidden sm:inline">•</span>
              <span>Terms of Service</span>
              <span className="hidden sm:inline">•</span>
              <span>Contact: info@gearfify.me</span>
            </div>
            <p className="text-xs text-gray-500">
              Start your service business today - Join the growing community of professionals earning more with Gearfify
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;