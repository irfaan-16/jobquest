import { Search } from "lucide-react";

const Home = () => {
  return (
    <div className="text-center flex flex-col gap-16 justify-center p-14 bg">
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

        <div className="flex items-center gap-4 justify-center mt-14">
          <div className="flex items-center">
            <input
              placeholder="search for a job"
              type="text"
              className="font-bold rounded-md p-2 px-4 cursor-pointer backdrop:blur-2xl outline-none bg-[#ffffff9b]  placeholder:text-gray-600 pr-10 max-w-60 border-2 border-green-500"
            />
            <Search className="-ml-8 pointer-events-none" />
          </div>
          <button className="bg-green-500 text-white rounded-md p-2 cursor-pointer font-bold drop-shadow-highlight hover:bg-transparent hover:text-green-500 transition hover:drop-shadow-none hover:border-green-500 border-2 border-transparent duration-[250]">
            search
          </button>
          {/* <button className="rounded-full bg-green-600 text-white px-4 py-2 fpnt">
            get started →
          </button>
          <button className="rounded-full px-4 py-2 text-black/85 font-bold border-green-500 border-2">
            explore jobs
          </button> */}
        </div>
      </div>

      <div>
        <h1 className="font-extrabold text-6xl text-black/85">
          Discover jobs perfectly matched to you
        </h1>

        <div className="flex justify-between mt-20 min-h-[400px] ">
          <div className="flex flex-col justify-between">
            <div className="rounded-lg backdrop:blur-xl w-[35rem] text-center">
              <h3 className="text-3xl font-extrabold mb-8 underlined">
                🔥 The <span className="text-green-600">Difference</span> We
                Make →
              </h3>
              <ul>
                <li className=" font-bold animate-float text-center m-auto before:content-['🚀'] before:mr-2">
                  Analyze your skills and experience with advanced AI.
                </li>

                <li className=" font-bold animate-float text-center m-auto before:content-['🚀'] before:mr-2">
                  Tailor job opportunities to match your preferences.
                </li>

                <li className=" font-bold animate-float text-center m-auto before:content-['🚀'] before:mr-2">
                  Connect with roles aligned with your career goals.
                </li>
              </ul>
            </div>

            <div className="rounded-lg backdrop:blur-xl w-[35rem] text-center ml-16">
              <h3 className="text-3xl font-extrabold mb-8 underlined">
                🔥 How Its<span className="text-green-600"> Done</span>→
              </h3>
              <ul>
                <li className=" font-bold animate-float text-center m-auto before:content-['🚀'] before:mr-2">
                  Upload your resume or connect your LinkedIn.
                </li>

                <li className=" font-bold animate-float text-center m-auto before:content-['🚀'] before:mr-2">
                  Set your job preferences.
                </li>

                <li className=" font-bold animate-float text-center m-auto before:content-['🚀'] before:mr-2">
                  Receive personalized job recommendations.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="rounded-lg backdrop:blur-xl w-[35rem] text-center">
              <h3 className="text-3xl font-extrabold mb-8 underlined">
                🔥 Explore
                <span className="text-green-600"> Opportunitiess</span>→
              </h3>
              <ul>
                <li className=" font-bold animate-float text-center m-auto before:content-['🚀'] before:mr-2">
                  Access a diverse range of job listings.
                </li>

                <li className=" font-bold animate-float text-center m-auto before:content-['🚀'] before:mr-2">
                  Find roles that align with your interests.
                </li>

                <li className=" font-bold animate-float text-center m-auto before:content-['🚀'] before:mr-2">
                  Get personalized insights to guide your career path.
                </li>
              </ul>
            </div>

            <div className="rounded-lg backdrop:blur-xl w-[35rem] text-center -ml-28">
              <h3 className="text-3xl font-extrabold mb-8 underlined">
                🔥 Your
                <span className="text-green-600"> Job</span> Adventure →
              </h3>
              <ul>
                <li className=" font-bold animate-float text-center m-auto before:content-['🚀'] before:mr-2">
                  Embark on a journey to discover unique career paths.
                </li>

                <li className=" font-bold animate-float text-center m-auto before:content-['🚀'] before:mr-2">
                  Engage with interactive, personalized job exploration.
                </li>

                <li className=" font-bold animate-float text-center m-auto before:content-['🚀'] before:mr-2">
                  Unlock new opportunities with innovative matching technology.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
