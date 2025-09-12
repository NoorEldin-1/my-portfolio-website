import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import "./App.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel, Pagination } from "swiper/modules";
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
    image: `https://img.youtube.com/vi/URlCIqp_A3o/maxresdefault.jpg`,
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
    image: `https://img.youtube.com/vi/uW6ezChzl7Q/maxresdefault.jpg`,
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
    image: `https://img.youtube.com/vi/B-g4ZWdilYU/maxresdefault.jpg`,
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
  console.log("App Rendered");
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
    console.log("project mapped");
    return projectsData.map((project, i) => (
      <SwiperSlide
        key={i}
        style={{
          width: "250px",
          height: "250px",
          userSelect: "none",
          backgroundColor: "white",
          borderRadius: "12px",
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
          },
        }}
      >
        <img
          src={project.image}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            bottom: 15,
            left: "50%",
            transform: "translateX(-50%)",
            background: "linear-gradient(135deg, #00c6ff, #0072ff)", // Gradient
            color: "white",
            fontWeight: "600",
            letterSpacing: "3px",
            textTransform: "none",
            borderRadius: "8px",
            px: 3,
            py: 0.5,
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            "&:hover": {
              background: "linear-gradient(135deg, #0072ff, #00c6ff)",
              boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
              transform: "translateX(-50%) scale(1.05)",
            },
          }}
          onClick={() => {
            handleOpenProjectDialog(project);
          }}
        >
          details
        </Button>
      </SwiperSlide>
    ));
  }, [handleOpenProjectDialog]);

  const images = useMemo(() => {
    console.log("image mapped");
    return imagesData.map((img, i) => (
      <img key={i} src={img} alt="" style={{ width: "50px", height: "50px" }} />
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
  console.log("AnimatedBackground Rendered");
  return (
    <div className="aurora-container">
      <div className="aurora-blob"></div>
      <div className="aurora-blob"></div>
      <div className="aurora-blob"></div>
    </div>
  );
});

const MainContent = React.memo(({ handleOpenInfoDialog }) => {
  console.log("MainContent Rendered");
  return (
    <div className="content-container">
      <Typography variant="h4" align="center" className="reveal-colored-text">
        Noor El-Din
      </Typography>

      <Typography
        variant="h6"
        align="center"
        className="reveal-subtext-colored"
      >
        Full-Stack Developer
      </Typography>

      <div className="tooltip-wrapper">
        <Typography
          variant="h5"
          align="center"
          className="reveal-subtext-colored"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ gap: 1, cursor: "pointer", position: "relative" }}
          onClick={handleOpenInfoDialog}
        >
          how can i help you
          <KeyboardArrowDownIcon fontSize="large" />
        </Typography>

        <div className="always-tooltip">Click Here Please</div>
      </div>
    </div>
  );
});

const InfoDialog = React.memo(({ openInfoDialog, handleCloseInfoDialog }) => {
  console.log("InfoDialog Rendered");
  return (
    <Dialog
      open={openInfoDialog}
      onClose={handleCloseInfoDialog}
      scroll="paper"
      PaperProps={{
        sx: {
          borderRadius: "20px",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: "1.5rem",
          background: "linear-gradient(90deg,#00f5d4,#9b5de5,#f15bb5)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 2,
        }}
      >
        How can I help you?
      </DialogTitle>

      <DialogContent
        dividers
        sx={{
          color: "rgba(255,255,255,0.85)",
          fontSize: "0.95rem",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
      >
        {/* About Me */}
        <Typography
          variant="h6"
          sx={{ mb: 1, color: "#00f5d4", fontWeight: 600 }}
        >
          About Me
        </Typography>
        <Typography sx={{ mb: 3, letterSpacing: "1px" }}>
          I'm a Full-Stack Developer from Cairo, Egypt, passionate about
          building scalable, modern, and user-friendly software solutions. I
          love turning ideas into real applications and constantly exploring new
          technologies to improve my craft.
        </Typography>

        {/* Tech Stack */}
        <Typography
          variant="h6"
          sx={{ mb: 1, color: "#9b5de5", fontWeight: 600 }}
        >
          Technology Stack
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 3 }}>
          {[
            "React",
            "Python & FastAPI",
            "PHP & Laravel",
            "MySQL",
            "Material UI",
            "Tailwind CSS",
            "Framer Motion",
          ].map((tech, i) => (
            <Box
              key={i}
              sx={{
                px: 2,
                py: 0.5,
                borderRadius: "12px",
                background: "rgba(255,255,255,0.08)",
                fontSize: "0.85rem",
              }}
            >
              {tech}
            </Box>
          ))}
        </Box>

        {/* Help Developers */}
        <Typography
          variant="h6"
          sx={{ mb: 1, color: "#22d3ee", fontWeight: 600 }}
        >
          How I Can Help Developers
        </Typography>
        <ul style={{ marginLeft: "1.2rem", marginBottom: "1.5rem" }}>
          <li>Collaborate on projects as a freelancer</li>
          <li>Provide guidance on specific technologies or challenges</li>
          <li>Share best practices for clean maintainable code</li>
        </ul>

        {/* Help Clients */}
        <Typography
          variant="h6"
          sx={{ mb: 1, color: "#f15bb5", fontWeight: 600 }}
        >
          How I Can Help Clients
        </Typography>
        <ul style={{ marginLeft: "1.2rem" }}>
          <li>Transform your ideas into fully functional software</li>
          <li>Build and manage your website or web application</li>
          <li>Redesign and modernize existing websites</li>
          <li>Fix incomplete or underperforming projects</li>
        </ul>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", mt: 2 }}>
        <Button
          onClick={handleCloseInfoDialog}
          sx={{
            background: "linear-gradient(135deg,#00c6ff,#0072ff)",
            color: "white",
            px: 4,
            py: 1,
            borderRadius: "30px",
            fontWeight: 600,
            letterSpacing: 1,
            textTransform: "none",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            "&:hover": {
              background: "linear-gradient(135deg,#0072ff,#00c6ff)",
              transform: "scale(1.05)",
            },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
});

const ProjectDialog = React.memo(
  ({ openProjectDialog, handleCloseProjectDialog, projectInfo }) => {
    console.log("ProjectDialog Rendered");
    return (
      <Dialog
        open={openProjectDialog}
        onClose={handleCloseProjectDialog}
        PaperProps={{
          sx: {
            borderRadius: "20px",
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            maxWidth: "900px",
            width: "95%",
            maxHeight: "90vh",
            overflowY: "auto",
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: "1.6rem",
            background: "linear-gradient(90deg,#00f5d4,#9b5de5,#f15bb5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 2,
          }}
        >
          Project Details
        </DialogTitle>

        <DialogContent
          dividers={false}
          sx={{
            color: "rgba(255,255,255,0.9)",
            fontSize: "0.95rem",
            px: 3,
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
          }}
        >
          <Typography
            variant="h6"
            sx={{ mb: 1, color: "#00f5d4", fontWeight: 600 }}
          >
            Name: {projectInfo.name}
          </Typography>
          <Typography
            variant="h6"
            sx={{ mb: 1, color: "#9b5de5", fontWeight: 600 }}
          >
            <a href={projectInfo.youtubeVideo} target="_blank">
              show video
            </a>
          </Typography>
          <Typography
            variant="h6"
            sx={{ mb: 1, color: "#9b5de5", fontWeight: 600 }}
          >
            <a href={projectInfo.sourceCode} target="_blank">
              source code
            </a>
          </Typography>
          <Typography
            variant="h6"
            sx={{ mb: 1, color: "#9b5de5", fontWeight: 600 }}
          >
            Description
          </Typography>
          <Typography sx={{ mb: 3, letterSpacing: "0.5px" }}>
            {projectInfo.description}
          </Typography>

          <Typography
            variant="h6"
            sx={{ mb: 1, color: "#f15bb5", fontWeight: 600 }}
          >
            Technologies
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 3 }}>
            {projectInfo.technologies.map((tech, i) => (
              <Box
                key={i}
                sx={{
                  px: 2,
                  py: 0.5,
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.08)",
                  fontSize: "0.85rem",
                }}
              >
                {tech}
              </Box>
            ))}
          </Box>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center", mt: 2, mb: 2 }}>
          <Button
            onClick={handleCloseProjectDialog}
            sx={{
              background: "linear-gradient(135deg,#00c6ff,#0072ff)",
              color: "white",
              px: 4,
              py: 1,
              borderRadius: "30px",
              fontWeight: 600,
              letterSpacing: 1,
              textTransform: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              "&:hover": {
                background: "linear-gradient(135deg,#0072ff,#00c6ff)",
                transform: "scale(1.05)",
              },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
);

const SwiperProjects = React.memo(({ projects }) => {
  console.log("SwiperProjects Rendered");
  return (
    <Swiper
      style={{ width: "100%", margin: "20px 0", overflow: "hidden" }}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      initialSlide={Math.floor(projects.length / 2)}
      mousewheel={true}
      coverflowEffect={{
        rotate: 180,
        stretch: 50,
        depth: 450,
        modifier: 1,
        slideShadows: true,
        scale: 0.8,
      }}
      modules={[EffectCoverflow, Mousewheel, Pagination]}
      className="mySwiper"
    >
      {projects}
    </Swiper>
  );
});

const MarqueeAnimation = React.memo(({ images }) => {
  console.log("MarqueeAnimation Rendered");
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
  console.log("Footer Rendered");
  return (
    <Box
      sx={{
        color: "white",
        textAlign: "center",
        p: 2,
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <GitHubIcon
          sx={{ cursor: "pointer", fontSize: 25 }}
          onClick={() =>
            window.open("https://github.com/NoorEldin-1", "_blank")
          }
        />
        <YouTubeIcon
          sx={{ cursor: "pointer", fontSize: 25 }}
          onClick={() =>
            window.open("https://www.youtube.com/@nooreldin_1", "_blank")
          }
        />
        <XIcon
          sx={{ cursor: "pointer", fontSize: 25 }}
          onClick={() => window.open("https://x.com/nooreldin_wd", "_blank")}
        />
        <InstagramIcon
          sx={{ cursor: "pointer", fontSize: 25 }}
          onClick={() =>
            window.open("https://www.instagram.com/nooreldin_wd/", "_blank")
          }
        />
        <LinkedInIcon
          sx={{ cursor: "pointer", fontSize: 25 }}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/noor-el-din-b72860379/",
              "_blank"
            )
          }
        />
        <FacebookIcon
          sx={{ cursor: "pointer", fontSize: 25 }}
          onClick={() =>
            window.open(
              "https://www.facebook.com/profile.php?id=61575194101114",
              "_blank"
            )
          }
        />
        <WhatsAppIcon
          sx={{ cursor: "pointer", fontSize: 25 }}
          onClick={() => window.open("https://wa.me/201552678658", "_blank")}
        />
      </Box>
    </Box>
  );
});

export default App;
