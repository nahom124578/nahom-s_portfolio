import Head from "next/head";
import resume from "./resume";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillTelegram,
} from "react-icons/ai";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.jpg";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/system-accessed-by-doctors-fingerprint-260nw-2291512001.webp";
import web2 from "../public/eee.jpg";
import web3 from "../public/sddefault.jpg";
import web4 from "../public/2066861_96b5_7.jpg";
import web5 from "../public/ecom.webp";
import web6 from "../public/port.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Nahom Mitiku</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developed by NM</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <Link href="/resume">
                  <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8">
                    Resume
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Nahom Mitiku
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              computer and electrical engineer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              An Electrical and Computer Engineer with a deep passion for both hardware and software. I specialize in building full-stack web applications alongside embedded systems and CPU design. With a strong focus on creating scalable, efficient web solutions, I seamlessly integrate my skills across the entire development process—from front-end user interfaces to back-end architecture.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" alt="Developer Image" />
            </div>
          </div>
        </section>
        <section>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt="Design Icon" />
              <h3 className="text-lg font-medium pt-8 pb-2">Frontend</h3>
              <p className="py-2">Creating elegant web pages.</p>
              <h4 className="py-4 text-teal-600">Tools I Use</h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">React.js</p>
              <p className="text-gray-800 py-1">Vue.js</p>
              <p className="text-gray-800 py-1">Next.js</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="Code Icon" />
              <h3 className="text-lg font-medium pt-8 pb-2">Backend & Database</h3>
              <p className="py-2">Do you have an idea for your next great website? Let&apos;s make it a reality.</p>
              <h4 className="py-4 text-teal-600">Tools I Use</h4>
              <p className="text-gray-800 py-1">Node.js</p>
              <p className="text-gray-800 py-1">GoLang</p>
              <p className="text-gray-800 py-1">MongoDB</p>
              <p className="text-gray-800 py-1">PostgreSQL</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} alt="Consulting Icon" />
              <h3 className="text-lg font-medium pt-8 pb-2">Hardware & Electrical</h3>
              <p className="py-2">Are you interested in real hardware projects? I can give you tips and tricks to level it up.</p>
              <h4 className="py-4 text-teal-600">Tools I Use</h4>
              <p className="text-gray-800 py-1">Proteus</p>
              <p className="text-gray-800 py-1">Matlab</p>
              <p className="text-gray-800 py-1">Packet Tracer</p>
              <p className="text-gray-800 py-1"></p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a developer and in other hardware projects, I have done different projects. Here are some of them.
            </p>
            <p>
              <span className="text-teal-500">Here are some of them:</span>
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {/* Project 1 */}
            <div className="basis-1/3 flex-1">
              <Link href="https://github.com/nahom124578/mygit.git">
                <Image
                  className="rounded-lg object-cover"
                  layout="responsive"
                  src={web1}
                  alt="Project 1"
                />
              </Link>
            </div>

            {/* Project 2 */}
            <div className="basis-1/3 flex-1">
              <Link href="https://github.com/DB-SQL-PROJECT/DB-SQL.git">
                <Image
                  className="rounded-lg object-cover"
                  layout="responsive"
                  src={web2}
                  alt="Project 2"
                />
              </Link>
            </div>

            {/* Project 3 */}
            <div className="basis-1/3 flex-1">
              <Link href="https://github.com/nahom124578/packet-sniffing.git">
                <Image
                  className="rounded-lg object-cover"
                  layout="responsive"
                  src={web3}
                  alt="Project 3"
                />
              </Link>
            </div>

            {/* Project 4 */}
            <div className="basis-1/3 flex-1">
              <Link href="https://github.com/yourusername/project4">
                <Image
                  className="rounded-lg object-cover"
                  layout="responsive"
                  src={web4}
                  alt="Project 4"
                />
              </Link>
            </div>

            {/* Project 5 */}
            <div className="basis-1/3 flex-1">
              <Link href="https://github.com/ABHKNY-Summer-Projects/ECommerce_Website.git">
                <Image
                  className="rounded-lg object-cover"
                  layout="responsive"
                  src={web5}
                  alt="Project 5"
                />
              </Link>
            </div>

            {/* Project 6 */}
            <div className="basis-1/3 flex-1">
              <Link href="https://github.com/nahom124578/MyPortfolio.git">
                <Image
                  className="rounded-lg object-cover"
                  layout="responsive"
                  src={web6}
                  alt="Project 6"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
