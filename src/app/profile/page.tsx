"use client";
import { authClient } from "@/lib/auht-client";
import React, { useState } from "react";

const ProfilePage = () => {
const [show,setShow] = useState(false)
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handelUpdateUser = async (e:React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const fromdata = new FormData(e.target);
    const user = Object.fromEntries(fromdata.entries()) as {
      name: string;
      image: string;
    };
    await authClient.updateUser({
     ...user
    })

  };

  const handelShowFrom = ()=>{
     setShow(!show)
  }

  return (
    <div>
      <div className="flex flex-col items-center gap-2 mt-7">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
            <img
              alt="Tailwind-CSS-Avatar-component"
              src={user?.image as string}
            />
          </div>
        </div>

        <h2>{user?.name}</h2>
        <p>{user?.email}</p>

        <button onClick={handelShowFrom} className="btn mb-3">Edit Profile</button>
        { show && <form onSubmit={handelUpdateUser} className="w-full max-w-md">
          <fieldset className="fieldset rounded-box w-full">
            <label className="label">নাম</label>
            <input
              name="name"
              type="text"
              className="input w-full"
              placeholder="name"
            />

            <label className="label">Image</label>
            <input
              name="image"
              type="url"
              className="input w-full"
              placeholder="image"
            />

            <button type="submit" className="btn bg-red-500 text-white  ">
              Update Profile
            </button>
          </fieldset>
        </form>}
      </div>
    </div>
  );
};

export default ProfilePage;
