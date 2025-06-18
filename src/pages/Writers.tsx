
import Navigation from "@/components/Navigation";
import AuthorCard from "@/components/AuthorCard";

const Writers = () => {
  const writers = [
    {
      id: "dan-shipper",
      name: "Dan Shipper",
      bio: "Co-founder and CEO of Every. Writes about AI, productivity, and the future of work.",
      image: "photo-1472099645785-5658abf4ff4e",
      newsletter: "Chain of Thought",
      twitterHandle: "danshipper",
      website: "https://danshipper.com"
    },
    {
      id: "evan-armstrong",
      name: "Evan Armstrong",
      bio: "Former product manager turned writer. Loves breaking down complex topics into simple frameworks.",
      image: "photo-1507003211169-0a1dd7228f2d",
      newsletter: "Napkin Math",
      twitterHandle: "earmstrong",
      linkedinHandle: "evan-armstrong"
    },
    {
      id: "nathan-baschez",
      name: "Nathan Baschez",
      bio: "Co-founder of Every. Thinks deeply about culture, philosophy, and the human condition.",
      image: "photo-1500648767791-00dcc994a43e",
      newsletter: "Divinations",
      twitterHandle: "nbashaw",
      website: "https://nathanbaschez.com"
    },
    {
      id: "li-jin",
      name: "Li Jin",
      bio: "Former VC at Andreessen Horowitz. Expert on the creator economy and future of work.",
      image: "photo-1494790108755-2616b612b786",
      newsletter: "Means of Creation",
      twitterHandle: "ljin18",
      linkedinHandle: "li-jin"
    },
    {
      id: "jasmine-sun",
      name: "Jasmine Sun",
      bio: "Former strategy consultant. Writes about leadership, decision-making, and organizational behavior.",
      image: "photo-1438761681033-6461ffad8d80",
      newsletter: "Praxis",
      twitterHandle: "jasminesun",
      website: "https://jasminesun.com"
    },
    {
      id: "casey-newton",
      name: "Casey Newton",
      bio: "Veteran tech journalist. Covers social media, content moderation, and platform governance.",
      image: "photo-1560250097-0b93528c311a",
      newsletter: "Platformer",
      twitterHandle: "caseynewton",
      website: "https://platformer.news"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-black mb-4">Our Writers</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the world-class operators, entrepreneurs, and thinkers who share their insights 
            and expertise through Every's newsletters.
          </p>
        </div>
      </section>

      {/* Writers Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {writers.map((writer) => (
              <AuthorCard key={writer.id} {...writer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to write for Every?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            We're always looking for exceptional writers who can share unique insights 
            with our community of business professionals.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Get in touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Writers;
