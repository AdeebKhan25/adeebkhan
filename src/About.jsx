import SkillBar from "./SkillBar.jsx";
import Experience from "./Experience.jsx";

function About() {
  return (
    <div className="w-full md:w-3/5 mx-auto p-4 font-pPins">
      <div className="mb-4">
        <p className="text-3xl font-bold tracking-tighter mb-2">About Me</p>
        <p className="mb-4">
          Hi, I am{" "}
          <span className="font-medium tracking-tighter">Adeeb Khan</span>,
        </p>
        <p>
          I am a dedicated Software Developer with a strong background in
          various projects across different industries. My journey in technology
          has instilled a passion for problem-solving, which I apply as a
          seasoned Competitive Programmer. I possess a solid skill set in
          Algorithms, C++, Python, AI, and Machine Learning, allowing me to
          tackle complex challenges efficiently.
        </p>
        <p className="mt-2">
          In addition to my programming expertise, I have experience in Web
          Development, where I strive to create intuitive and effective
          solutions.
        </p>
        <p className="mt-2">
          When I'm free, I enjoy traveling, meeting new people, and learning
          about different cultures. I also have a deep interest in history,
          physics, and technology, which fuels my curiosity and broadens my
          perspective.
        </p>
        <p className="mt-2">
          Currently, I am pursuing Master of Technology (M.Tech) in Computer
          Science & Engineering at{" "}
          <span className="font-semibold">
            Motilal Nehru National Institute of Technology Allahabad, Prayagraj
          </span>
          . This educational path provides me with the opportunity to deepen my
          understanding of technology and contribute meaningfully to the field.
        </p>
      </div>
      <hr className="border-t-1 border-gray-500 my-4" />
      <Experience />
      <hr className="border-t-1 border-gray-500 mb-4 mt-6" />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-4">
          <p className="text-2xl mb-3">Programming Skills</p>
          <div className="space-y-4">
            <SkillBar
              skill="Data Structures & Algorithms"
              percentage={80}
              color="blue"
            />
            <SkillBar skill="C/C++" percentage={75} color="green" />
            <SkillBar skill="Python" percentage={65} color="red" />
            <SkillBar skill="JavaScript" percentage={55} color="teal" />
            <SkillBar
              skill="Machine Learning & AI"
              percentage={50}
              color="violet"
            />
            <SkillBar skill="React & Web Dev" percentage={50} color="orange" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <p className="text-2xl mb-3">Other Skills</p>
          <div className="space-y-4">
            <SkillBar skill="Cooking" percentage={80} color="lime" />
            <SkillBar skill="Reading" percentage={75} color="red" />
            <SkillBar skill="Painting" percentage={70} color="indigo" />
            <SkillBar skill="Public Speaking" percentage={60} color="fuchsia" />
            <SkillBar
              skill="Learning New Things"
              percentage={50}
              color="blue"
            />
            <SkillBar skill="Gardening" percentage={40} color="teal" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-3">
        <a
          href="/Resume_Adeeb_Khan.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Click here for My Resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default About;
