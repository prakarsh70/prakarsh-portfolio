import { useState, useEffect } from "react";
import { User, Briefcase, Wrench, Send, ArrowUp } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: typeof User;
}

const navItems: NavItem[] = [
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Exp", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "contact", label: "Contact", icon: Send },
];

export default function MobileNav() {
  const [activeSection, setActiveSection] = useState("about");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show back to top if scrolled past 300px
      setShowBackToTop(window.scrollY > 300);

      // Bottom of page detection for contact section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection("contact");
        return;
      }

      // Detect current section
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="lg:hidden fixed bottom-5 inset-x-0 z-40 flex items-center justify-center pointer-events-none px-4">
      <div className="flex items-center gap-2 pointer-events-auto">
        <nav
          aria-label="Mobile navigation"
          className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-lg border border-slate-700/80 shadow-2xl shadow-black/50"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2.5 rounded-full bg-slate-900/90 backdrop-blur-lg border border-slate-700/80 text-teal-300 shadow-xl shadow-black/50 hover:bg-slate-800 transition-all active:scale-95"
          >
            <ArrowUp className="w-4 h-4" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}
