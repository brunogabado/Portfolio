import Title from "../components/Title";

const ContactSection = () => {
  return (
    <>
      <Title color="black">Contact Me</Title>
      <div id="Contact" className="flex justify-center gap-5 my-12">
        <form className="flex flex-col gap-5 items-center" action="https://formsubmit.co/8344bd3e4d2c047a3052ac8014343f62" method="POST">
          <div className="flex flex-col gap-5 lg:flex-row">
            <input name="name" type="text" placeholder="Name" className="w-[270px] h-12 border-2 p-4 rounded-xl" required />
            <input name="email" type="text" placeholder="Email" className=" w-[270px] h-12 border-2 p-4 rounded-xl" required />
            <input name="company" type="text" placeholder="Company" className=" w-[270px] h-12 border-2 p-4 rounded-xl" />
          </div>
          <textarea name="message" id="" placeholder="Your Message" className="w-[100%] h-[120px] border-2 p-4 rounded-xl" required></textarea>
          <button className="w-[200px] border-2 border-black rounded-2xl p-[15px] bg-black text-white transition delay-150 duration-300 ease-in-out hover:bg-white hover:text-black hover:scale-125 transition font-anta">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactSection;
