import React, { useEffect } from "react";
import { Target, Users, Trophy, Zap } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team = [
    {
      name: "Dev Parikh",
      role: "Co-Founder & CEO",
      bio: "Passionate about democratizing sports access across India. Former software engineer with a vision to connect sports enthusiasts nationwide.",
      image: "/lovable-uploads/752a1366-6aea-49ad-be21-341fe7476d14.png"
    },
    {
      name: "FarhaanAli Vohra", 
      role: "Co-Founder & CTO",
      bio: "Tech enthusiast with expertise in scalable platforms. Believes technology can revolutionize how people discover and play sports.",
      image: "/lovable-uploads/8dced82a-6a2c-48ee-a060-463c28764183.png"
    },
    {
      name: "Vraj Parmar",
      role: "Co-Founder & CPO",
      bio: "Product strategist focused on user experience. Former athlete turned entrepreneur, dedicated to building intuitive sports platforms.",
      image: "/lovable-uploads/ada582c7-709e-480e-8494-1461b602567c.png"
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Mission",
      description: "To make sports accessible to everyone by connecting players with quality facilities and creating vibrant sporting communities across India."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community First",
      description: "Building lasting relationships between players, facility owners, and sports enthusiasts through our platform."
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Excellence",
      description: "Committed to providing the highest quality sports facilities and seamless booking experiences."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation",
      description: "Leveraging cutting-edge technology to revolutionize how people discover, book, and enjoy sports."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-green-500">KhelMitra</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            We're on a mission to transform how India plays sports - one booking, one match, one community at a time.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  KhelMitra was born from a simple frustration: finding a good sports facility shouldn't be this hard. Our founders, avid sports enthusiasts themselves, struggled to book quality courts and connect with fellow players.
                </p>
                <p>
                  What started as a weekend project to solve our own booking problems has evolved into India's premier sports facility platform. We've helped thousands of players discover amazing venues and countless facility owners grow their businesses.
                </p>
                <p>
                  Today, KhelMitra is more than just a booking platform - we're building a community where sports lovers can connect, compete, and celebrate their passion for the game.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/ef5a1f6f-4ce1-4183-9610-66d923750591.png" 
                alt="KhelMitra Story" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Values & Mission
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="glassmorphism p-6 rounded-lg text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-green-500 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Meet Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="glassmorphism p-6 rounded-lg text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-green-500"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-green-400 mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-green-500 mb-2">10K+</div>
              <div className="text-gray-300">Active Players</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="text-4xl font-bold text-green-500 mb-2">500+</div>
              <div className="text-gray-300">Sports Facilities</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="text-4xl font-bold text-green-500 mb-2">25+</div>
              <div className="text-gray-300">Cities</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="text-4xl font-bold text-green-500 mb-2">50K+</div>
              <div className="text-gray-300">Bookings Made</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;