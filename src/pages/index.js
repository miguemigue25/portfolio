import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import profilePic from "../../public/images/profile/profile-5.png";
import TransitionEffect from "@/components/TransitionEffect";


export default function Home() {
  
  return (
    <>
      <Head>
        <title>Miguel Ortiz's Portfolio</title>
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start mt-14`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full">
              <Image
                src={profilePic}
                alt="ProfilePic"
                className="h-auto w-full"
                sizes="80vw"
                priority
                style={{ border: '25px solid black' }}
              />
            </div>
            <div className="flex w-1/2 flex-col items-center justify-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Miguel Ortiz"
                className="!text-center !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <AnimatedText
                text="Full Stack Developer"
                className="!text-center text-base lg:text-xl"/>
              <p className="!text-center my-4 text-base font-medium md:text-sm sm:!text-xs">
              As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects, showcasing my experience in React.js and web development.
              </p>
              <div className="mt-2 flex items-center self-center justify-center lg:self-center">
                <Link
                  whileHover={{
                    cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='font-size:24px;'><text y='50%'>👆</text></svg>"), auto`,
                  }}
                  href="/Miguel Ortiz Resume.pdf"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2 px-4 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-1 md:px-3 md:text-base
             `}
                  download
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="mailto:miguelortiz.dev@gmail.com"
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2 px-4 text-lg font-semibold
                  capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                  dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                  md:p-1 md:px-3 md:text-base
                   `}
                >
                  Contact
                </Link>
                <Link
                  href="https://github.com/miguemigue25"
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2 px-4 text-lg font-semibold
                  capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                  dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                  md:p-1 md:px-3 md:text-base`}
                  download
                >
                  GitHub
                </Link>
                <Link
                  href="https://gitlab.com/miguemigue"
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2 px-4 text-lg font-semibold
                  capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                  dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                  md:p-1 md:px-3 md:text-base`}
                  download
                >
                  GitLab
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        {/* <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            className="relative h-auto w-full"
            src={lightBulb}
            alt="Codebucks"
          />
        </div> */}
      </article>
    </>
  );
}
