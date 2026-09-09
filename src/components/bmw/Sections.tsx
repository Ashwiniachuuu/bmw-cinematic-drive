import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutCar from "@/assets/about-car.jpg";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import tech1 from "@/assets/tech-1.jpg";
import tech2 from "@/assets/tech-2.jpg";
import tech3 from "@/assets/tech-3.jpg";
import contactCar from "@/assets/contact-car.jpg";

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 44 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none reverse" },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, [delay]);
  return <div ref={ref}>{children}</div>;
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-display text-[10px] tracking-[0.5em] text-accent/90">{children}</p>
  );
}

const CARS = [
  { img: car1, name: "M4 COMPETITION", spec: "510 hp · 0–100 in 3.5s", copy: "Track-bred aggression wrapped in everyday precision." },
  { img: car2, name: "i7 xDRIVE60", spec: "Electric · 625 km range", copy: "Silent luxury with a fully electric drivetrain." },
  { img: car3, name: "X5 M", spec: "625 hp · xDrive AWD", copy: "Command presence with unshakeable all-road control." },
];

const TECH = [
  { img: tech1, title: "CURVED DISPLAY", copy: "A driver-oriented cockpit that keeps every control within reach." },
  { img: tech2, title: "eDRIVE ARCHITECTURE", copy: "Fifth-generation electric drive with intelligent energy recovery." },
  { img: tech3, title: "ADAPTIVE LASERLIGHT", copy: "Precision beams that read the road up to 600 metres ahead." },
];

export default function Sections() {
  return (
    <>
      {/* ABOUT */}
      <section id="about" className="relative px-6 py-28 md:py-40">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <Reveal>
            <div className="group overflow-hidden rounded-3xl glass-panel p-2">
              <img
                src={aboutCar}
                alt="BMW sedan lit by blue studio light"
                loading="lazy"
                width={1600}
                height={1008}
                className="h-full w-full rounded-2xl object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>ABOUT</Eyebrow>
            <h2 className="mt-5 font-display text-4xl leading-tight text-foreground md:text-5xl">
              Engineered for the
              <span className="block text-accent">art of driving</span>
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground">
              For more than a century, BMW has treated performance as a discipline — balance
              before brute force, clarity before clutter. Every line is drawn in the wind
              tunnel, every response tuned around the driver.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                ["1916", "Founded"],
                ["100+", "Motorsport titles"],
                ["30+", "Electrified models"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-2xl glass-panel px-4 py-5">
                  <p className="font-display text-2xl text-foreground">{n}</p>
                  <p className="mt-1 text-[11px] tracking-[0.15em] text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CARS */}
      <section id="cars" className="relative px-6 py-28 md:py-40">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Eyebrow>THE RANGE</Eyebrow>
            <h2 className="mt-5 font-display text-4xl text-foreground md:text-5xl">Selected models</h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {CARS.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.12}>
                <article className="card-tilt group h-full overflow-hidden rounded-3xl glass-panel">
                  <div className="overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.name}
                      loading="lazy"
                      width={1200}
                      height={912}
                      className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg tracking-[0.12em] text-foreground">{c.name}</h3>
                    <p className="mt-2 text-[11px] tracking-[0.18em] text-accent">{c.spec}</p>
                    <p className="mt-4 text-sm text-muted-foreground">{c.copy}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="technology" className="relative px-6 py-28 md:py-40">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Eyebrow>TECHNOLOGY</Eyebrow>
            <h2 className="mt-5 font-display text-4xl text-foreground md:text-5xl">
              Intelligence, quietly applied
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {TECH.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.12}>
                <article className="glow-card h-full overflow-hidden rounded-3xl glass-panel p-2">
                  <img
                    src={t.img}
                    alt={t.title}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="h-44 w-full rounded-2xl object-cover"
                  />
                  <div className="px-4 pb-5 pt-6">
                    <h3 className="font-display text-sm tracking-[0.22em] text-foreground">{t.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{t.copy}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden px-6 py-28 md:py-40">
        <img
          src={contactCar}
          alt="BMW at night on an open road"
          loading="lazy"
          width={1600}
          height={900}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>CONTACT</Eyebrow>
            <h2 className="mt-5 font-display text-4xl text-foreground md:text-6xl">
              Book your <span className="text-accent">test drive</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
              Tell us which model moved you and we will arrange a private viewing at your
              nearest showroom.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4">
              <a
                href="mailto:hello@example.com"
                className="rounded-full bg-accent px-8 py-3.5 font-display text-xs tracking-[0.28em] text-accent-foreground transition-transform duration-300 hover:scale-[1.04]"
              >
                REQUEST A DRIVE
              </a>
              <p className="text-sm text-muted-foreground">
                hello@example.com · +00 000 000 0000
              </p>
            </div>
            <div className="mt-12 flex justify-center gap-3">
              {["INSTAGRAM", "YOUTUBE", "X"].map((s) => (
                <a
                  key={s}
                  href="#contact"
                  className="rounded-full glass-panel px-5 py-2 text-[10px] tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {s}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border/40 px-6 py-10 text-center">
        <p className="text-[11px] tracking-[0.22em] text-muted-foreground">
          BMW-INSPIRED CONCEPT SHOWCASE · NOT AN OFFICIAL BMW SITE
        </p>
      </footer>
    </>
  );
}
