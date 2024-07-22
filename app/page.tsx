"use client";
import { useState, FormEvent } from 'react';
import data from "@/data/home";
import emailjs from "@emailjs/browser";
import TweetEmbed from 'react-tweet-embed';

emailjs.init({
  publicKey: "LE_dlNMNfOfdo80J3"
});

export default function Home() {
  const [formemail, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send("service_rucugra", "template_fdm69q8", {
      sender: formemail,
    }).then(
      (response) => {
        emailjs.send("service_rucugra", "template_88gujw2", {
          email: formemail,
          reply_to: "sayhi@shodh.ai",
        }).then(
          (response) => {
            setEmail('');
            setLoading(false);
            alert("Please check your inbox");
          },
          (error) => {
            setLoading(false);
            alert("Failed to send email. Please try again");
          }
        );
      },
      (error) => {
        setLoading(false);
        alert("Failed to send email. Please try again");
      }
    );
  };

  return (
    <>
      <div className="text-white home">
        <div className="h-full text-center flex flex-col items-center justify-start mt-16 w-screen gap-3 lg:gap-4">
          <div className="text-4xl font-medium head-color lg:text-8xl">
            {data.mainHeading[0]}
          </div>
          <div className="text-3xl lg:text-6xl">{data.mainHeading[1]}</div>
          <div className="m-4 lg:text-xl lg:w-2/3">{data.mainSubtext}</div>
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center items-center"
          >
            <div className='flex flex-col justify-start items-center lg:w-4/6 text-gray-200'>
              <div>Shodh AI is by invitation only</div>
              <div>Enter your email address for early access</div>
            </div>
            <div className="flex items-center w-3/5 lg:w-auto">
              <input
                type="email" 
                placeholder="Enter your email" 
                value={formemail}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded w-full text-black py-1 px-3 text-center text-field border border-white focus:outline-none focus:border-blue-500"
                required
              />
              {!loading && (
                <button 
                  type="submit" 
                  className="ml-2 px-2 head-color-bg text-white rounded focus:outline-none"
                >
                  ➔
                </button>
              )}
            </div>
          </form>
          {loading && <div className="mt-4 text-white">Loading...</div>}
          <TweetEmbed tweetId="1814971983307690127" options={{ theme: 'dark' }} className="w-4/5 lg:w-1/2 twitter-embed" />
        </div>
      </div>
    </>
  );
}
