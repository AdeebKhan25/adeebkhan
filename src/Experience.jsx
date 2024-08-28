import { expData } from "./expData";
import ExpCard from "./ExpCard";

function Experience() {
  return (
    <div>
      <span className="text-2xl tracking-tight">Experience</span>
      <div className="">
        {expData.map((data, index) => (
          <ExpCard
            key={index}
            position={data.position}
            company={data.company}
            location={data.location}
            time={data.time}
            pic={data.pic}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
