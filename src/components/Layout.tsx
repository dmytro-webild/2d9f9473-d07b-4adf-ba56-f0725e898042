import { Outlet } from 'react-router-dom';

import { StyleProvider } from '@/components/ui/StyleProvider';
import SiteBackgroundSlot from '@/components/ui/SiteBackgroundSlot';
import { Instagram, Facebook, Linkedin } from "lucide-react";
import NavbarInline from "@/components/ui/NavbarInline";
import FooterMinimal from "@/components/sections/footer/FooterMinimal";

export default function Layout() {
  return (
    <StyleProvider buttonVariant="default" siteBackground="none" heroBackground="none">
      <SiteBackgroundSlot />
      <NavbarInline
                logo="Luxuria"
                navItems={[
                  { name: "About", href: "#about" },
                  { name: "Services", href: "#services" },
                  { name: "Destinations", href: "#destinations" },
                  { name: "Reviews", href: "#reviews" },
                  { name: "Contact", href: "#contact" },
                ]}
                ctaButton={{ text: "Plan Your Trip", href: "#contact" }}
              />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterMinimal
                brand="Luxuria"
                copyright="© 2025 Luxuria Travel | Luxury Journeys Worldwide"
                socialLinks={[
                  { icon: Instagram, href: "#" },
                  { icon: Facebook, href: "#" },
                  { icon: Linkedin, href: "#" },
                ]}
              />
    </StyleProvider>
  );
}
