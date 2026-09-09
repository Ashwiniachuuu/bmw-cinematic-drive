import { useEffect, useState } from "react";

const LINKS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "cars", label: "CARS" },
  { id: "technology", label: "TECHNOLOGY" },
  { id: "contact", label: "CONTACT" },
];

export default function Nav() {
  const [active, setActive] = useState("home");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
      let current = "home";
      for (const l of LINKS) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none -translate-y-4 opacity-0"
      }`}
    >
      <nav className="mx-auto mt-4 flex max-w-6xl items-center justify-between gap-4 rounded-full glass-panel px-4 py-2.5 sm:px-6">
        <button onClick={() => go("home")} className="flex items-center gap-3" aria-label="BMW home">
          <img src="/bmw-logo.png" alt="BMW logo" width={34} height={34} className="h-8 w-8" />
          <span className="hidden font-display text-xs tracking-[0.4em] text-foreground/80 sm:block">
            BMW
          </span>
        </button>
        <ul className="flex items-center gap-1 sm:gap-2">
          {LINKS.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={`rounded-full px-2.5 py-1.5 font-display text-[10px] tracking-[0.22em] transition-colors sm:px-4 sm:text-[11px] ${
                  active === l.id
                    ? "bg-primary/15 text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
