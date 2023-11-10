import React, { useEffect, useRef } from "react";
import ProjectSlider from "../components/ProjectSlider";
import "./pages.css";
import { motion } from "framer-motion";

import star from "../assets/starss.svg";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotFound from "./NotFound";
const projects = [
  {
    title: "BlogKit - the Blogging Application",
    genre: [
      "all",
      "major",
      "mongodb atlas",
      "mongodb",
      "mongoose",
      "expressjs",
      "nodejs",
      "reactjs",
      "ejs",
    ],
    linkText: "Github",
    link: "https://github.com/Pulkitxm/BlogKit",
    vidCode: "zJbR01Rd1F0",
    skills: "MongoDB Atlas, MongoDb, mongoose, ExpressJS, NodeJS, ReactJS, EJs",
    desc: "Excited to share a feature-rich blog application where you can create, view, edit, and delete blogs effortlessly. Here's what you can do: ✍️ Create Blogs: Craft your blogs with rich text formatting, including bold and italics. Align your content left, center, or right. Add horizontal rules, insert images, and create clickable links. Our real-time preview makes it a breeze. 📚 View Blogs: Explore blogs created by you and other talented writers. Enjoy the beautifully formatted content, complete with images and links. ✏️ Edit Blogs: Made a mistake? No worries! Edit your blogs anytime. Our editor allows you to make changes and see them instantly. 🗑️ Delete Blogs: Need to remove a blog? We've got you covered. A simple \"delete\" button lets you remove your blogs with ease. 👍 Likes: Show some love for your favorite blogs by giving them a thumbs-up. See how many others appreciated the content. 🌐 Navigation: Seamlessly move around the app with user-friendly links and buttons. It's all about making your experience smooth and enjoyable. Join me on this blogging journey! Try it out, share your thoughts, and let's create and appreciate fantastic content together. 🌟",
    id: "XpRtG45s",
  },
  {
    title: "Ejs Chat Application",
    genre: [
      "all",
      "major",
      "mongodb atlas",
      "mongodb",
      "mongoose",
      "expressjs",
      "nodejs",
      "reactjs",
      "ejs",
    ],
    linkText: "Github",
    link: "https://github.com/Pulkitxm/Delta-Apna-College/tree/main/46.%20MongoDb%20with%20Express",
    vidCode: "urdwDxs2haM",
    skills: "MongoDB Atlas, MongoDb, mongoose, ExpressJS, NodeJS, ReactJS, EJs",
    desc: "Exciting news! I've just completed my journey of learning EJS, Mongoose, Node.js, and Express by building a fully functional chat application. 🌐💻 Key Features: ✅ Real-time messaging with multiple users. ✅ Elegant UI powered by EJS templates. ✅ Secure user authentication. ✅ CRUD operations for messages. It's been an incredible learning experience, and I'm thrilled to showcase my newfound skills in web development. 🌟 I want to give a big shoutout to the amazing developer community for all the support and resources. 🙌👩‍💻 Feel free to check out my project on GitHub and let me know your thoughts! 💡👇",
    id: "QwZyP78k",
  },
  {
    title: "Quora Post Application",
    genre: [
      "all",
      "major",
      "mongodb",
      "mongoose",
      "expressjs",
      "nodejs",
      "ejs",
      "js",
    ],
    linkText: "Github",
    link: "https://github.com/Pulkitxm/quora-application",
    vidCode: "w8-I6wDb63c",
    skills: "MongoDB Atlas, MongoDb, mongoose, ExpressJS, NodeJS, ReactJS",
    desc: "Hey Folks, I am thrilled to share my latest project - a Quora Posts Application! 🌟📌 What is it all about? This application is a platform that allows users to Create, Read, Update, and Delete (CRUD) their posts, fostering a dynamic and engaging environment for knowledge sharing and discussion.🚀 Key Features: 📝 Create Posts: Share your thoughts, questions, or insights with the world. 📖 Read Posts: Explore a wide range of topics and learn from the community's wisdom. ✏️ Update Posts: Edit and refine your content to keep it fresh and relevant. 🗑️ Delete Posts: Manage your content easily. 🌐 Tech Stack: Frontend: I've used EJS (Embedded JavaScript) for the user-friendly interface. Backend: Express.js powers the robust server-side functionality.👩‍💻 How It Works: Signup/Login: Users can create accounts or log in securely. Post Creation: Share your ideas, questions, or insights in just a few clicks. Explore Content: Dive into an ever-growing library of posts and engage with the community. Edit and Delete: Modify your posts or remove them as needed.🤝 Join the Conversation: I invite all of you to check out my Quora Posts Application and be a part of this thriving community. Your feedback, questions, and contributions are highly valued and will help make this platform even better!📢 Spread the Word: Please help me in spreading the word about this project. Share this post, and let's grow this community together!🔗 Connect with Me: If you're interested in collaborating, discussing tech, or just want to connect, feel free to send me a message or connect with me on LinkedIn. Let's make knowledge sharing and engaging discussions more accessible and enjoyable. Join me on this exciting journey! 🚀",
    id: "LmNvF23r",
  },
  {
    title: "Whatsapp Clone",
    genre: [
      "all",
      "major",
      "mongodb atlas",
      "mongodb",
      "mongoose",
      "expressjs",
      "nodejs",
      "reactjs",
      "js",
      "jwt",
    ],
    linkText: "Github",
    link: "https://github.com/Pulkitxm/Whatsapp",
    vidCode: "gdr_j1lzlWU",
    skills: "MongoDB Atlas, MongoDb, mongoose, ExpressJS, NodeJS, ReactJS, JWT",
    desc: '🚀 Just Completed My MERN Stack Project: Building a Real-Time Chat Application! 📱💬 I\'m thrilled to share my latest project, a real-time chat application built using the MERN stack (MongoDB, Express.js, React, Node.js). While real-time applications often use Socket.IO for instant messaging, I took a slightly different approach for this project to make it more accessible for beginners. 🔗 Backend (Node.js and Express.js): The backend handles user authentication and chat data storage. When a user logs in, their chats are retrieved from the database and displayed in the frontend. 💼 Database (MongoDB): MongoDB stores user information, including chat messages. User chats are organized and retrieved based on the sender and receiver IDs. 🎨 Frontend (React): The frontend is where the magic happens! It provides a user-friendly interface for sending and receiving messages. Messages are sorted by timestamp and displayed in a conversation view. A user can easily switch between different chat partners. 🔄 Chat Refresh Feature: Instead of using Socket.IO for real-time updates, I implemented a chat refresh feature. By clicking the "Refresh" button, users can retrieve the latest messages in their chats. This feature works smoothly, ensuring that users see new messages without constant server polling. 🔒 Authentication: To maintain user privacy and security, I implemented user authentication. Users must log in with a valid username and password to access their chats. 📦 Local Storage: I used local storage to store chat data locally, reducing the need for repeated database queries and enhancing the user experience. 🚧 Error Handling: I included robust error handling to provide feedback to users when something goes wrong, such as incorrect login credentials. 🌟 This project challenged me to think creatively and find alternative solutions to real-time messaging. While Socket.IO is a popular choice, this project shows that with careful design and development, we can achieve similar functionality in a more straightforward way.',
    id: "HtYxJ56p",
  },
  {
    title: "Blog Application",
    genre: [
      "all",
      "major",
      "mongodb atlas",
      "mongodb",
      "mongoose",
      "expressjs",
      "nodejs",
      "reactjs",
      null,
      "js",
    ],
    linkText: "Github",
    link: "https://github.com/Pulkitxm/fullstackopen/tree/main/part4",
    vidCode: "jd_tlqJ_kJg",
    skills: "MongoDB Atlas, MongoDb, mongoose, ExpressJS, NodeJS, ReactJS",
    desc: "🚀 Just launched my MERN stack project! 📝🔗 Excited to share my latest accomplishment: a fully functional blog application built using the MERN stack! 🌐📚 🔐 Secure User Authentication: Implemented a user login feature to ensure only authorized users can contribute to the blog. 📝 Informative Content: Each blog post showcases essential details like URL, title, and author, providing a seamless reading experience. 👍 Interactivity at its Best: Readers can engage with the content using dynamic features such as the like button, fostering an interactive community. 🗑️ Easy Content Management: Empowered users with the ability to delete posts, keeping the platform clutter-free and organized. ➕ Seamless Additions: Added a convenient 'Add a Blog' form, enabling contributors to share their insights effortlessly. Though styles are a work in progress, I'm thrilled about the functionality and user experience I've achieved! Looking forward to refining the aesthetics while users enjoy the content. 🎨👁️",
    id: "BcXwQ89a",
  },
  {
    title: "Dictionary",
    genre: ["all", "minor", "html", "css", "js", "fetch api", "js"],
    linkText: "Dictionary",
    link: "https://pulkitxm.github.io/Dicitionary/",
    vidCode: "pwUYkU8blWE",
    skills: "Html CSS JS(fetch api)",
    desc: "📚 Exciting News: I've just completed my latest project, a dynamic online dictionary tool! 🔍 With this tool, you can easily search for words and get their meanings right away. But that's not all – it also provides pronunciations, synonyms, antonyms, and usage examples for a comprehensive understanding of each word. 🎧 Ever wondered how a word sounds? You can even listen to its pronunciation with just a click! 🚀 I built this dictionary using JavaScript and DictionaryAPI. It was an amazing learning experience, and I'm proud to share the result with you.",
    id: "KsMlP34v",
  },
  {
    title: "BuyWithPulkit - React",
    genre: ["all", "major", "reactjs", "js"],
    linkText: "BuyWithPulkit vercel.ap",
    link: "https://buywithpulkit.vercel.app/",
    vidCode: "tLbUHOTZR2Y",
    skills: "ReactJs",
    desc: "Excited to announce the launch of my revamped online marketplace project ! 🛒✨ What started as an Amazon-like website clone built with HTML and CSS has now been rebuilt using ReactJS, taking the user experience to a whole new level. It has been an incredible journey of learning and growth, and I'm proud to showcase the power of ReactJS in creating dynamic and interactive web applications. Check out the website and explore its features. Your feedback is highly appreciated!",
    id: "ZnLkO67i",
  },
  {
    title: "Spotify Clone",
    genre: ["all", "minor", "html", "css", "js"],
    linkText: "Github",
    link: "https://github.com/Pulkitxm/Delta-Apna-College/tree/main/18.%20Project%20(CSS)",
    vidCode: "oUxHSnaMc-w",
    skills: "Html , CSS & JS",
    desc: "Excited to share my recent project! 🎧🎉 With the guidance of Shradha Khapra at Apna College #Delta Course, I successfully built a #spotify clone using HTML and CSS only. It was an incredible learning experience, diving into frontend development and recreating the user interface. Grateful for the opportunity to enhance my skills and showcase my work. Check out the clone and let me know.",
    id: "UtRvE12h",
  },
  {
    title: "TicTacToe",
    genre: ["all", "minor", "java"],
    linkText: "Github",
    link: "https://github.com/Pulkitxm/TicTacToe",
    vidCode: "C0qyJvZEtCg",
    skills: "Java",
    desc: "Excited to share my Java code for a Tic Tac Toe game! It features a 2D array-based game board, user input, win condition checking, and dynamic board display. Check out the code and enjoy playing this classic game of strategy and fun!",
    id: "GpQsW78d",
  },
  {
    title: "ColorPicker Microsoft Addon",
    genre: ["all", "major", "html", "css", "js", "extensions"],
    linkText: "Microsoft Addons",
    link: "https://microsoftedge.microsoft.com/addons/detail/ncojkkcoejbeggmbkjbmjnacfgghgcgf",
    vidCode: "M0_NP1oY-uk",
    skills:
      "HTML/CSS , JavaScript , DOM Manipulation , Color Theory , Chrome Extension Architecture , Chrome Extension APIs , Event Handling",
    desc: "🎨 Exciting News! Introducing the Color Picker Extension! 🌈 Hey fam! 👋 I'm excited to share a sneak peek of my latest creation - the Color Picker Extension! 🎉 Say goodbye to tedious color code searches and hello to seamless color selection. ...",
    id: "TzIyX56m",
  },
  {
    title: "BuyWithPulkit",
    genre: ["all", "minor", "html", "css", "js"],
    linkText: "BuyWithPulkit - netlify",
    link: "https://buywithpulkit.netlify.app",
    vidCode: "tLbUHOTZR2Y",
    skills: "HTML , CSS & JS",
    desc: "Hey Everyone I am very excited to share this project - buyWithPulkit! An e-commerce website built from scratch, offering a wide range of products from smartphones to clothing items. With a user-friendly interface and seamless checkout process, shopping has never been easier. Check it out and let me know what you think!",
    id: "ErNbC23f",
  },
  {
    title:
      "Editing Thor's Wallpaper on my #asus #tuf laptop using #Auracreator",
    genre: ["all", "minor", "editing"],
    linkText: "Github",
    link: "https://github.com/Pulkitxm/Goose_Foot",
    vidCode: "zfmYFm6K_b4",
    skills: "Video Editing Editing",
    desc: "This is in continuation with my 11th class project. Using The Basics of python and SQL, this is a project that has some features in extension to the older one like typing effects, loaders, collaborations with more 10-15 restaurants, 20-30 deliver partners, Receipt of the order, and many more.",
    id: "PpOqA89u",
  },
  {
    title: "GooseFoot",
    genre: ["all", "minor", "python"],
    linkText: "Github",
    link: "https://github.com/Pulkitxm/Goose_Foot",
    vidCode: "9mgYCf77KqY",
    skills: "Python",
    desc: "This is in continuation with my 11th class project. Using The Basics of python and SQL, this is a project that has some features in extension to the older one like typing effects, loaders, collaborations with more 10-15 restaurants, 20-30 deliver partners, Receipt of the order, and many more.",
    id: "FgHjK34l",
  },
  {
    title: "Pulkit Eatries",
    genre: ["all", "minor", "python"],
    linkText: "Github",
    link: "https://github.com/Pulkitxm/Pulkit_Eatries",
    vidCode: "AOILLTSwNx0",
    skills: "Python",
    desc: "This is a school-level 11th class project using Python. It is a restaurant named Pulkit Eatries in which you have to sign in/up then you have the options to select menu items and at last Billing is done.",
    id: "VbNmZ67x",
  },
];

const Projects = ({ pageTransition, width, darkMode, toploadAnimate,baseTitle }) => {
  const [showgenre, setshowgenre] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const [singleProject, setSingleProject] = useState(null);
  const genres = [
    {
      showText: "All",
      value: "all",
    },
    {
      showText: "Major Projects",
      value: "major",
    },
    {
      showText: "Minor Projects",
      value: "minor",
    },
    {
      showText: "HTML  ",
      value: "html",
    },
    {
      showText: "css",
      value: "css",
    },
    {
      showText: "js",
      value: "js",
    },
    {
      showText: "ReactJs",
      value: "reactjs",
    },
    {
      showText: "ExpressJs",
      value: "expressjs",
    },
    {
      showText: "NodeJs",
      value: "nodejs",
    },
    {
      showText: "MongoDB",
      value: "mongodb",
    },
    {
      showText: "JWT",
      value: "jwt",
    },
    {
      showText: "APIs",
      value: "fetch api",
    },
    {
      showText: "Extensions",
      value: "extensions",
    },
    {
      showText: "Editing",
      value: "editing",
    },
  ];
  useEffect(() => {
    if (!params.id) {
      document.title = baseTitle + " | Projects";
      setshowgenre("all");
    } else {
      const project = projects.filter((i) => i.id === params.id)[0];
      if (project) {
        setSingleProject(project);
        document.title = `${baseTitle} | Project-${project.title}`;
      }
      else {
        setSingleProject("error");
      }
    }
  }, []);
  if (singleProject === "error") {
    return <NotFound />;
  } else {
    return (
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        className="projects"
      >
        {width < 400 && (
          <>
            <br />
            <br />
          </>
        )}
        <div
          style={{
            height: "100%",
          }}
        >
          {!singleProject && (
            <div
              className="top"
              style={{
                fontSize: width < 400 ? "1.5rem" : "2rem",
                color: darkMode ? "#fff" : "#000",
              }}
            >
              Projects I made &nbsp;{" "}
              {!darkMode && <img src={star} alt="star" />}
            </div>
          )}
          {!params.id && (
            <div className="genres">
              <ul>
                {genres.map((genre) => (
                  <li key={genre.value}>
                    <button
                      className={showgenre === genre.value ? "selected" : ""}
                      onClick={() => {
                        setshowgenre(genre.value);
                        navigate("/projects");
                      }}
                    >
                      {genre.showText}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {params.id && showgenre == null ? (
            <ProjectSlider
              projects={projects.filter((i) => i.id === params.id)}
              showgenre={showgenre}
              setshowgenre={setshowgenre}
              darkMode={darkMode}
              toploadAnimate={toploadAnimate}
              seperate={true}
            />
          ) : (
            <ProjectSlider
              projects={projects.filter((i) => i.genre.includes(showgenre))}
              showgenre={showgenre}
              setshowgenre={setshowgenre}
              darkMode={darkMode}
              toploadAnimate={toploadAnimate}
            />
          )}
        </div>
        {width < 400 && (
          <>
            <br />
            <br />
          </>
        )}
      </motion.div>
    );
  }
};

export default Projects;
