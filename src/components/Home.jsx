const Home = () => {
  return (
    <div className="text-center flex flex-col gap-16 justify-center p-14">
      <div>
        <p className="text-2xl text-black/85">
          hiring process 10x better & qualified.🚀🔥
        </p>
        <h1 className="font-extrabold text-9xl text-black/85">
          10x{" "}
          <span className="text-green-600 drop-shadow-highlight">hiring</span>{" "}
          <br />
          process, with
          <br />
          <span className="text-green-600 drop-shadow-highlight">AI</span>
          -powered.
        </h1>

        <div className="flex items-center gap-4 justify-center mt-10">
          <button className="rounded-full bg-green-600 text-white px-4 py-2 fpnt">
            get started →
          </button>
          <button className="rounded-full px-4 py-2 text-black/85 font-bold border-green-500 border-2">
            explore jobs
          </button>
        </div>
      </div>

      <div>
        <h1 className="font-extrabold text-6xl text-black/85">
          Discover jobs perfectly matched to you
        </h1>

        <div className="grid ">
          <div className="rounded-lg backdrop:blur-xl w-[35rem] text-center ">
            <h3 className="text-3xl font-extrabold mb-8 underlined">
              🔥 The <span className="text-green-600">Difference</span> We Make
              →
            </h3>
            <p className="w-96 font-bold animate-float text-center m-auto">
              Our AI analyzes your skills, preferences, and experience to
              connect you with job opportunities that align with your career
              goals.
            </p>
          </div>

          <div className="rounded-lg backdrop:blur-xl w-[35rem] text-center ">
            <h3 className="text-3xl font-extrabold mb-8 underlined">
              🔥 How Its<span className="text-green-600"> Done</span>→
            </h3>
            <ul>
              <li className="w-96 font-bold animate-float text-center m-auto before:content-['🚀'] before:mr-2">
                Upload your resume or connect your LinkedIn.
              </li>

              <li className="w-96 font-bold animate-float text-center m-auto before:content-['🚀'] before:mr-2">
                Set your job preferences.
              </li>

              <li className="w-96 font-bold animate-float text-center m-auto before:content-['🚀'] before:mr-2">
                Receive personalized job recommendations.
              </li>
            </ul>
          </div>

          <div className="rounded-lg backdrop:blur-xl w-[35rem] text-center ">
            <h3 className="text-3xl font-extrabold mb-8 underlined">
              🔥 Explore
              <span className="text-green-600"> Opportunitiess</span>→
            </h3>
            <ul>
              <li className="w-96 font-bold animate-float text-center m-auto before:content-['🚀'] before:mr-2">
                Access a diverse range of job listings.
              </li>

              <li className="w-96 font-bold animate-float text-center m-auto before:content-['🚀'] before:mr-2">
                Find roles that align with your interests.
              </li>

              <li className="w-96 font-bold animate-float text-center m-auto before:content-['🚀'] before:mr-2">
                Get personalized insights to guide your career path.
              </li>
            </ul>
          </div>

          <div className="rounded-lg backdrop:blur-xl w-[35rem] text-center ">
            <h3 className="text-3xl font-extrabold mb-8 underlined">
              🔥 Your
              <span className="text-green-600"> Job</span> Adventure →
            </h3>
            <ul>
              <li className="w-96 font-bold animate-float text-center m-auto before:content-['🚀'] before:mr-2">
                Embark on a journey to discover unique career paths.
              </li>

              <li className="w-96 font-bold animate-float text-center m-auto before:content-['🚀'] before:mr-2">
                Engage with interactive, personalized job exploration.
              </li>

              <li className="w-96 font-bold animate-float text-center m-auto before:content-['🚀'] before:mr-2">
                Unlock new opportunities with innovative matching technology.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
