
import { Link } from "react-router-dom";
import { Twitter, Linkedin, ExternalLink } from "lucide-react";

interface AuthorCardProps {
  id: string;
  name: string;
  bio: string;
  image: string;
  newsletter: string;
  twitterHandle?: string;
  linkedinHandle?: string;
  website?: string;
}

const AuthorCard = ({
  id,
  name,
  bio,
  image,
  newsletter,
  twitterHandle,
  linkedinHandle,
  website
}: AuthorCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <Link to={`/writer/${id}`}>
        <div className="text-center">
          <img
            src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=200&q=80`}
            alt={name}
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-bold text-black mb-2">{name}</h3>
          <p className="text-gray-600 mb-3 text-sm">{bio}</p>
          <p className="text-black font-medium text-sm mb-4">{newsletter}</p>
          
          {/* Social links */}
          <div className="flex justify-center space-x-3">
            {twitterHandle && (
              <a
                href={`https://twitter.com/${twitterHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {linkedinHandle && (
              <a
                href={`https://linkedin.com/in/${linkedinHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AuthorCard;
