
import Navigation from "@/components/Navigation";
import NewsletterCard from "@/components/NewsletterCard";
import { Search, Filter } from "lucide-react";
import { useState } from "react";

const Newsletters = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const newsletters = [
    {
      id: "chain-of-thought",
      title: "Chain of Thought",
      description: "A newsletter about AI, machine learning, and the future of technology. Written by experts in the field.",
      author: "Dan Shipper",
      authorImage: "photo-1472099645785-5658abf4ff4e",
      subscriberCount: "50k",
      category: "AI & Tech",
      image: "photo-1485827404703-89b55fcc595e"
    },
    {
      id: "napkin-math",
      title: "Napkin Math",
      description: "Back-of-the-envelope calculations and mental models for the modern world.",
      author: "Evan Armstrong",
      authorImage: "photo-1507003211169-0a1dd7228f2d",
      subscriberCount: "35k",
      category: "Business",
      image: "photo-1554224155-6726b3ff858f"
    },
    {
      id: "divinations",
      title: "Divinations",
      description: "Philosophy, culture, and the meaning of life in the 21st century.",
      author: "Nathan Baschez",
      authorImage: "photo-1500648767791-00dcc994a43e",
      subscriberCount: "28k",
      category: "Culture",
      image: "photo-1481627834876-b7833e8f5570"
    },
    {
      id: "superorganizers",
      title: "Superorganizers",
      description: "How the most productive people organize their lives and work.",
      author: "Dan Shipper",
      authorImage: "photo-1472099645785-5658abf4ff4e",
      subscriberCount: "42k",
      category: "Productivity",
      image: "photo-1434030216411-0b793f4b4173"
    },
    {
      id: "means-of-creation",
      title: "Means of Creation",
      description: "The business of the creator economy and the future of work.",
      author: "Li Jin",
      authorImage: "photo-1494790108755-2616b612b786",
      subscriberCount: "38k",
      category: "Creator Economy",
      image: "photo-1611224923853-80b023f02d71"
    },
    {
      id: "praxis",
      title: "Praxis",
      description: "Strategy, decision-making, and leadership for the modern executive.",
      author: "Jasmine Sun",
      authorImage: "photo-1438761681033-6461ffad8d80",
      subscriberCount: "25k",
      category: "Leadership",
      image: "photo-1551434678-e076c223a692"
    }
  ];

  const categories = ["All", "AI & Tech", "Business", "Culture", "Productivity", "Creator Economy", "Leadership"];

  const filteredNewsletters = newsletters.filter(newsletter => {
    const matchesSearch = newsletter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         newsletter.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         newsletter.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || newsletter.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-black mb-4">All Newsletters</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our complete collection of business newsletters written by world-class operators and thinkers.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search newsletters..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent w-80"
              />
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent appearance-none bg-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredNewsletters.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNewsletters.map((newsletter) => (
                <NewsletterCard key={newsletter.id} {...newsletter} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No newsletters found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Newsletters;
