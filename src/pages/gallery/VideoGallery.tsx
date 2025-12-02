import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play } from "lucide-react";

const VideoGallery = () => {
  const videos = [
    {
      id: 1,
      title: "Annual Impact Report 2024",
      description: "Highlights from our year of transforming lives through education and empowerment.",
      thumbnail: "/placeholder.svg",
      duration: "5:30"
    },
    {
      id: 2,
      title: "Women Empowerment Success Stories",
      description: "Meet the women who have transformed their lives through our programs.",
      thumbnail: "/placeholder.svg",
      duration: "8:15"
    },
    {
      id: 3,
      title: "Skill Development Workshop",
      description: "Behind the scenes of our vocational training programs.",
      thumbnail: "/placeholder.svg",
      duration: "6:45"
    },
    {
      id: 4,
      title: "Community Health Initiative",
      description: "Our health camps bringing medical care to rural communities.",
      thumbnail: "/placeholder.svg",
      duration: "4:20"
    },
    {
      id: 5,
      title: "Student Testimonials",
      description: "Students share how education changed their lives.",
      thumbnail: "/placeholder.svg",
      duration: "7:10"
    },
    {
      id: 6,
      title: "Digital Literacy Program",
      description: "Teaching technology skills for the modern workforce.",
      thumbnail: "/placeholder.svg",
      duration: "5:55"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-hero-start to-hero-end text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Video Gallery</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Watch stories of impact, program highlights, and the incredible journeys of our beneficiaries.
            </p>
          </div>
        </section>

        {/* Video Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <Card key={video.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video bg-muted">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-primary ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{video.title}</CardTitle>
                    <CardDescription>{video.description}</CardDescription>
                  </CardHeader>
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

export default VideoGallery;
