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
          alt=""
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.8)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
            p: 2,
            pt: 4,
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: "100%",
              background: "linear-gradient(135deg, #6366f1, #7c3aed)",
              color: "white",
              fontWeight: "600",
              letterSpacing: "1px",
              textTransform: "none",
              borderRadius: "12px",
              py: 1,
              boxShadow: "0 4px 20px rgba(99, 102, 241, 0.3)",
              "&:hover": {
                background: "linear-gradient(135deg, #7c3aed, #6366f1)",
                boxShadow: "0 6px 24px rgba(99, 102, 241, 0.4)",
                transform: "scale(1.02)",
              },
            }}
            onClick={() => {
              handleOpenProjectDialog(project);
            }}
          >
            View Details
          </Button>
        </Box>
      </SwiperSlide>
    ));
  }, [handleOpenProjectDialog]);

  const images = useMemo(() => {
    return imagesData.map((img, i) => (
      <img
        key={i}
        src={img}
        alt=""
        loading="lazy"
        style={{ width: "50px", height: "50px" }}
      />
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
      <div className="aurora-blob"></div>
      <div className="aurora-blob"></div>
    </div>
  );
});

const MainContent = React.memo(({ handleOpenInfoDialog }) => {
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
  return (
    <Dialog
      open={openInfoDialog}
      onClose={handleCloseInfoDialog}
      scroll="paper"
      PaperProps={{
        sx: {
          borderRadius: "24px",
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
          maxWidth: "800px",
          width: "90%",
          maxHeight: "80vh",
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: "1.8rem",
          background: "linear-gradient(90deg, #818cf8, #7c3aed, #6366f1)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 2,
          pt: 3,
        }}
      >
        How can I help you?
      </DialogTitle>

      <DialogContent
        dividers
        className="dialog-scrollable"
        sx={{
          color: "rgba(255, 255, 255, 0.9)",
          fontSize: "1rem",
          maxHeight: "60vh",
          overflowY: "auto",
        }}
      >
        {/* About Me */}
        <Typography
          variant="h6"
          sx={{ mb: 1, color: "#818cf8", fontWeight: 600 }}
        >
          About Me
        </Typography>
        <Typography sx={{ mb: 3, letterSpacing: "0.5px", lineHeight: 1.6 }}>
          I'm a Full-Stack Developer from Cairo, Egypt, passionate about
          building scalable, modern, and user-friendly software solutions. I
          love turning ideas into real applications and constantly exploring new
          technologies to improve my craft.
        </Typography>

        {/* Tech Stack */}
        <Typography
          variant="h6"
          sx={{ mb: 1, color: "#7c3aed", fontWeight: 600 }}
        >
          Technology Stack
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 3 }}>
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
                py: 1,
                borderRadius: "12px",
                background: "rgba(99, 102, 241, 0.1)",
                border: "1px solid rgba(99, 102, 241, 0.2)",
                fontSize: "0.85rem",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              {tech}
            </Box>
          ))}
        </Box>

        {/* Help Developers */}
        <Typography
          variant="h6"
          sx={{ mb: 1, color: "#6366f1", fontWeight: 600 }}
        >
          How I Can Help Developers
        </Typography>
        <ul
          style={{
            marginLeft: "1.2rem",
            marginBottom: "1.5rem",
            lineHeight: 1.8,
          }}
        >
          <li>Collaborate on projects as a freelancer</li>
          <li>Provide guidance on specific technologies or challenges</li>
          <li>Share best practices for clean maintainable code</li>
        </ul>

        {/* Help Clients */}
        <Typography
          variant="h6"
          sx={{ mb: 1, color: "#a78bfa", fontWeight: 600 }}
        >
          How I Can Help Clients
        </Typography>
        <ul style={{ marginLeft: "1.2rem", lineHeight: 1.8 }}>
          <li>Transform your ideas into fully functional software</li>
          <li>Build and manage your website or web application</li>
          <li>Redesign and modernize existing websites</li>
          <li>Fix incomplete or underperforming projects</li>
        </ul>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", mt: 2, pb: 3 }}>
        <Button
          onClick={handleCloseInfoDialog}
          sx={{
            background: "linear-gradient(135deg, #6366f1, #7c3aed)",
            color: "white",
            px: 4,
            py: 1,
            borderRadius: "14px",
            fontWeight: 600,
            letterSpacing: 1,
            textTransform: "none",
            boxShadow: "0 4px 20px rgba(99, 102, 241, 0.3)",
            "&:hover": {
              background: "linear-gradient(135deg, #7c3aed, #6366f1)",
              transform: "scale(1.03)",
              boxShadow: "0 6px 24px rgba(99, 102, 241, 0.4)",
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
    return (
      <Dialog
        open={openProjectDialog}
        onClose={handleCloseProjectDialog}
        PaperProps={{
          sx: {
            borderRadius: "24px",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
            maxWidth: "900px",
            width: "95%",
            maxHeight: "90vh",
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: "1.8rem",
            background: "linear-gradient(90deg, #818cf8, #7c3aed, #6366f1)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 2,
            pt: 3,
          }}
        >
          Project Details
        </DialogTitle>

        <DialogContent
          dividers={false}
          className="dialog-scrollable"
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            fontSize: "1rem",
            px: 3,
            maxHeight: "70vh",
            overflowY: "auto",
          }}
        >
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <img
              src={projectInfo.image}
              alt={projectInfo.name}
              loading="lazy"
              style={{
                width: "100%",
                maxHeight: "300px",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
              }}
            />
          </Box>

          <Typography
            variant="h6"
            sx={{ mb: 1, color: "#818cf8", fontWeight: 600 }}
          >
            {projectInfo.name}
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              href={projectInfo.youtubeVideo}
              target="_blank"
              sx={{
                background: "linear-gradient(135deg, #6366f1, #7c3aed)",
                color: "white",
                px: 3,
                py: 1,
                borderRadius: "12px",
                fontWeight: 600,
                textTransform: "none",
                boxShadow: "0 4px 20px rgba(99, 102, 241, 0.3)",
                "&:hover": {
                  background: "linear-gradient(135deg, #7c3aed, #6366f1)",
                  transform: "scale(1.03)",
                },
              }}
            >
              Watch Video
            </Button>
            <Button
              variant="outlined"
              href={projectInfo.sourceCode}
              target="_blank"
              sx={{
                color: "#818cf8",
                borderColor: "#818cf8",
                px: 3,
                py: 1,
                borderRadius: "12px",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  background: "rgba(129, 140, 248, 0.1)",
                  borderColor: "#a78bfa",
                },
              }}
            >
              Source Code
            </Button>
          </Box>

          <Typography
            variant="h6"
            sx={{ mb: 1, color: "#7c3aed", fontWeight: 600 }}
          >
            Description
          </Typography>
          <Typography
            sx={{
              mb: 3,
              letterSpacing: "0.5px",
              lineHeight: 1.7,
              whiteSpace: "pre-line",
            }}
          >
            {projectInfo.description}
          </Typography>

          <Typography
            variant="h6"
            sx={{ mb: 1, color: "#6366f1", fontWeight: 600 }}
          >
            Technologies
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 3 }}>
            {projectInfo.technologies.map((tech, i) => (
              <Box
                key={i}
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: "12px",
                  background: "rgba(99, 102, 241, 0.1)",
                  border: "1px solid rgba(99, 102, 241, 0.2)",
                  fontSize: "0.85rem",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
              >
                {tech}
              </Box>
            ))}
          </Box>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center", mt: 2, mb: 3 }}>
          <Button
            onClick={handleCloseProjectDialog}
            sx={{
              background: "linear-gradient(135deg, #6366f1, #7c3aed)",
              color: "white",
              px: 4,
              py: 1,
              borderRadius: "14px",
              fontWeight: 600,
              letterSpacing: 1,
              textTransform: "none",
              boxShadow: "0 4px 20px rgba(99, 102, 241, 0.3)",
              "&:hover": {
                background: "linear-gradient(135deg, #7c3aed, #6366f1)",
                transform: "scale(1.03)",
                boxShadow: "0 6px 24px rgba(99, 102, 241, 0.4)",
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
      mousewheel={{ releaseOnEdges: true, sensitivity: 0.7 }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
        scale: 0.85,
      }}
      modules={[EffectCoverflow, Mousewheel, Pagination]}
      className="mySwiper"
      speed={800}
      resistance={true}
      resistanceRatio={0.6}
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
    <Box
      sx={{
        color: "white",
        textAlign: "center",
        p: 2,
        position: "fixed",
        bottom: 0,
        width: "100%",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        background: "rgba(10, 10, 20, 0.5)",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {[
          { icon: GitHubIcon, url: "https://github.com/NoorEldin-1" },
          { icon: YouTubeIcon, url: "https://www.youtube.com/@nooreldin_1" },
          { icon: XIcon, url: "https://x.com/nooreldin_wd" },
          {
            icon: InstagramIcon,
            url: "https://www.instagram.com/nooreldin_wd/",
          },
          {
            icon: LinkedInIcon,
            url: "https://www.linkedin.com/in/noor-el-din-b72860379/",
          },
          {
            icon: FacebookIcon,
            url: "https://www.facebook.com/profile.php?id=61575194101114",
          },
          { icon: WhatsAppIcon, url: "https://wa.me/201552678658" },
        ].map((social, index) => (
          <social.icon
            key={index}
            className="footer-icons"
            sx={{
              cursor: "pointer",
              fontSize: 25,
              transition: "all 0.3s ease",
              "&:hover": {
                color: "#818cf8",
                transform: "translateY(-2px)",
                filter: "drop-shadow(0 0 8px rgba(99, 102, 241, 0.5))",
              },
            }}
            onClick={() => window.open(social.url, "_blank")}
          />
        ))}
      </Box>
    </Box>
  );
});

export default App;
