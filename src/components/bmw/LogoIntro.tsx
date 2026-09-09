import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GRID = 4;
const TILES = Array.from({ length: GRID * GRID }, (_, i) => i);

// deterministic pseudo-random so SSR/CSR stay consistent
const rand = (i: number, salt: number) => {
  const x = Math.sin((i + 1) * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
};

export default function LogoIntro() {
  const section = useRef<HTMLDivElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const caption = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tiles = gsap.utils.toArray<HTMLElement>(".bmw-tile");

      tiles.forEach((t, i) => {
        const angle = rand(i, 1) * Math.PI * 2;
        const dist = 220 + rand(i, 2) * 520;
        gsap.set(t, {
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist,
          rotation: (rand(i, 3) - 0.5) * 220,
          scale: 0.55 + rand(i, 4) * 0.8,
          opacity: 0.35 + rand(i, 5) * 0.4,
          filter: "blur(2px)",
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
        },
      });

      tl.to(
        tiles,
        {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          ease: "power2.inOut",
          duration: 3,
          stagger: { each: 0.04, from: "center" },
        },
        0,
      )
        .to(wrap.current, { scale: 1.35, ease: "none", duration: 3 }, 0)
        .to(caption.current, { opacity: 0, y: -20, duration: 0.8 }, 2.4)
        .to(wrap.current, { scale: 9, opacity: 0, ease: "power2.in", duration: 1.4 }, 3.1);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={section} className="relative h-[400vh]" aria-hidden="false">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-background">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,color-mix(in_oklab,var(--accent)_22%,transparent),transparent_62%)]" />
        <div
          ref={wrap}
          className="relative aspect-square w-[62vmin] will-change-transform"
          style={{ transformOrigin: "50% 50%" }}
        >
          {TILES.map((i) => {
            const r = Math.floor(i / GRID);
            const c = i % GRID;
            return (
              <div
                key={i}
                className="bmw-tile absolute will-change-transform"
                style={{
                  width: `${100 / GRID}%`,
                  height: `${100 / GRID}%`,
                  left: `${(c * 100) / GRID}%`,
                  top: `${(r * 100) / GRID}%`,
                  backgroundImage: "url(/bmw-logo.png)",
                  backgroundSize: `${GRID * 100}% ${GRID * 100}%`,
                  backgroundPosition: `${(c / (GRID - 1)) * 100}% ${(r / (GRID - 1)) * 100}%`,
                }}
              />
            );
          })}
        </div>
        <div
          ref={caption}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center"
        >
          <p className="font-display text-[10px] tracking-[0.55em] text-accent/80">
            SHEER DRIVING PLEASURE
          </p>
          <p className="mt-4 text-xs tracking-[0.25em] text-muted-foreground">
            SCROLL TO ASSEMBLE
          </p>
        </div>
      </div>
    </div>
  );
}
