"use client";
import data from "@/data/home";
import TwitterTimeline from "@/app/twitter";

export default function Home() {
  return (
    <>
      <div className="text-white home">
        <div className="h-full text-center flex flex-col items-center justify-start mt-16 w-screen gap-3 lg:gap-4">
          <div className="text-4xl font-medium head-color lg:text-8xl">
            {data.mainHeading[0]}
          </div>{" "}
          <div className="text-3xl lg:text-6xl">{data.mainHeading[1]}</div>
          <div className="m-4 lg:text-xl lg:w-1/2">{data.mainSubtext}</div>
          <TwitterTimeline />
        </div>
      </div>
    </>
  );
}
