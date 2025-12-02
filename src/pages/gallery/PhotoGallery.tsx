import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const PhotoGallery = () => {
  const photos = [
    {
      id: 1,
      title: "Education Workshop 2024",
      category: "Education",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Skill Training Session",
      category: "Skills",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Women Empowerment Program",
      category: "Empowerment",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Community Development",
      category: "Community",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Student Achievements",
      category: "Education",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Vocational Training",
      category: "Skills",
      image: "/placeholder.svg"
    },
    {
      id: 7,
      title: "Health Camp",
      category: "Health",
      image: "/placeholder.svg"
    },
    {
      id: 8,
      title: "Rural Outreach",
      category: "Community",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-hero-start to-hero-end text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Explore moments from our programs, events, and the lives we've touched together.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {photos.map((photo) => (
                <Card key={photo.id} className="overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                  <div className="relative aspect-square">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-semibold text-lg mb-1">{photo.title}</h3>
                        <p className="text-white/80 text-sm">{photo.category}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PhotoGallery;
