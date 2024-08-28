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
          I am a Experienced Software Developer with a demonstrated history of
          working in the information technology and services industry. I am a
          Seasoned Competative Programmer. I am skilled in Algorithms, C++,
          Python, Machine Learning and Event Management. I am a Strong
          information technology professional currently pursuing a Bachelor of
          Engineering - BE focused in Computer Science from Birla Institute of
          Technology and Science, Pilani.
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
            <SkillBar skill="Machine Learning" percentage={50} color="violet" />
            <SkillBar skill="React" percentage={45} color="orange" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <p className="text-2xl mb-3">Other Skills</p>
          <div className="space-y-4">
            <SkillBar skill="Cooking" percentage={80} color="lime" />
            <SkillBar skill="Reading" percentage={75} color="red" />
            <SkillBar skill="Cricket" percentage={70} color="indigo" />
            <SkillBar skill="Public Speaking" percentage={60} color="fuchsia" />
            <SkillBar
              skill="Learning new things"
              percentage={50}
              color="blue"
            />
            <SkillBar skill="Gaming" percentage={40} color="teal" />
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
