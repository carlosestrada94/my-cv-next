import { useEffect, useRef } from "react";
import Head from "next/head";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
//Custom
import Intro from "../components/Intro";
import About from "../components/About";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { client } from "../sanity";

export default function Home({ projects }) {
  const indexRef = useRef();

  useEffect(() => {
    //
    window.scrollTo({ top: 0, behavior: "smooth" });
    //
    const sections = document.querySelectorAll(".section");
    //
    sections.forEach((element) => {
      //
      const heading = element.querySelectorAll("h1");
      //
      const anim = gsap.from(heading, {
        x: -300,
        stagger: 0.4,
        scrollTrigger: {
          trigger: element,
          start: "top 50%",
          end: "top 50%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });
      //
    });
  }, []);

  return (
    <div
      className="flex flex-col min-h-screen w-screen overflow-x-hidden relative"
      ref={indexRef}
    >
      <Head>
        <title>Carlos Estrada</title>
        <link rel="icon" type={"image/png"} href="/favicon.png" />
      </Head>
      <Nav />
      <Intro />
      <About />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}

export async function getStaticProps() {
  let projects;
  try {
    projects = await client.fetch(
      "*[ _type == 'project' ] {title, description, url, srccode, 'snap': snapshot.asset->url }"
    );
  } catch (e) {
    console.error(e);
  }

  return {
    props: {
      projects,
    },
  };
}
