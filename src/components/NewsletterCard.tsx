
import { Link } from "react-router-dom";
import { Users, ArrowRight } from "lucide-react";

interface NewsletterCardProps {
  id: string;
  title: string;
  description: string;
  author: string;
  authorImage: string;
  subscriberCount: string;
  category: string;
  image: string;
  featured?: boolean;
}

const NewsletterCard = ({
  id,
  title,
  description,
  author,
  authorImage,
  subscriberCount,
  category,
  image,
  featured = false
}: NewsletterCardProps) => {
  return (
    <div className={`group cursor-pointer ${featured ? 'md:col-span-2' : ''}`}>
      <Link to={`/newsletter/${id}`}>
        <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
          {/* Image */}
          <div className={`relative ${featured ? 'h-64' : 'h-48'} overflow-hidden`}>
            <img
              src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=800&q=80`}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium">
                {category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className={`font-bold text-black mb-2 group-hover:text-gray-700 transition-colors ${featured ? 'text-2xl' : 'text-lg'}`}>
              {title}
            </h3>
            <p className={`text-gray-600 mb-4 ${featured ? 'text-base' : 'text-sm'}`}>
              {description}
            </p>

            {/* Author and stats */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={`https://images.unsplash.com/${authorImage}?auto=format&fit=crop&w=100&q=80`}
                  alt={author}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm font-medium text-gray-800">{author}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <Users className="w-4 h-4" />
                <span className="text-sm">{subscriberCount}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsletterCard;
