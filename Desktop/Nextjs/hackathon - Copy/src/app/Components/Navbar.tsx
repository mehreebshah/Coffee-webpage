"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/public/Logo.png";
import { GoSearch } from "react-icons/go";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoIosHeart } from "react-icons/io";
import { VscBellDot } from "react-icons/vsc";
import { IoMdSettings } from "react-icons/io";
import profile from "@/public/Image.png";
import { Sheet, SheetContent, SheetTrigger } from "@/ui/sheet";
import Link from "next/link";
const Navbar = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <nav className="flex flex-wrap justify-between items-center border-b shadow-xl border-stone-200 h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* Logo */}
      <div>
        <Link href="/">
          <Image src={logo} alt="Logo" width={100} height={100} />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="w-full md:w-auto mt-4 md:mt-0">
        <form
          className="flex items-center justify-between border border-gray-200 p-2 rounded-lg w-full md:w-[300px] lg:w-[400px] xl:w-[500px]"
          onSubmit={handleSearch}
        >
          <GoSearch className="text-xl text-gray-600 cursor-pointer" />
          <input
            type="text"
            name="name"
            placeholder="Search something here"
            className="bg-transparent outline-none flex-grow px-2 text-sm sm:text-base"
          />
          <HiOutlineAdjustmentsHorizontal className="text-xl text-gray-600 cursor-pointer mx-2" />
        </form>
      </div>

      {/* Desktop Icons */}
      <div className="hidden sm:flex gap-4 text-gray-700 items-center cursor-pointer text-xl">
        <IoIosHeart />
        <VscBellDot />
        <Link href="/Dashboard">
          <IoMdSettings />
        </Link>
        <Image
          src={profile}
          alt="profile"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>

      {/* Mobile Sheet for Icons */}
      <Sheet>
        <SheetTrigger className="sm:hidden text-2xl">
          <Image
            src={profile}
            alt="profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        </SheetTrigger>
        <SheetContent className="h-40 w-[80%] flex flex-col items-center justify-around rounded-md text-gray-700 text-xl">
          <IoIosHeart />
          <VscBellDot />
          <IoMdSettings />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
