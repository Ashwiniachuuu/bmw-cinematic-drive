import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import videoAsset from "@/assets/bmw-video.mp4.asset.json";

/**
 * Scroll-scrubbed hero: the full uploaded video timeline is mapped 1:1 to the
 * pinned scroll distance. The video itself is never altered - only currentTime
 * is driven, smoothed with a rAF interpolation so fast wheel input stays fluid.
 */
export default function HeroVideo() {
  const section = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const vid = video.current;
    if (!vid) return;

    let raf = 0;
    let target = 0;
    let current = 0;
    let disposed = false;
    let ctx: gsap.Context | undefined;

    const setup = () => {
      if (disposed || !isFinite(vid.duration) || vid.duration <= 0) return;
      const duration = vid.duration;
      vid.pause();

      ctx = gsap.context(() => {
        const st = ScrollTrigger.create({
          trigger: section.current,
          start: "top top",
          // ~520px of scroll per second of footage: every frame stays reachable
          end: () => `+=${Math.round(duration * 520)}`,
          pin: true,
          pinSpacing: true,
          scrub: true,
          onUpdate: (self) => {
            target = self.progress * (duration - 0.02);
          },
        });

        gsap.fromTo(
          inner.current,
          { scale: 1.02 },
          {
            scale: 1.22,
            ease: "none",
            scrollTrigger: {
              trigger: section.current,
              start: "top top",
              end: () => `+=${Math.round(duration * 520)}`,
              scrub: true,
            },
          },
        );

        target = st.progress * (duration - 0.02);
        current = target;
      }, section);

      const tick = () => {
        raf = requestAnimationFrame(tick);
        current += (target - current) * 0.16;
        if (Math.abs(target - current) < 0.0008) current = target;
        if (vid.readyState >= 2 && Math.abs(vid.currentTime - current) > 0.008) {
          vid.currentTime = current;
        }
      };
      raf = requestAnimationFrame(tick);
    };

    if (vid.readyState >= 1) setup();
    else vid.addEventListener("loadedmetadata", setup, { once: true });

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      ctx?.revert();
    };
  }, []);

  return (
    <section id="home" ref={section} className="relative h-screen overflow-hidden bg-background">
      <div ref={inner} className="absolute inset-0 will-change-transform">
        <video
          ref={video}
          src={videoAsset.url}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          className="h-full w-full object-cover"
        />
      </div>

      {/* cinematic lighting overlays - video pixels untouched */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,transparent_35%,color-mix(in_oklab,var(--background)_85%,transparent)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/50 to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 bottom-20 mx-auto max-w-5xl px-6 text-center">
        <h1 className="font-display text-4xl leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          THE ULTIMATE
          <span className="block text-glow text-accent">DRIVING MACHINE</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-sm text-muted-foreground">
          Scroll to drive the film. Every frame is yours to command.
        </p>
      </div>
    </section>
  );
}
