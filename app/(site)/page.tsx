import CategoryCarousel from "@/components/CategoryCarousel";
import LatestProduct from "@/components/LatestProduct";
import ThreeDCarousel from "@/components/ThreeDCarousel";
import TopProduct from "@/components/TopProduct";


const caseStudies = [
  {
    id: 1,
    title: "Smart Health Monitoring",
    brand: "MedTex",
    description:
      "Wearable textile sensors designed for continuous heart and respiration monitoring.",
    tags: ["Healthcare", "Smart Fabric", "Wearables"],
    imageUrl: "/slide-1.png",
    link: "/case/1",
  },
  {
    id: 2,
    title: "Sports Performance Tracking",
    brand: "FitPro",
    description:
      "Real-time athletic tracking using embedded textile pressure sensors.",
    tags: ["Sports", "IoT", "Tracking"],
    imageUrl: "/slide-2.png",
    link: "/case/2",
  },
  {
    id: 3,
    title: "Sports Performance Tracking",
    brand: "FitPro",
    description:
      "Real-time athletic tracking using embedded textile pressure sensors.",
    tags: ["Sports", "IoT", "Tracking"],
    imageUrl: "/slide-3.png",
    link: "/case/2",
  },
  {
    id: 4,
    title: "Sports Performance Tracking",
    brand: "FitPro",
    description:
      "Real-time athletic tracking using embedded textile pressure sensors.",
    tags: ["Sports", "IoT", "Tracking"],
    imageUrl: "/slide-4.png",
    link: "/case/2",
  },
];


function HomePage() {
    return ( 
        <main className="max-w-7xl mx-auto p-6">
          <ThreeDCarousel items={caseStudies} />
           <div>
            <LatestProduct />
           </div>
           <CategoryCarousel />
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <TopProduct/>
            <TopProduct/>
            <TopProduct/>
            <TopProduct/>
           </div>
        </main>
     );
}

export default HomePage;