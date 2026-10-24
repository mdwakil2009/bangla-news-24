"use client";
import { authClient } from '@/lib/auht-client';
import SocialAuthButtons from '@/components/SocialAuthButtons';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import React from 'react';

const SignUpPage = () => {
     const Onsubmit =async(e:React.SubmitEvent<HTMLElement>) => {
          e.preventDefault()
          const fromdata = new FormData(e.target)
          const user = Object.fromEntries(fromdata.entries()) as {name:string , email:string , image:string , password:string}

          const {data,error} = await authClient.signUp.email({
               ...user,
               callbackURL:"/"
          })
          if(data){
           console.log(data)
           redirect("/")
          }
          if(error){
               console.log(error)
          }
             }
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
                                   <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                   <circle cx="9" cy="7" r="4" />
                                   <path d="M19 8v6M22 11h-6" />
                              </svg>
                         </span>
                         <h1 className=" mx-4 text-2xl font-bold tracking-tight text-neutral-800 sm:text-[1.7rem]">
                              সাইন আপ
                         </h1>
                         <p className="mt-1.5 text-sm text-neutral-500">
                              নতুন অ্যাকাউন্ট তৈরি করুন
                         </p>
                    </div>

                    {/* Social auth */}
                    <SocialAuthButtons action="সাইন আপ" />

                    {/* Form */}
                    <form onSubmit={Onsubmit} className="mt-4">
                         <fieldset className="flex flex-col gap-4">

                              <div className="flex flex-col gap-1.5">
                                   <label htmlFor="signup-name" className="label py-0">
                                        <span className="label-text font-medium text-neutral-700">নাম</span>
                                   </label>
                                   <input
                                        id="signup-name"
                                        name="name"
                                        type="text"
                                        required
                                        autoComplete="name"
                                        placeholder="আপনার নাম"
                                        className="input h-12 w-full rounded-xl border-neutral-200 bg-neutral-50 focus:border-red-300 focus:bg-white focus-visible:ring-2 focus-visible:ring-red-500/40"
                                   />
                              </div>

                              <div className="flex flex-col gap-1.5">
                                   <label htmlFor="signup-image" className="label py-0">
                                        <span className="label-text font-medium text-neutral-700">ছবি (ঐচ্ছিক)</span>
                                   </label>
                                   <input
                                        id="signup-image"
                                        name="image"
                                        type="url"
                                        autoComplete="url"
                                        placeholder="https://example.com/photo.jpg"
                                        className="input h-12 w-full rounded-xl border-neutral-200 bg-neutral-50 focus:border-red-300 focus:bg-white focus-visible:ring-2 focus-visible:ring-red-500/40"
                                   />
                              </div>

                              <div className="flex flex-col gap-1.5">
                                   <label htmlFor="signup-email" className="label py-0">
                                        <span className="label-text font-medium text-neutral-700">ইমেইল</span>
                                   </label>
                                   <input
                                        id="signup-email"
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        placeholder="you@example.com"
                                        className="input h-12 w-full rounded-xl border-neutral-200 bg-neutral-50 focus:border-red-300 focus:bg-white focus-visible:ring-2 focus-visible:ring-red-500/40"
                                   />
                              </div>

                              <div className="flex flex-col gap-1.5">
                                   <label htmlFor="signup-password" className="label py-0">
                                        <span className="label-text font-medium text-neutral-700">পাসওয়ার্ড</span>
                                   </label>
                                   <input
                                        id="signup-password"
                                        name="password"
                                        type="password"
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
                                   সাইন আপ করুন
                              </button>
                         </fieldset>
                    </form>
               </div>

               {/* Footer link */}
               <p className="mt-6 text-center text-sm text-neutral-500">
                    ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
                    <Link
                         href="/signin"
                         className="font-semibold text-red-600 underline-offset-4 transition-colors hover:text-red-700 hover:underline focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    >
                         সাইন ইন করুন
                    </Link>
               </p>
          </div>
     </div>
     );
};

export default SignUpPage;
