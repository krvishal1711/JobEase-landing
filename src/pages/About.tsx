
import Navigation from "@/components/Navigation";
import { Users, Target, Award, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-black mb-6">About Every</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Every is a bundle of business newsletters written by world-class operators and thinkers. 
            We believe that the best business writing comes from people who have actually built and scaled companies, 
            not just observed from the sidelines.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                We're on a mission to democratize access to world-class business thinking. 
                Too much of the best business content is locked away in private conversations, 
                company Slack channels, and exclusive networks.
              </p>
              <p className="text-lg text-gray-600">
                Every changes that by bringing together the smartest operators we know and 
                giving them a platform to share their insights with a broader audience.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Quality First</h3>
              <p className="text-gray-600">
                We prioritize quality over quantity. Every piece of content is carefully curated and edited.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Community</h3>
              <p className="text-gray-600">
                We're building a community of curious, ambitious people who want to learn and grow together.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Expertise</h3>
              <p className="text-gray-600">
                Our writers are practitioners who have built real businesses and learned hard-won lessons.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Growth</h3>
              <p className="text-gray-600">
                We're committed to helping our readers and writers grow professionally and personally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-6">Our Story</h2>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-600">
            <p>
              Every started in 2020 when Dan Shipper and Nathan Baschez realized there was a gap 
              in the market for high-quality business writing that went beyond surface-level insights.
            </p>
            
            <p>
              As founders themselves, they knew that the best business content comes from people who 
              have actually been in the trenches—building products, managing teams, raising capital, 
              and scaling companies.
            </p>
            
            <p>
              What started as a simple newsletter bundle has grown into a thriving community of over 
              100,000 business professionals who rely on Every for their weekly dose of actionable insights.
            </p>
            
            <p>
              Today, Every features newsletters from some of the smartest operators in tech, covering 
              everything from AI and productivity to culture and the creator economy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join the Every community
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get access to all our newsletters and become part of a community 
            that's serious about learning and growing.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors">
            Subscribe now
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
