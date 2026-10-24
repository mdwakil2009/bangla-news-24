
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="-mx-3 flex min-h-screen items-center justify-center bg-base-200 px-6 sm:-mx-5 md:-mx-6">
      <div className="text-center max-w-lg">
  
        <h1 className="text-6xl font-extrabold text-primary tracking-tight sm:text-7xl md:text-9xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold text-base-content sm:text-3xl md:text-4xl">
          Page Not Found
        </h2>

  
        <p className="mt-4 text-base md:text-lg text-base-content/60">
          Sorry, the page you are looking for doesn&apos;t exist or may have
          been moved.
        </p>

    
        <Link
          href="/"
          className="btn btn-primary mt-8 px-8"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

