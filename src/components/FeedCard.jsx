import { BookmarkPlus } from "lucide-react";
import { Compass } from "lucide-react";

const FeedCard = () => {
  return (
    <div className="rounded-md shadow-md p-4  cursor-pointer flex flex-col gap-4 bg-white  max-w-96">
      <div className="flex gap-2 items-center p-2 bg-[#16a34a47] rounded-md shadow-md">
        <div className="p-2 bg-black/10 rounded-md drop-shadow-highlight">
          <Compass />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Sr. UX Designer</h3>
          <p className="leading-5">Netflix</p>
        </div>
      </div>
      <div>
        <p className="line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          veniam vero laboriosam dolorum doloribus, non quam officiis evenietnt
          ipsam et nesciunt labore. Aliquam provident nulla debitis ratione
          nobis quod quaerat nostrum sit quisquam eos iure assumenda iste cum
          deserunt! z
        </p>
      </div>
      <div className="flex gap-2">
        <span className="drop-shadow-md text-purple-700 bg-purple-100 p-1 px-2 text-xs rounded-md font-bold ">
          Entry level
        </span>

        <span className=" drop-shadow-md text-orange-700 bg-orange-100 p-1 px-2 text-xs rounded-md font-bold ">
          Part time
        </span>

        <span className="drop-shadow-md text-green-700 bg-green-200 p-1 px-2 text-xs rounded-md font-bold ">
          Remote
        </span>
      </div>

      <div>
        <div
          onClick={() => {
            console.log("saved!");
          }}
          className="bg-[#16a34a47] drop-shadow-highlight  transition duration-400 hover:text-white hover:bg-green-600 block p-2 rounded-full max-w-fit"
        >
          <BookmarkPlus className="" />
        </div>
      </div>
    </div>
  );
};
export default FeedCard;
