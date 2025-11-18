import FooterPage from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <Navbar />
      <div>
        <main>{children}</main>
      </div>
      <FooterPage />
    </div>
  );
}
