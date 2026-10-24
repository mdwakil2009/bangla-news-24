
import Image from "next/image";
import Navlinks from "@/components/Navlinks";
import Userinfo from "./Userinfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="relative w-full px-3 py-4 sm:px-5 md:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4">

        {/* Logo and Website Name */}
        <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
          <Image
            className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
            height={48}
            width={48}
            src="/logo.webp"
            alt="Bangla News 24 logo"
            priority
          />

          <div className="flex min-w-0 flex-col items-center sm:items-start">
            <h2 className="text-center text-xl font-bold text-red-600 sm:text-2xl md:text-3xl">
              Bangla News 24
            </h2>

            <p className="text-center text-xs text-neutral-500 sm:text-left sm:text-sm">
              {date}
            </p>
          </div>
        </div>

        {/* User Information */}
        <div className="flex w-full justify-center sm:justify-end">
          <Userinfo />
        </div>

        {/* Navigation Links */}
        <div className="w-full min-w-0">
          <Navlinks />
        </div>

      </div>
    </header>
  );
};

export default Header;
