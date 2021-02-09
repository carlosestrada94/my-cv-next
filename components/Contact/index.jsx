import { useEffect, useRef } from "react";
import { gsap } from "gsap";
//Custom
import Space from "../Nav/Space";

export default function Contact() {
  const sectionRef = useRef();
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "40% 50%",
          end: "40% 50%",
          toggleActions: "play none none reverse",
          markers: false,
        },
        defaults: {
          duration: 0.5,
        },
      })
      .from(
        sectionRef.current.querySelector("h3"),
        {
          y: 100,
          duration: 0.5,
        },
        "<"
      );
  }, []);

  const contacts = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/carlos-estrada-42a0851b5/",
    },
    { name: "Mail", href: "mailto: carlosestrada94@outlook.com" },
    { name: "Github", href: "https://github.com/carlosestrada94" },
  ];

  const contactsRender = () => {
    return contacts.map(({ name, href }, index) => {
      return (
        <a
          key={index}
          href={href}
          target={"_blank"}
          rel={"noreferrer"}
          className="border-b-2 border-gray-50 hover:border-gray-800 transition-all"
        >
          {name}
        </a>
      );
    });
  };

  return (
    <div className="section" id={"contact"} ref={sectionRef}>
      <Space />
      <div className="section-content flex-col" style={{ minHeight: "90vh" }}>
        <h1 className="section-title self-start">Contact</h1>
        <div className="flex flex-col flex-grow sm:flex-grow-0 justify-center">
          <div className="section-p w-full flex justify-evenly self-center">
            {contactsRender()}
          </div>
          <h3 className="section-p text-center self-center font-bold">
            Thank you for visiting my website!
          </h3>
        </div>
      </div>
    </div>
  );
}
