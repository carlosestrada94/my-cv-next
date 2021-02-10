import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
gsap.registerPlugin(TextPlugin);
//
import Space from "../Nav/Space";

export default function About() {
  //
  const code = [
    "function hire(me, yourCompany) {",
    "let devDept = yourCompany.deptsArr.find((dept) =>",
    "dept.skills.required === me.skills);",
    "devDept.employeesArr.push(me);",
    "console.log(`${me.name} says Woohoo!`);}",
  ];
  //
  const codeTl = gsap.timeline({ repeat: -1 });
  //
  const sectionRef = useRef();
  //
  useEffect(() => {
    //
    const text = sectionRef.current.querySelectorAll("h2, p");
    gsap.from(text, {
      y: 100,
      // ease: "back(1)",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "5% 50%",
        end: "5% 50%",
        toggleActions: "play none none reverse",
        markers: false,
      },
    });
    //
    code.forEach((line, index) => {
      const tween = gsap.to(`#p-${index + 1}`, {
        duration: 4,
        text: {
          value: line,
        },
      });
      codeTl.add(tween, ">");
    });
  }, []);

  return (
    <div className="section" id={"about"} ref={sectionRef}>
      <Space />
      <div className="section-content sm:flex-row flex-col">
        <div className="w-full sm:w-3/5">
          <h1 className="section-title">About Me</h1>
          <h2 className="section-subtitle">Economist and Web Developer</h2>
          <p className="section-p sm:pr-5">
            On September of 2019, I started my developer journey. With the help
            of lots of incredible online learning resources, I have been able to
            learn a lot about Javascript, some of its most important libraries,
            frameworks, and run environments. This is only the start, but I am
            very excited and happy with this journey.
          </p>
          <a
            className="btn bg-yellow-500 block"
            style={{ margin: "0", width: "fit-content" }}
            href={
              "https://cees94.s3-sa-east-1.amazonaws.com/CV_CARLOS_ESTRADA_FEB_2021.pdf"
            }
            target={"_blank"}
            type={"noreferrer"}
          >
            Download my CV
          </a>
        </div>
        <div className="bg-gray-600 h-64 w-full sm:w-80 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96 my-5 p-5 mx-auto rounded">
          <p id="p-1" className="code-p"></p>
          <p id="p-2" className="code-p"></p>
          <p id="p-3" className="code-p"></p>
          <p id="p-4" className="code-p"></p>
          <p id="p-5" className="code-p"></p>
          <p id="p-6" className="code-p"></p>
          <p id="p-7" className="code-p"></p>
          <p id="p-8" className="code-p"></p>
          <p id="p-9" className="code-p"></p>
        </div>
      </div>
    </div>
  );
}
