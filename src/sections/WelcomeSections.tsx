import Title from "../components/Title";
import GithubSvg from "../svg's/GithubSvg";
import LinkedinSvg from "../svg's/LinkedinSvg";

const WelcomeSection = () => {
  return (
    <>
      <div className="flex flex-col p-[25px] mt-9 ">
        <div>
          <div className="flex sm:pl-[15%] ">
            <Title color="black">Hi i'm Bruno,</Title>
          </div>
          <div className="flex justify-center">
            <Title color="black">a Junior Frontend Developer</Title>
          </div>
        </div>

        <div className="md:mt-11 w-[100%] flex flex-col gap-9 justify-around items-center py-[30px] sm:p-[30px] md:flex-row">
          <div className="max-w-[600px]">
            <h6 className="text-xl sm:text-2xl md:text-4xl font-indie-flower">
              I am a frontend developer recently gradudated by the{" "}
              <a className="underline hover:text-gray-500" href="https://www.eddisrupt.com/pt">
                Eddisrupt
              </a>{" "}
              bootcamp. With a several skills adquired during the last 2 years of estudies. Now waiting for a change to change my carrer
            </h6>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-center gap-6">
              <a className="transition delay-150 duration-300 ease-in-out hover:scale-125" href="https://www.linkedin.com/in/brunogabado/">
                <LinkedinSvg />
              </a>
              <a className="transition delay-150 duration-300 ease-in-out hover:scale-125" href="https://github.com/brunogabado">
                <GithubSvg />
              </a>
            </div>
            <button className="w-[200px] border-2 border-black rounded-2xl p-[15px] bg-black text-white transition delay-150 duration-300 ease-in-out hover:bg-white hover:text-black hover:scale-125 transition font-anta">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeSection;
