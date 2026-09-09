import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Nav from "@/components/bmw/Nav";
import LogoIntro from "@/components/bmw/LogoIntro";
import HeroVideo from "@/components/bmw/HeroVideo";
import Sections from "@/components/bmw/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BMW — The Ultimate Driving Machine | Cinematic Showcase" },
      {
        name: "description",
        content:
          "A cinematic BMW-inspired showcase: scroll-driven film, selected models, technology and contact — all on one premium page.",
      },
      { property: "og:title", content: "BMW — The Ultimate Driving Machine" },
      {
        property: "og:description",
        content: "Scroll-driven cinematic BMW showcase with selected models and technology.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({
      duration: 0.9,
      smoothWheel: true,
      wheelMultiplier: 1.1,
    });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative bg-background">
      <Nav />
      <LogoIntro />
      <HeroVideo />
      <Sections />
    </main>
  );
}
