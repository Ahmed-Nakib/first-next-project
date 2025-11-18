import FooterPage from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div  className="max-w-7xl mx-auto">
        <Navbar />
      <div>
        <main>{children}</main>
      </div>
      <FooterPage />
    </div>
  );
}
