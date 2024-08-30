import FeedCard from "./FeedCard";

/* eslint-disable no-unused-vars */
const DATA = [
  {
    cName: "MetaMask",
    jobTitle: "Product Designer",
    variations: ["Entry Level", "Full Time", "Remote"],
    desc: "Doing the right thing for investors is what we are all about at Vanguard, and that in...",
    salary: "$40k",
    postedOn: "20 May, 2024",
  },

  {
    cName: "Netflix",
    jobTitle: "Sr. UX Designer",
    variations: ["Expert", "Full Time", "Remote"],
    desc: "Doing the right thing for investors is what we are all about at Vanguard, and that in...",
    salary: "$49k",
    postedOn: "7 May, 2024",
  },

  {
    cName: "AirBnb",
    jobTitle: "Graphic Designer",
    variations: ["Senior Level", "Full Time"],
    desc: "Doing the right thing for investors is what we are all about at Vanguard, and that in...",
    salary: "$64k",
    postedOn: "1 May, 2024",
  },

  {
    cName: "MetaMask",
    jobTitle: "Product Designer",
    variations: ["Entry Level", "Full Time", "Remote"],
    desc: "Doing the right thing for investors is what we are all about at Vanguard, and that in...",
    salary: "$40k",
    postedOn: "20 May, 2024",
  },

  {
    cName: "AirBnb",
    jobTitle: "Graphic Designer",
    variations: ["Senior Level", "Full Time"],
    desc: "Doing the right thing for investors is what we are all about at Vanguard, and that in...",
    salary: "$64k",
    postedOn: "1 May, 2024",
  },

  {
    cName: "Netflix",
    jobTitle: "Sr. UX Designer",
    variations: ["Expert", "Full Time", "Remote"],
    desc: "Doing the right thing for investors is what we are all about at Vanguard, and that in...",
    salary: "$49k",
    postedOn: "7 May, 2024",
  },
];

const Feed = () => {
  return (
    <main className="flex flex-wrap justify-center gap-6 p-4 bg-gray-200">
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </main>
  );
};

export default Feed;
