import Card from "./Card";
import { cardData } from "./cardData";

function Projects() {
  return (
    <div className="w-full md:w-4/5 mx-auto p-4 font-pPins">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((data, index) => (
          <Card
            key={index}
            heading={data.heading}
            content={data.content}
            imgSrc={data.imgSrc}
            tags={data.tags}
            isOnline={data.isOnline}
            git={data.git}
            access={data.access}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
