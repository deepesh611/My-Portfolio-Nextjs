import { FloatingNavbar } from "@/components/Navbar";
import { AuroraBackgroundDemo } from "@/components/Background";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="fixed inset-0 z-[-1] w-full h-full">
      <AuroraBackgroundDemo>
        
      </AuroraBackgroundDemo>
      </div>
    </main>
  );
}
