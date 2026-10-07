import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

// Draggable cards in the "DEVELOPMENT" tile, scattered with uneven angles.
const skillCards = [
  { text: "Backend", style: { rotate: "-12deg", top: "6%", left: "2%" } },
  { text: "REST APIs", style: { rotate: "23deg", top: "4%", left: "55%" } },
  { text: "Clean Code", style: { rotate: "-37deg", top: "30%", left: "30%" } },
  { text: "Databases", style: { rotate: "8deg", top: "22%", left: "62%" } },
  { text: "Algorithms", style: { rotate: "61deg", top: "48%", left: "2%" } },
  { text: "Machine Learning", style: { rotate: "-19deg", top: "56%", left: "40%" } },
  { text: "Optimization", style: { rotate: "-71deg", top: "45%", left: "74%" } },
  { text: "Design Principles", style: { rotate: "14deg", top: "78%", left: "8%" } },
];

const logoCards = [
  { logo: "java.svg", style: { rotate: "-18deg", top: "6%", left: "43%" } },
  { logo: "spring-boot.svg", style: { rotate: "27deg", top: "26%", left: "4%" } },
  { logo: "python.svg", style: { rotate: "-42deg", top: "68%", left: "72%" } },
  { logo: "fastapi.svg", style: { rotate: "11deg", top: "2%", left: "31%" } },
  { logo: "postgresql.svg", style: { rotate: "-9deg", top: "74%", left: "52%" } },
  { logo: "ts.svg", style: { rotate: "34deg", top: "21%", left: "21%" } },
  { logo: "react.svg", style: { rotate: "-56deg", top: "12%", left: "84%" } },
  { logo: "nextjs.svg", style: { rotate: "19deg", top: "84%", left: "64%" } },
  { logo: "rust.svg", style: { rotate: "-28deg", top: "62%", left: "24%" } },
  { logo: "git.svg", style: { rotate: "47deg", top: "82%", left: "86%" } },
];

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi nice to meet you i'm Michał</p>
            <p className="subtext">
              I'm a 3rd-year Computer Science student and a Backend Developer by profession, working at Incat, a fintech company. I have fullstack knowledge and I'm now growing towards Machine Learning
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              DEVELOPMENT
            </p>
            {skillCards.map(({ text, style }) => (
              <Card key={text} style={style} text={text} containerRef={grid2Container} />
            ))}
            {logoCards.map(({ logo, style }) => (
              <Card key={logo} style={style} image={`assets/logos/${logo}`} containerRef={grid2Container} />
            ))}
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">University</p>
            <p className="subtext">
              I'm a 3rd-year Computer Science student at the <br /> <b>AGH</b> in Cracow
            </p>
          </div>
          <figure className="absolute left-[20%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              Backend is my profession: Spring Boot, Python (FastAPI) and PostgreSQL.
              I also know the frontend (React, Next.js, TypeScript, Tailwind), so I build fullstack apps.
              Now I'm growing towards Machine Learning.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;