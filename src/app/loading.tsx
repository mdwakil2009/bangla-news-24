
import React from "react";

const Loading = () => {
  return (
    <div className="-mx-3 flex min-h-screen flex-col items-center justify-center bg-base-200 px-6 sm:-mx-5 md:-mx-6">
   
      <span className="loading loading-spinner loading-lg text-primary"></span>

      <h2 className="mt-6 text-2xl font-bold text-base-content">
        Loading...
      </h2>

   
      <p className="mt-2 text-base-content/60 text-center">
        Please wait while we load the latest news for you.
      </p>

    </div>
  );
};

export default Loading;
