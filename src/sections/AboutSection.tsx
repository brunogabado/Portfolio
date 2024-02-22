import Title from "../components/Title";

const AboutSection = () => {
  return (
    <>
      <svg viewBox="0 0 1000 100" preserveAspectRatio="none" width="100%" height="100">
        <path fill="black" d="M0 30c166.5-29.5 333 29.5 500 0s333-59 500 0v70H0z" />
      </svg>
      <div className="flex flex-col items-center p-12 bg-black gap-[80px]">
        <Title color="white">About</Title>
        <div className="flex justify-center max-w-[900px]">
          <h6 className="text-white text-xl sm:text-2xl md:text-4xl font-indie-flower">
            I am Bruno, a 24 years old guy living in Portugal who is starting a carrer as web developer. I always struggle to find a area that i
            wanted to pursuit and study. At the end of the highschool i didn’t know what to do, so i started to work at that time until today.
            <br></br>
            <br></br> About two years ago i discovered the area of the programation and started to do some free courses online. The interest grow up,
            and the pleasure for learn grow up as well. And, for the first time, i found a subject that i truly enjoy to be work on.<br></br>
            <br></br> Two years later, comming to this day. I already have learn a lot but never enough. Recently, i've finished the <a>Eddsirupt</a>{" "}
            profissional bootcamp wich preapered me to the profissional world.Now, i’m searching for a opportunity to change carrer and give one more
            step on my evolution.
          </h6>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
