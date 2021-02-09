import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
//Custom
import Space from "../Nav/Space";

export default function Projects({ projects }) {
  //
  const sectionRef = useRef();
  const projectRef = useRef();
  //
  useEffect(() => {
    gsap.from(projectRef.current, {
      y: 100,
      // ease: "back",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "20% 50%",
        end: "20% 50%",
        toggleActions: "play none none reverse",
        markers: false,
      },
    });
  }, []);
  //
  const [postsOnPage, setPostsOnPage] = useState([]);
  const [postsPerPage, setPostsPerPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  //
  const pagRender = () => {
    const pages = [];
    if (projects) {
      for (let i = 1; i <= Math.ceil(projects.length / postsPerPage); i++) {
        pages.push(
          <div
            key={i}
            className={`btn border-b-2 ${
              currentPage === i ? "border-gray-900" : "border-gray-50"
            }`}
            onClick={() => {
              setCurrentPage(i);
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" });
              const text = projectRef.current.querySelectorAll("h2,p");
              const anim = gsap
                .timeline()
                .fromTo(text, { opacity: 0 }, { opacity: 1, stagger: 0.2 });
            }}
          >
            {i}
          </div>
        );
      }
    }
    return pages;
  };
  //
  useEffect(() => {
    const firstIndex = currentPage * postsPerPage - postsPerPage;
    const lastIndex = firstIndex + postsPerPage;
    if (projects) {
      setPostsOnPage(
        projects.filter(
          (project, index) => index >= firstIndex && index < lastIndex
        )
      );
    }
  }, [currentPage]);
  //
  const projectsRender = () => {
    if (postsOnPage) {
      return postsOnPage.map(
        ({ title, description, url, srccode, snap }, index) => {
          return (
            <div
              key={index}
              className="bg-gray-100 h-full w-full flex flex-col md:flex-row justify-between rounded shadow-sm"
            >
              <div className="h-80 w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <h2 className="section-subtitle px-5 py-3">{title}</h2>
                  <p className="section-p px-5 text-justify">{description}</p>
                </div>
                <div className="py-5 font-secondary flex justify-center ">
                  <a
                    className="btn"
                    target={"_blank"}
                    rel={"noreferrer"}
                    href={url}
                  >
                    Watch live
                  </a>
                  <a
                    className="btn"
                    target={"_blank"}
                    rel={"noreferrer"}
                    href={srccode}
                  >
                    Source code
                  </a>
                </div>
              </div>
              <div className="h-80 w-full md:w-1/2 bg-gray-200">
                <img src={snap} className="h-full w-full object-contain" />
              </div>
            </div>
          );
        }
      );
    }
  };
  //
  return (
    <div className="section" id={"projects"} ref={sectionRef}>
      <Space />
      <div className="section-content flex-col">
        <h1 className="section-title self-start">Projects</h1>
        <div
          className="w-full sm:h-full flex flex-col md:flex-row self-start"
          ref={projectRef}
        >
          {projectsRender()}
        </div>
        <div className="w-full flex justify-center py-5">{pagRender()}</div>
      </div>
    </div>
  );
}
