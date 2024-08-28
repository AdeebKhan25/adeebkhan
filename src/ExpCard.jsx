function ExpCard({ position, company, location, time, pic, description }) {
  return (
    <div className="my-4">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/6 w-full flex justify-center items-center md:justify-start">
          <img
            src={pic}
            alt="Company logo"
            className="w-32 h-32 md:w-full md:h-auto"
          />
        </div>
        <div className="md:w-5/6 w-full mt-4 md:mt-0 md:ml-4 text-center md:text-left">
          <h1 className="text-xl font-semibold">{position}</h1>
          <h2 className="text-lg font-medium">{company}</h2>
          <div className="text-sm font-normal text-gray-600 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start w-full">
            <span className="md:text-left text-center">{location}</span>
            <span className="md:text-right text-center">{time}</span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <ul className="list-disc list-inside">
          {description.map((item, index) => (
            <li key={index} className="px-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExpCard;
