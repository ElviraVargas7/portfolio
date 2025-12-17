import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row items-center gap-6 text-center sm:items-start sm:text-left">
        <div className="flex flex-col gap-4">
          <div className="border border-solid border-[#c7417b] rounded-3xl bg-[#F5D6E1] dark:bg-[#E31C8D] w-fit px-4 py-2 mb-2">
            <p className="text-[#c7417b] dark:text-[#c7417b]">Hello, I'm</p>
          </div>

          <h1 className="font-semibold leading-10 tracking-tight text-6xl text-black dark:text-[#fce7f3]">
            Elvira Vargas Bermudez
          </h1>

          <h2 className="text-[#7a5e73] text-4xl font-bold">
            Full Stack developer
          </h2>

          <p className="text-[#7a5e73]">
            I design and build scalable APIs, real time systems, and AI agents
            that solve real business problems
          </p>

          <h2 className="text-[#7a5e73]">
            <strong>Tech highlights</strong>: Node.js • React • Python • FastAPI
            • .NET • LangChain • PostgreSQL
          </h2>

          <div className="flex flex-row gap-2">
            <button className="flex flex-row gap-2 bg-[#c7417b] text-white px-4 py-2 rounded-lg">
              View projects
              <Image
                src="/icons/arrow-right.svg"
                alt="Arrow right"
                width={25}
                height={10}
                priority
              />
            </button>

            <button className="border border-solid border-[#c7417b] text-[#c7417b] px-4 py-2 rounded-lg">
              Download CV
            </button>
          </div>

          <div className="flex flex-row gap-2">
            <Image
              src="/icons/email-pink.svg"
              alt="Email logo"
              width={30}
              height={10}
              priority
            />
            <Image
              src="/icons/linkedin-pink.svg"
              alt="LinkedIn icon"
              width={25}
              height={10}
              priority
            />
          </div>
        </div>

        <Image src="/me.png" alt="Me" width={300} height={20} priority />
      </div>

      <div className="flex justify-center">
        <Image
          src="/icons/arrow-sm-down.svg"
          alt="LinkedIn icon"
          width={50}
          height={10}
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
