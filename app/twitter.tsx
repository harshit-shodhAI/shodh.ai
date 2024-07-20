import React, { useEffect } from "react";
import Link from "next/link";

const TwitterTimeline = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="h-1/3 w-4/5">
      <Link
        className="twitter-timeline"
        href="https://twitter.com/shodh_ai"
        data-theme="dark"
      ></Link>
    </div>
  );
};

export default TwitterTimeline;
