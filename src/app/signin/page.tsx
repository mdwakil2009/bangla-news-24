"use client";

import { signIn } from "@/lib/auht-client";
import SocialAuthButtons from "@/components/SocialAuthButtons";
import Link from "next/link";
import React from "react";

import toast from "react-hot-toast";

const SignInPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const fromdata = new FormData(e.target);
    const user = Object.fromEntries(fromdata.entries()) as {
      email: string;
      password: string;
    };
    const { data, error } = await signIn.email({
      ...user,
      callbackURL: "/",
    });
    if (data) {
      toast.success("Sign In successfully");
      console.log(data);
    }
    if (error) {
      toast.error("something went error");
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-[70vh] w-full items-center justify-center py-10 sm:py-14">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="rounded-3xl border border-neutral-200/70 bg-base-100 p-6 shadow-xl shadow-neutral-200/50 sm:p-8">
          {/* Header */}
          <div className="mb-7 text-center">
            <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 ring-1 ring-red-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-7 w-7"
              >
                <rect x="3" y="11" width="18" height="10" rx="2.5" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>
            <h1 className=" mx-4 text-2xl font-bold tracking-tight text-neutral-800 sm:text-[1.7rem]">
              সাইন ইন
            </h1>
            <p className="mt-1.5 text-sm text-neutral-500">
              Bangla News 24-এ ফিরে আসুন
            </p>
          </div>

          {/* Social auth */}
          <SocialAuthButtons action="সাইন ইন" />

          {/* Form */}
          <form onSubmit={onSubmit} autoComplete="off" className="mt-4">
            <fieldset className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="signin-email" className="label py-0">
                  <span className="label-text font-medium text-neutral-700">
                    ইমেইল
                  </span>
                </label>
                <input
                  id="signin-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="input h-12 w-full rounded-xl border-neutral-200 bg-neutral-50 focus:border-red-300 focus:bg-white focus-visible:ring-2 focus-visible:ring-red-500/40"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="signin-password" className="label py-0">
                  <span className="label-text font-medium text-neutral-700">
                    পাসওয়ার্ড
                  </span>
                </label>
                <input
                  id="signin-password"
                  type="password"
                  name="password"
                  required
                  autoComplete="new-password"
                  placeholder="Password"
                  className="input h-12 w-full rounded-xl border-neutral-200 bg-neutral-50 focus:border-red-300 focus:bg-white focus-visible:ring-2 focus-visible:ring-red-500/40"
                />
              </div>

              <button
                type="submit"
                className="btn btn-error mt-1 h-12 w-full rounded-xl border-none text-base font-semibold text-white shadow-lg shadow-red-500/20 transition-all hover:brightness-110 hover:shadow-red-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 active:scale-[0.99]"
              >
                সাইন ইন করুন
              </button>
            </fieldset>
          </form>
        </div>

        {/* Footer link */}
        <p className="mt-6 text-center text-sm text-neutral-500">
          অ্যাকাউন্ট নেই?{" "}
          <Link
            href="/signup"
            className="font-semibold text-red-600 underline-offset-4 transition-colors hover:text-red-700 hover:underline focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          >
            সাইন আপ করুন
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
