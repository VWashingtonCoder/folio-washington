"use client";
import Image from "next/image";

type NavbarProps = {
  open: boolean;
  openNav: () => void;
};

export default function Navbar({ open, openNav }: NavbarProps) {
  return (
    <nav
      className="
                flex  
                my-5 
                py-3
                border-2
                rounded-md
                absolute
                w-screen
            "
    >
      <section
        id="profile"
        className="
                    flex 
                    flex-col 
                    items-center
                    w-8/12
                    py-5

                "
      >
        <h1
          id="profileName"
          className="
                        text-2xl
                        italic
                        font-bold
                    "
        >
          Vincent Washington
        </h1>
        <div id="profileImg" className="">
          <Image src={""} alt="ProfilePic" />
        </div>
      </section>

      <section id="navLinks" className="w-4/12 ">
        {open ? (
          <ul className="text-center">
            <li className="summary">About Me</li>
            <li>Skills</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Education</li>
            <button onClick={openNav} className="text-red-500">
              Close
            </button>
          </ul>
        ) : (
          <button className="my-12" onClick={openNav}>
            Open Menu
          </button>
        )}
      </section>
    </nav>
  );
}
