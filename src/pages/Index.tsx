import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "react-router-dom";
import { MapPin, Users, Trophy, Clock, MoveRight, Star } from "lucide-react";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredCourts = [
    {
      title: "Premium Badminton Courts",
      description: "Professional-grade courts with wooden flooring, proper lighting and ventilation systems.",
      icon: <Trophy size={24} />,
      imageSrc: "/lovable-uploads/708f9e32-840d-46a4-aaa4-75ad2689e16f.png",
      link: "/signup"
    },
    {
      title: "Cricket Practice Nets",
      description: "Spacious practice nets with quality pitches, perfect for individual and team practice sessions.",
      icon: <Users size={24} />,
      imageSrc: "/lovable-uploads/becfc2e3-b59f-4f86-afca-b9f6fc7b7c14.png",
      link: "/signup"
    },
    {
      title: "Table Tennis Arena",
      description: "Multiple tables in a dedicated area with proper flooring and tournament-standard equipment.",
      icon: <Clock size={24} />,
      imageSrc: "/lovable-uploads/03e83f18-76a1-4349-a197-dbde03a93343.png",
      link: "/signup"
    }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Featured Courts Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Popular Sports Venues</h2>
              <p className="text-gray-400 max-w-2xl">
                Discover top-rated sports facilities with professional equipment and excellent amenities
              </p>
            </div>
            <Link 
              to="/signup"
              className="mt-4 sm:mt-0 flex items-center text-psyco-green-DEFAULT hover:text-psyco-green-light transition-colors"
            >
              View all courts
              <MoveRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourts.map((court, index) => (
              <ServiceCard
                key={index}
                {...court}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Sports Categories Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Play Your Favorite Sports</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Find the perfect venue for any sport with professional facilities and equipment
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: "Badminton", icon: <Trophy size={32} /> },
              { name: "Cricket", icon: <Users size={32} /> },
              { name: "Table Tennis", icon: <Clock size={32} /> },
              { name: "Pickleball", icon: <Star size={32} /> }
            ].map((sport, index) => (
              <div 
                key={index}
                className="glassmorphism flex flex-col items-center justify-center py-8 px-4 text-center card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-psyco-green-DEFAULT mb-4">
                  {sport.icon}
                </div>
                <h3 className="text-lg font-medium text-white">{sport.name}</h3>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/signup"
              className="inline-flex items-center bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 btn-glow"
            >
              Start Playing Today
              <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join KhelMitra?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Connect with fellow sports enthusiasts, book courts instantly, and never miss a game. Join thousands of players already using KhelMitra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                Sign Up Now
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="bg-transparent border border-psyco-green-DEFAULT text-psyco-green-DEFAULT hover:bg-psyco-green-DEFAULT/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
