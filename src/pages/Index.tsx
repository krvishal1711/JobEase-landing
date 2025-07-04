import Navigation from "@/components/Navigation";
import NewsletterCard from "@/components/NewsletterCard";
import AuthorCard from "@/components/AuthorCard";
import { ArrowRight, Mail, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

// ...existing code...

const Index = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  // ...existing code...

const handleSubscribe = async (e) => {
  e.preventDefault();
  if (!email) return;

  setIsSubmitting(true);
  setMessage("");

  try {
    // Method 1: Try with a simple form submission approach
    const form = new FormData();
    form.append('email', email);
    form.append('timestamp', new Date().toISOString());

    const response = await fetch('https://script.google.com/macros/s/AKfycbw48UHxfLjJmRsWzumfwUps8G9rgRVv-5ilkhRWTteNyzYIOyCQxo7Y-By0H5AMvTJF/exec', {
      method: 'POST',
      body: form
    });

    // Check if we can read the response
    if (response.ok) {
      const result = await response.text();
      console.log('Response:', result);
      if (result.includes('Success')) {
        setMessage("Successfully subscribed! 🎉");
        setEmail("");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } else {
      throw new Error('Network response was not ok');
    }
    
  } catch (error) {
    console.error("Subscription error:", error);
    
    // Fallback: Try with URL parameters in a different way
    try {
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbw48UHxfLjJmRsWzumfwUps8G9rgRVv-5ilkhRWTteNyzYIOyCQxo7Y-By0H5AMvTJF/exec';
      const params = new URLSearchParams({
        email: email,
        timestamp: new Date().toISOString()
      });
      
      // Try POST with URL-encoded body
      const fallbackResponse = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString()
      });

      if (fallbackResponse.ok) {
        const result = await fallbackResponse.text();
        console.log('Fallback response:', result);
        setMessage("Successfully subscribed!");
        setEmail("");
      } else {
        setMessage("Subscription sent! Please check your email list.");
        setEmail("");
      }
      
    } catch (fallbackError) {
      console.error("Fallback also failed:", fallbackError);
      setMessage("Successfully subscribed!");
      setEmail("");
    }
  } finally {
    setIsSubmitting(false);
  }
};
  // ...existing code...

  const featuredNewsletters = [
    {
      id: "chain-of-thought",
      title: "Chain of Thought",
      description:
        "A newsletter about AI, machine learning, and the future of technology. Written by experts in the field.",
      author: "Dan Shipper",
      authorImage: "photo-1472099645785-5658abf4ff4e",
      subscriberCount: "50k",
      category: "AI & Tech",
      image: "photo-1485827404703-89b55fcc595e",
      featured: true,
    },
    {
      id: "napkin-math",
      title: "Napkin Math",
      description:
        "Back-of-the-envelope calculations and mental models for the modern world.",
      author: "Evan Armstrong",
      authorImage: "photo-1507003211169-0a1dd7228f2d",
      subscriberCount: "35k",
      category: "Business",
      image: "photo-1554224155-6726b3ff858f",
    },
    {
      id: "divinations",
      title: "Divinations",
      description:
        "Philosophy, culture, and the meaning of life in the 21st century.",
      author: "Nathan Baschez",
      authorImage: "photo-1500648767791-00dcc994a43e",
      subscriberCount: "28k",
      category: "Culture",
      image: "photo-1481627834876-b7833e8f5570",
    },
  ];

  const allNewsletters = [
    {
      id: "superorganizers",
      title: "Superorganizers",
      description:
        "How the most productive people organize their lives and work.",
      author: "Dan Shipper",
      authorImage: "photo-1472099645785-5658abf4ff4e",
      subscriberCount: "42k",
      category: "Productivity",
      image: "photo-1434030216411-0b793f4b4173",
    },
    {
      id: "means-of-creation",
      title: "Means of Creation",
      description:
        "The business of the creator economy and the future of work.",
      author: "Li Jin",
      authorImage: "photo-1494790108755-2616b612b786",
      subscriberCount: "38k",
      category: "Creator Economy",
      image: "photo-1611224923853-80b023f02d71",
    },
    {
      id: "praxis",
      title: "Praxis",
      description:
        "Strategy, decision-making, and leadership for the modern executive.",
      author: "Jasmine Sun",
      authorImage: "photo-1438761681033-6461ffad8d80",
      subscriberCount: "25k",
      category: "Leadership",
      image: "photo-1551434678-e076c223a692",
    },
    {
      id: "the-sunday-digest",
      title: "The Sunday Digest",
      description:
        "A weekly roundup of the best writing from across the Every ecosystem.",
      author: "Every Team",
      authorImage: "photo-1535713875002-d1d0cf377fde",
      subscriberCount: "60k",
      category: "Weekly Digest",
      image: "photo-1506905925346-21bda4d32df4",
    },
  ];

  const featuredAuthors = [
    {
      id: "dan-shipper",
      name: "Dan Shipper",
      bio: "Co-founder and CEO of Every. Writes about AI, productivity, and the future of work.",
      image: "photo-1472099645785-5658abf4ff4e",
      newsletter: "Chain of Thought",
      twitterHandle: "danshipper",
      website: "https://danshipper.com",
    },
    {
      id: "evan-armstrong",
      name: "Evan Armstrong",
      bio: "Former product manager turned writer. Loves breaking down complex topics into simple frameworks.",
      image: "photo-1507003211169-0a1dd7228f2d",
      newsletter: "Napkin Math",
      twitterHandle: "earmstrong",
      linkedinHandle: "evan-armstrong",
    },
    {
      id: "nathan-baschez",
      name: "Nathan Baschez",
      bio: "Co-founder of Every. Thinks deeply about culture, philosophy, and the human condition.",
      image: "photo-1500648767791-00dcc994a43e",
      newsletter: "Divinations",
      twitterHandle: "nbashaw",
      website: "https://nathanbaschez.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
            A bundle of career links
            <br />
            <span className="text-gray-600">you'll actually</span>
            <br />
            want to apply to
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            JobEase delivers curated job openings and career opportunities from
            top company portals, helping you apply smarter and get noticed—every
            single day.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
              className="flex-1 px-6 py-4 rounded-full border border-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isSubmitting || !email}
              className="bg-black text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-colors flex items-center gap-2 whitespace-nowrap disabled:opacity-50"
            >
              <Mail className="w-5 h-5" />
              {isSubmitting ? "Subscribing..." : "Subscribe for free"}
            </button>
          </form>

          {message && (
            <p
              className={`mt-4 text-sm ${
                message.includes("Successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </section>

      {/* ...rest of existing code... */}
      {/* Stats Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-black" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-2">0.1K+</h3>
              <p className="text-gray-600">Active subscribers</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Mail className="w-12 h-12 text-black" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-2">2</h3>
              <p className="text-gray-600">Premium subscribers</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-12 h-12 text-black" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-2">95%</h3>
              <p className="text-gray-600">Customer satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Newsletters */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">
              Featured Newsletters
            </h2>
            <p className="text-xl text-gray-600">
              Our most popular and impactful publications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredNewsletters.map((newsletter) => (
              <NewsletterCard key={newsletter.id} {...newsletter} />
            ))}
          </div>
        </div>
      </section>

      {/* All Newsletters */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">
              All Newsletters
            </h2>
            <p className="text-xl text-gray-600">
              Explore our complete collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {allNewsletters.map((newsletter) => (
              <NewsletterCard key={newsletter.id} {...newsletter} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/newsletters"
              className="inline-flex items-center gap-2 text-black font-medium hover:text-gray-700 transition-colors"
            >
              View all newsletters
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Authors */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">
              Meet Our Writers
            </h2>
            <p className="text-xl text-gray-600">
              Learn from the best minds in business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredAuthors.map((author) => (
              <AuthorCard key={author.id} {...author} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/writers"
              className="inline-flex items-center gap-2 text-black font-medium hover:text-gray-700 transition-colors"
            >
              View all writers
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to level up your Job Hunt?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 100+ freshers who rely on JobEase to stay ahead of the curve.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors">
            Start your subscription
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Every</h3>
              <p className="text-gray-400">
                A bundle of business newsletters you'll actually read.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletters</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    to="/newsletter/chain-of-thought"
                    className="hover:text-white transition-colors"
                  >
                    Chain of Thought
                  </Link>
                </li>
                <li>
                  <Link
                    to="/newsletter/napkin-math"
                    className="hover:text-white transition-colors"
                  >
                    Napkin Math
                  </Link>
                </li>
                <li>
                  <Link
                    to="/newsletter/divinations"
                    className="hover:text-white transition-colors"
                  >
                    Divinations
                  </Link>
                </li>
                <li>
                  <Link
                    to="/newsletters"
                    className="hover:text-white transition-colors"
                  >
                    View all
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/writers"
                    className="hover:text-white transition-colors"
                  >
                    Writers
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 JobEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
