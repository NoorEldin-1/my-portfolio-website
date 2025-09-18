import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import React, { useState, useMemo, useCallback } from "react";
import react from "./assets/react.png";
import axios from "./assets/axios.png";
import FastAPI from "./assets/FastAPI.png";
import laravel from "./assets/laravel.png";
import MaterialUI from "./assets/Material UI.png";
import motion from "./assets/motion.png";
import mysql from "./assets/mysql.png";
import php from "./assets/php.png";
import python from "./assets/python.png";
import tailwind from "./assets/Tailwind CSS.png";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const projectsData = [
  {
    name: "TASK",
    description: `TASK is a full-featured web application for daily task management. It allows users to organize their lives more efficiently by creating Collections that group all their Tasks. The app provides a fast and intuitive interface that enables you to:

Create new Collections and add multiple Tasks inside each.
Edit the name of a Collection or delete it entirely along with all its Tasks.
Add, edit, or delete any Task individually.
Download all Tasks in a Collection as a file, or download a single Task.
Instantly sign in with your Google account with a single click, no complex registration steps required.`,
    sourceCode: `https://github.com/NoorEldin-1/TASK`,
    youtubeVideo: "https://www.youtube.com/watch?v=URlCIqp_A3o&t=114s",
    technologies: [
      "React",
      "Laravel",
      "Material UI",
      "MySQL",
      "axios",
      "redux",
    ],
    image: `https://img.youtube.com/vi/URlCIqp_A3o/hqdefault.jpg`,
  },
  {
    name: "SOCIALIZE",
    description: `"SOCIALIZE" is a social media platform that allows users to share photos, interact with content, and follow each other. The project aims to provide a seamless and enjoyable user experience through a simple and functional interface.

✨ Key Features
User Profile: 👤
Each user has a dedicated profile page showcasing all their posts.
Users can edit their profile, including changing their profile picture, cover photo, and name.
Privacy settings allow users to hide their liked posts, shares, and lists of followers/following.
Posts and Interactions: 🖼️
Users can publish photos with a title or any text content.
Interact with posts through Likes, Shares, and Comments.
Users can delete their own posts.
Following System: 🤝
Users can follow other users.
Followers and Following lists are displayed on the profile page.
Content Discovery: 🔍
"For You": A section that displays the latest posts from all users on the platform.
"Following": A section that shows posts only from the users you follow.
Account Management: 🔒
Easy login/signUp functionality.
Easy logout functionality.
Option to permanently delete the account.
Multi-Language and Theme Support: 🌐
The application supports Arabic and English, based on the user's browser settings.
Users can switch between two themes: Dark and Light mode.`,
    sourceCode: "https://github.com/NoorEldin-1/SOCIALIZE",
    youtubeVideo: "https://www.youtube.com/watch?v=uW6ezChzl7Q&t=518s",
    technologies: [
      "React",
      "Laravel",
      "Material UI",
      "MySQL",
      "axios",
      "redux",
    ],
    image: `https://img.youtube.com/vi/uW6ezChzl7Q/hqdefault.jpg`,
  },
  {
    name: "BUYIT",
    description: `BUYIT is a simple yet powerful e-commerce project designed to make buying products as seamless as possible.
It leverages WhatsApp as the purchase channel, ensuring users can directly communicate with the website owner.

The project consists of two main parts:

Admin Control Panel

Manage products, sections, and users.
Add, edit, or delete product information.
Monitor all activity from a single dashboard.
User Website

Simple and intuitive interface.
Register instantly with your Google account (one-click login).
Browse products by sections.
Add products to favorites for later.
Add items to your shopping cart and proceed to purchase.
Purchases are finalized via WhatsApp, where a pre-filled message includes selected product details.`,
    sourceCode: "https://github.com/NoorEldin-1/BUYIT",
    youtubeVideo: "https://www.youtube.com/watch?v=e2hyWH_2Qhs&t=74s",
    technologies: [
      "React",
      "Laravel",
      "Material UI",
      "MySQL",
      "axios",
      "redux",
      "swiper",
    ],
    image: `https://img.youtube.com/vi/e2hyWH_2Qhs/hqdefault.jpg`,
  },
  {
    name: "YANKTUBE",
    description: `YANKTUBE is a powerful and simple YouTube video downloader built for seamless use.
It allows downloading single videos or entire playlists in multiple formats and qualities.

The project supports:

Single Video Downloads: Choose between MP4 (video) and MP3 (audio) with resolutions from 144p to 1080p.
Playlist Downloads: Grab entire YouTube playlists in MP4 or MP3, with the same quality range.`,
    sourceCode: "https://github.com/NoorEldin-1/YANKTUBE",
    youtubeVideo: "https://www.youtube.com/watch?v=B-g4ZWdilYU",
    technologies: [
      "React",
      "Python",
      "FastAPI",
      "mantine UI",
      "axios",
      "redux",
    ],
    image: `https://img.youtube.com/vi/B-g4ZWdilYU/hqdefault.jpg`,
  },
];

const imagesData = [
  react,
  axios,
  FastAPI,
  laravel,
  MaterialUI,
  motion,
  mysql,
  php,
  python,
  tailwind,
];

const App = React.memo(() => {
  const [openInfoDialog, setOpenInfoDialog] = useState(false);
  const handleOpenInfoDialog = useCallback(() => setOpenInfoDialog(true), []);
  const handleCloseInfoDialog = useCallback(() => setOpenInfoDialog(false), []);

  const [openProjectDialog, setOpenProjectDialog] = useState(false);
  const [projectInfo, setProjectInfo] = useState({
    name: "",
    description: "",
    sourceCode: "",
    youtubeVideo: "",
    technologies: [],
    image: "",
  });

  const handleOpenProjectDialog = useCallback((project) => {
    setProjectInfo((prev) => ({ ...prev, ...project }));
    setOpenProjectDialog(true);
  }, []);

  const handleCloseProjectDialog = useCallback(
    () => setOpenProjectDialog(false),
    []
  );

  const projects = useMemo(() => {
    return projectsData.map((project, i) => (
      <SwiperSlide
        key={i}
        style={{
          width: "280px",
          height: "280px",
          userSelect: "none",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderRadius: "20px",
          overflow: "hidden",
          position: "relative",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <img
          src={project.image}
          loading="lazy"
          className="w-full h-full object-cover brightness-80"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5">
          <button
            className="font-Hanalei rounded-xl cursor-pointer w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold tracking-[1px] normal-case py-1 shadow-[0_4px_20px_rgba(99,102,241,0.3)] hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-500 hover:shadow-[0_6px_24px_rgba(99,102,241,0.4)] hover:scale-102"
            onClick={() => {
              handleOpenProjectDialog(project);
            }}
          >
            View Details
          </button>
        </div>
      </SwiperSlide>
    ));
  }, [handleOpenProjectDialog]);

  const images = useMemo(() => {
    return imagesData.map((img, i) => (
      <img key={i} src={img} alt="" style={{ width: "40px", height: "40px" }} />
    ));
  }, []);

  return (
    <div className="aurora-background">
      <AnimatedBackground />

      <MainContent handleOpenInfoDialog={handleOpenInfoDialog} />

      <SwiperProjects projects={projects} />

      <MarqueeAnimation images={images} />

      <Footer />

      {openInfoDialog && (
        <InfoDialog
          openInfoDialog={openInfoDialog}
          handleCloseInfoDialog={handleCloseInfoDialog}
        />
      )}

      {openProjectDialog && (
        <ProjectDialog
          openProjectDialog={openProjectDialog}
          handleCloseProjectDialog={handleCloseProjectDialog}
          projectInfo={projectInfo}
        />
      )}
    </div>
  );
});

const AnimatedBackground = React.memo(() => {
  return (
    <div className="aurora-container">
      <div className="aurora-blob"></div>
    </div>
  );
});

const MainContent = React.memo(({ handleOpenInfoDialog }) => {
  return (
    <div className="content-container font-Hanalei">
      <div className="text-4xl text-center reveal-colored-text">
        Noor El-Din
      </div>

      <div className="text-xl text-center reveal-subtext-colored">
        Full-Stack Developer
      </div>

      <div className="tooltip-wrapper">
        <div
          className="text-2xl text-center reveal-subtext-colored flex items-center justify-center gap-2 cursor-pointer relative"
          onClick={handleOpenInfoDialog}
        >
          how can i help you
          <MdOutlineKeyboardArrowDown className="text-4xl" />
        </div>

        <div className="always-tooltip">Click Here Please</div>
      </div>
    </div>
  );
});

const InfoDialog = React.memo(({ handleCloseInfoDialog }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 bg-opacity-50"
      onClick={handleCloseInfoDialog}
    >
      <div
        className="rounded-3xl bg-white/5 border border-white/10 shadow-2xl max-w-[800px] w-[90%] max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-center font-bold text-[1.8rem] bg-gradient-to-r from-indigo-400 via-purple-600 to-indigo-500 bg-clip-text text-transparent mb-4 pt-6">
          How can I help you?
        </h2>

        <div className="dialog-scrollable text-white/90 text-base max-h-[60vh] overflow-y-auto border-y border-white/10 px-6 py-4">
          <h6 className="mb-2 text-indigo-400 font-semibold">About Me</h6>
          <p className="mb-6 tracking-[0.5px] leading-relaxed">
            I'm a Full-Stack Developer from Cairo, Egypt, passionate about
            building scalable, modern, and user-friendly software solutions. I
            love turning ideas into real applications and constantly exploring
            new technologies to improve my craft.
          </p>
          <h6 className="mb-2 text-purple-600 font-semibold">
            Technology Stack
          </h6>
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "React",
              "Python & FastAPI",
              "PHP & Laravel",
              "MySQL",
              "Material UI",
              "Tailwind CSS",
              "Framer Motion",
            ].map((tech, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-sm select-none"
              >
                {tech}
              </div>
            ))}
          </div>

          <h6 className="mb-2 text-indigo-500 font-semibold">
            How I Can Help Developers
          </h6>
          <ul className="ml-[1.2rem] mb-6 leading-[1.8] list-disc list-inside">
            <li>Collaborate on projects as a freelancer</li>
            <li>Provide guidance on specific technologies or challenges</li>
            <li>Share best practices for clean maintainable code</li>
          </ul>

          <h6 className="mb-2 text-violet-400 font-semibold">
            How I Can Help Clients
          </h6>
          <ul className="ml-[1.2rem] leading-[1.8] list-disc list-inside">
            <li>Transform your ideas into fully functional software</li>
            <li>Build and manage your website or web application</li>
            <li>Redesign and modernize existing websites</li>
            <li>Fix incomplete or underperforming projects</li>
          </ul>
        </div>

        <div className="flex justify-center mt-4 pb-6">
          <button
            onClick={handleCloseInfoDialog}
            className="cursor-pointer bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-8 py-2 rounded-[14px] font-semibold tracking-[1px] normal-case shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-600 hover:to-indigo-500 hover:scale-[1.03] hover:shadow-xl hover:shadow-indigo-500/40"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
});

const ProjectDialog = React.memo(
  ({ handleCloseProjectDialog, projectInfo }) => {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 bg-opacity-50"
        onClick={handleCloseProjectDialog}
      >
        <div
          className="rounded-3xl bg-white/5  border border-white/10 shadow-2xl max-w-[900px] w-[95%] max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-center font-bold text-[1.8rem] bg-gradient-to-r from-indigo-400 via-purple-600 to-indigo-500 bg-clip-text text-transparent mb-4 pt-6">
            Project Details
          </h2>

          <div className="dialog-scrollable text-white/90 text-base max-h-[70vh] overflow-y-auto px-6">
            <div className="text-center mb-6">
              <img
                src={projectInfo.image}
                alt={projectInfo.name}
                loading="lazy"
                className="w-full max-h-[300px] object-cover rounded-xl shadow-lg"
              />
            </div>

            <h6 className="mb-2 text-indigo-400 font-semibold">
              {projectInfo.name}
            </h6>

            <div className="flex gap-4 mb-6 flex-wrap">
              <a
                href={projectInfo.youtubeVideo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold normal-case shadow-lg shadow-indigo-500/30 transition-transform duration-300 hover:scale-[1.03] hover:bg-gradient-to-br hover:from-purple-600 hover:to-indigo-500"
              >
                Watch Video
              </a>
              <a
                href={projectInfo.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 border border-indigo-400 px-6 py-2 rounded-xl font-semibold normal-case transition-colors duration-300 hover:bg-indigo-400/10 hover:border-violet-400"
              >
                Source Code
              </a>
            </div>

            <h6 className="mb-2 text-purple-600 font-semibold">Description</h6>
            <p className="mb-6 tracking-[0.5px] leading-[1.7] whitespace-pre-line">
              {projectInfo.description}
            </p>

            <h6 className="mb-2 text-indigo-500 font-semibold">Technologies</h6>
            <div className="flex flex-wrap gap-3 mb-6">
              {projectInfo.technologies.map((tech, i) => (
                <div
                  key={i}
                  className="px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-sm select-none"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-4 mb-6">
            <button
              onClick={handleCloseProjectDialog}
              className=" cursor-pointer bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-8 py-2 rounded-[14px] font-semibold tracking-[1px] normal-case shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-600 hover:to-indigo-500 hover:scale-[1.03] hover:shadow-xl hover:shadow-indigo-500/40"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
);

const SwiperProjects = React.memo(({ projects }) => {
  return (
    <Swiper
      style={{
        width: "100%",
        margin: "40px 0",
        overflow: "visible",
        padding: "20px 0",
      }}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      initialSlide={Math.floor(projects.length / 2)}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
        scale: 0.85,
      }}
      modules={[EffectCoverflow, Pagination]}
    >
      {projects}
    </Swiper>
  );
});

const MarqueeAnimation = React.memo(({ images }) => {
  return (
    <div className="custom-marquee">
      <div className="marquee-track">
        <div className="marquee-content">{images}</div>
        <div className="marquee-content">{images}</div>
      </div>
    </div>
  );
});

const Footer = React.memo(() => {
  return (
    <div className="text-white text-center p-4 fixed bottom-0 w-full backdrop-blur-[10px] bg-[rgba(10,10,20,0.5)] border-t border-white/5 z-10">
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {[
          { icon: FaGithub, url: "https://github.com/NoorEldin-1" },
          { icon: FaYoutube, url: "https://www.youtube.com/@nooreldin_1" },
          { icon: FaXTwitter, url: "https://x.com/nooreldin_wd" },
          {
            icon: FaInstagram,
            url: "https://www.instagram.com/nooreldin_wd/",
          },
          {
            icon: FaLinkedin,
            url: "https://www.linkedin.com/in/noor-el-din-b72860379/",
          },
          {
            icon: FaFacebook,
            url: "https://www.facebook.com/profile.php?id=61575194101114",
          },
          { icon: FaWhatsapp, url: "https://wa.me/201552678658" },
        ].map((social, index) => (
          <social.icon
            key={index}
            className="footer-icons cursor-pointer text-[25px] transition-all duration-300 ease-in-out hover:text-indigo-400 hover:-translate-y-0.5 hover:[filter:drop-shadow(0_0_8px_rgba(99,102,241,0.5))]"
            onClick={() => window.open(social.url, "_blank")}
          />
        ))}
      </div>
    </div>
  );
});

export default App;
