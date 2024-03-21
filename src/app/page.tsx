import MainMenu from "@/components/main-menu";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import divider from "@/assets/divider.svg";

export default function Home() {
  return (
    <div className="bg-[#1B1919] ">
      <header className="flex justify-between items-center px-5 py-8 lg:container">
        <h2 className="font-Montserrat text-[24px] md:text-[32px] text-white font-extrabold leading-normal ">
          Crework
          <span className="text-[30px] md:text-[40px] text-[#FAAF3D]">.</span>
        </h2>

        <MainMenu />
      </header>
      <div className="px-5 lg:container lg:px-24">
        <section className="space-y-3">
          <h1 className="bg-gradient-to-b from-white from-[-39.23%] to-[#FAAF3d] to-[129.67%] bg-clip-text text-transparent inline-block font-redhat font-bold text-3xl leading-9 md:text-[36px] md:leading-[133.523%]">
            Product Management Interview Questions
          </h1>
          <p className="text-white font-normal leading-5 text-sm md:text-base tagline">
            Browse 1000+ questions from top tech companies
          </p>
        </section>
      </div>
      <footer className="py-8 px-14 flex flex-col items-center gap-6 md:grid md:grid-cols-3 md:gap-y-10">
        <h2 className="font-Montserrat text-[18px] md:text-[32px] text-white font-extrabold leading-normal text-center">
          Crework
          <span className="text-[17.313px] text-[#FAAF3D] md:text-[40px]">
            .
          </span>
        </h2>
        <div className="grid grid-cols-2 grid-rows-2 gap-y-4 gap-x-16">
          <Link
            className="text-[#C6C5C5] text-sm leading-6 whitespace-nowrap"
            href={"#"}
          >
            About Us
          </Link>
          <Link
            className="text-[#C6C5C5] text-sm leading-6 whitespace-nowrap"
            href={"#"}
          >
            Our Graduates
          </Link>
          <Link
            className="text-[#C6C5C5] text-sm leading-6 whitespace-nowrap"
            href={"#"}
          >
            Curriculum
          </Link>
          <Link
            className="text-[#C6C5C5] text-sm leading-6 whitespace-nowrap"
            href={"#"}
          >
            Refund Policy
          </Link>
        </div>
        <div className="flex justify-center gap-4">
          <Link href={"#"}>
            <span className="sr-only">Dribble Link</span>
            <Image
              src={"/dribbble.svg"}
              height={20}
              width={20}
              alt="dribbble logo"
            />
          </Link>
          <Link href={"#"}>
            <span className="sr-only">Behance Link</span>
            <Image
              src={"/behance.svg"}
              height={20}
              width={20}
              alt="behance logo"
            />
          </Link>
          <Link href={"#"}>
            <span className="sr-only">Linkedin Link</span>
            <Image
              src={"/linkedin.svg"}
              height={20}
              width={20}
              alt="linkedin logo"
            />
          </Link>
          <Link href={"#"}>
            <span className="sr-only">Facebook Link</span>
            <Image
              src={"/facebook.svg"}
              height={20}
              width={20}
              alt="facebook logo"
            />
          </Link>
        </div>
        <Image
          src={divider}
          className="md:col-span-3 md:place-self-center"
          alt="divider"
        />
        <p className="font-inter text-[#ADADAD] text-base font-medium leading-6 md:text-center md:col-span-3">
          Copyright &#169; {new Date().getFullYear()} Crework
        </p>
      </footer>
    </div>
  );
}
