"use client";
import { authClient } from "@/lib/auht-client";
import Link from "next/link";

const Userinfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const handelsignOut = async () => {
    await authClient.signOut();
  };
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
      {user ? (
       <Link href={'/profile'}>
        <div className="flex flex-col items-center gap-2">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
              <img
                alt="Tailwind-CSS-Avatar-component"
                src={user?.image as string}
              />
            </div>
          </div>

          <h2>{user.name}</h2>
          <button onClick={handelsignOut} className="btn btn-error btn-xs">
            Sign Out
          </button>
        </div>
       </Link>
      ) : (
        <div>
          <Link href={"/signin"}>
            {" "}
            <button className="btn btn-ghost text-neutral-700 hover:text-red-700">
              সাইন ইন
            </button>
          </Link>
          <Link href={"/signup"}>
            <button className="btn btn-error px-3 py-1.5 font-semibold text-white">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Userinfo;
