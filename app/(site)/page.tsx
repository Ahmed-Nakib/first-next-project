import CategoryCarousel from "@/components/CategoryCarousel";
import HeroCarouselSection from "@/components/HeroCarouselSection";
import LatestBlogs from "@/components/LatestBlogs";
import LatestProduct from "@/components/LatestProduct";


const caseStudies = [
  {
    id: 1,
    title: "Smart Health Monitoring",
    brand: "MedTex",
    description:
      "Wearable textile sensors designed for continuous heart and respiration monitoring.",
    tags: ["Healthcare", "Smart Fabric", "Wearables"],
    imageUrl: "/images/health.jpg",
    link: "/case/1",
  },
  {
    id: 2,
    title: "Sports Performance Tracking",
    brand: "FitPro",
    description:
      "Real-time athletic tracking using embedded textile pressure sensors.",
    tags: ["Sports", "IoT", "Tracking"],
    imageUrl: "/images/sports.jpg",
    link: "/case/2",
  },
];


function HomePage() {
    return ( 
        <main className="max-w-7xl mx-auto p-6">
            <HeroCarouselSection items={caseStudies} />
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <LatestProduct />
            <LatestProduct />
            <LatestProduct />
            <LatestProduct />
           </div>
           <CategoryCarousel />
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <LatestBlogs />
            <LatestBlogs />
            <LatestBlogs />
            <LatestBlogs />
            <LatestBlogs />
            <LatestBlogs />
           </div>
        </main>
     );
}

export default HomePage;