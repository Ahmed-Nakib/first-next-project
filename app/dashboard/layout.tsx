import SideMenu from "@/components/SideMenu"



export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <SideMenu />
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
}
