import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj1 from "../../public/images/projects/voy-amie.png";
import proj2 from "../../public/images/projects/codewithme.jpg";
import proj3 from "../../public/images/projects/carcar.png";
import proj4 from "../../public/images/projects/crypto-tracker.png";
import proj5 from "../../public/images/projects/quiz-1.png";
import proj6 from "../../public/images/projects/chess-1.png";
import proj7 from "../../public/images/projects/food-ordering.png";
import TransitionEffect from "@/components/TransitionEffect";
import projUpcoming1 from "../../public/images/projects/e-commerce.png";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {

  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="Crypto Screener Application github link"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
            aria-label="Crypto Screener Application"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, summary, img, link, github }) => {

  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="rounded text-lg
            font-medium underline md:text-base
            "
            aria-label={title}
          >

          </Link>
          <Link
            href={github}
            target={"_blank"}
            className="w-8 md:w-6"
            aria-label={title}
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const UpcomingProject = ({ type, title, summary, img }) => {
  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
        dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
       xs:rounded-[1.5rem]  "
      />

      <div className="w-full cursor-pointer overflow-hidden rounded-lg">
        <FramerImage
          src={img}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
          {title}
        </h2>
        <p className="my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        {/* You can leave this section empty or customize it further */}
        <div className="flex w-full items-center justify-between">
          {/* Add any additional content or components here */}
        </div>
      </div>
    </article>
  );
};



export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects Page</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by CodeBucks, a Next.js developer with 
        expertise in React.js and full-stack development. Browse software engineering articles and tutorials for tips on creating your own portfolio."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16 mt-8 flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Projects!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              {/* <FeaturedProject
                type="Featured Project (class project)"
                title="Voy-Amie"
                summary="An interactive web app where all the trip planning becomes fun! Invite friends to your trip or be invited to one of their trips, trip partcipipants can vote on activities and leave comments. Instead of having to do all of that in so many apps, you can do it just in Voy-Amie and have fun while doing it!"
                img={proj1}
                link="https://vacationeers.gitlab.io/voy-amie/"
                github="https://gitlab.com/vacationeers/voy-amie"
              /> */}
              <FeaturedProject
                type="Featured Project (Personal project)"
                title="Twin's Pizza"
                // summary="MERN fullstack Pizza ordering app using Mongo database, Express, React, Next.js, Tailwind CSS, and Stripe for payment processes."
                summary={
                  <ul className="list-inside">
                    <li>
                      A fun and easy to use food ordering app. Whether on the computer or phone, ordering food has never been easier. <br />
                    </li>
                    <li>
                    </li>
                    <li>
                      Skills: Next.js, React, Tailwind CSS, Mongo Database, OAuth, AWS S3,and Stripe for payment processes.
                    </li>
                  </ul>

                }
                img={proj7}
                link="https://food-ordering-app-umber-three.vercel.app/"
                github="https://github.com/miguemigue25/food-ordering-app"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project (personal project)"
                title="Chess Game"
                summary={
                  <ul className="list-inside">
                    <li>
                      A fun game of chess utilizing new skill of mine, TypeScript! Who will be the one that wins? Practice as many times you want. If it's your turn, and the king is safe, it will display what are your potential moves based on the piece you pick up.
                    </li>
                    <li>
                      Skills: React, TypeScript, CSS, and HTML.
                    </li>
                  </ul>

                }
                img={proj6}
                link="https://chess-game-five-sigma.vercel.app/"
                github="https://github.com/miguemigue25/chess-game"
              />
              <Project
                type="Project (personal project)"
                title="Voy-Amie"
                summary={
                  <ul className="list-inside">
                    <li>
                      An interactive web app where all the trip planning becomes fun! Invite friends to your trip or be invited to one of their trips, trip partcipipants can vote on activities and leave comments. Instead of having to do all of that in so many apps, you can do it just in Voy-Amie and have fun while doing it
                    </li>
                    <li>
                      Skills: React, CSS, and HTML.
                    </li>
                  </ul>

                }
                img={proj1}
                link="https://vacationeers.gitlab.io/voy-amie/"
                github="https://gitlab.com/vacationeers/voy-amie"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project (class project)"
                title="Code With Me"
                summary={
                  <ul className="list-inside">
                    <li>
                      An interactive app where a coder can practice their coding by answering questions. It also allows the coder to share gitlab/github information with other coders and if they're open for work. An employer can create an account and search coders open to work and that meet professional requirements.
                    </li>
                    <li>
                      Skills: React, CSS, Python, Authentication, BootStrap, Docker, Rest API
                    </li>
                  </ul>

                }
                img={proj2}
                link="https://gitlab.com/mintyzebras/code-with-me"
                github="https://gitlab.com/mintyzebras/code-with-me"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project (class project)"
                title="CarCar"
                summary={
                  <ul className="list-inside">
                    <li>
                      Full Stack Application for managing a car dealership.
                    </li>
                    <li>
                      Skills: React, Django, BootStrap, Docker, Rest API
                    </li>
                  </ul>

                }
                img={proj3}
                link="https://gitlab.com/miguemigue/carcar"
                github="https://gitlab.com/miguemigue/carcar"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project (personal project)"
                title="MyCryptoTracker"
                summary={
                  <ul className="list-inside">
                    <li>
                      Crypto Tracker application using React and Tailwind CSS. Crypto API is utilized to use real time data.
                    </li>
                    <li>
                      Skills: React Router, React Context API, Tailwind CSS, Crypto API, and Recharts to add Interactive charts.
                    </li>
                  </ul>

                }
                img={proj4}
                link="https://crypto-2-nine.vercel.app"
                github="https://github.com/miguemigue25/Crypto-2"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project (personal project)"
                title="Programming Quiz App"
                summary={
                  <ul className="list-inside">
                    <li>
                      A quiz app with programming questions about Django, Python and JavaScript. Questions are randomnized, color coded for right (green) and wrong (red) answers with a final score at the end of the quiz.
                    </li>
                    <li>
                      Skills: React, Vite, CSS, and HTML.
                    </li>
                  </ul>

                }
                img={proj5}
                link="https://quiz-app-eight-psi.vercel.app/"
                github="https://github.com/miguemigue25/Quiz-app"
              />
            </div>

          </div>
        </Layout>
        <Layout className="pt-16">
          <AnimatedText
            text="Upcoming Projects!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-6 sm:col-span-12">
              <UpcomingProject
                type="Upcoming Project (personal project)"
                title="E-commerce"
                summary={
                  <ul className="list-inside">
                    <li>
                      E-commerce app...
                    </li>
                    <li>
                      Skills: ...
                    </li>
                  </ul>
                }
                img={projUpcoming1}
              />
            </div>
            {/* <div className="col-span-6 sm:col-span-12">
              <UpcomingProject
                type="Upcoming Project"
                title="Chess Game"
                summary={
                  <ul className="list-inside">
                    <li>
                    A fun game of chess!!
                    </li>
                    <li>
                    Skills: ...
                    </li>
                  </ul>
                }
                img={projUpcoming1}    
              />
            </div> */}
          </div>

        </Layout>
      </main>
    </>
  );
}
