"use client";
import { useState, FormEvent } from 'react';
import data from "@/data/home";
// import TwitterTimeline from "@/app/twitter";
import TweetEmbed from 'react-tweet-embed';

export default function Home() {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:sayhi@shodh.ai?subject=New Waitlist Signup&body=New waitlist signup with email: ${email}`;
    window.location.href = mailtoLink;
    setEmail('');
  };

  return (
    <>
      <div className="text-white home">
        <div className="h-full text-center flex flex-col items-center justify-start mt-16 w-screen gap-3 lg:gap-4">
          <div className="text-4xl font-medium head-color lg:text-8xl">
            {data.mainHeading[0]}
          </div>{" "}
          <div className="text-3xl lg:text-6xl">{data.mainHeading[1]}</div>
          <div className="m-4 lg:text-xl lg:w-1/2">{data.mainSubtext}</div>
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center items-center"
          >
            <div>Join the waitlist</div>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded w-3/5 text-black py-1 px-3 text-center text-feild border border-white focus:outline-none focus:border-blue-500"
              required
            />
          </form>
          <TweetEmbed tweetId="1811448269140017540" options={{ theme: 'dark' }} className="w-4/5 lg:w-1/2 twitter-embed" />
        </div>
      </div>
    </>
  );
}
