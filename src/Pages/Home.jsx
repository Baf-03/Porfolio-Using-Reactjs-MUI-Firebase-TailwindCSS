import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Spinner } from "@material-tailwind/react";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { app, db, imagedb } from "../firebase";
import BasicModalDialog from "../Components/formModal";
import Introduction from "../Components/MiddleSection/Introduction";
import MemoryGame from "./../assets/MemoryGame.png";
import githubuserfinder from "./../assets/githubuserfinder.png";
import tictactoe from "./../assets/tictactoe.png";
import weatherappreact from "./../assets/weatherappreact.png";
import todoreact from "./../assets/todoreact.png";
import facebook from "./../assets/facebook.png";
import olxclone from "./../assets/olxclone.png";
import ecom from "./../assets/e-com.png";
import bgg from "./../assets/bgg.png";
import Skills from "../Components/MiddleSection/Skills";
import Education from "../Components/MiddleSection/Education";
import { Navigate } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  let projects = [
    {
      ProjectName: "Memory Game",
      Description: "This project is made by using Reactjs and TailwindCss.",
      img: MemoryGame,
      linkCode: "https://github.com/Baf-03/Memory-Game",
      linkSite: "https://memory-game-baf.netlify.app/",
      id: "1",
      isshow: "false",
    },
    {
      ProjectName: "Github User Finder",
      Description:
        "This project is made by using Reactjs,MaterialUi and TailwindCss. ",
      img: githubuserfinder,
      linkCode: "https://github.com/Baf-03/Github-User-Finder",
      linkSite: "https://github-user-finder-baf.netlify.app/",
      id: "2",
      isshow: "false",
    },
    {
      ProjectName: "Weather App",
      Description:
        "this project is made by using Reactjs,Axios,Mui and TailwindCSS",
      img: weatherappreact,
      linkCode: "https://github.com/Baf-03/weather-app-in-reactjs",
      linkSite: "https://weather-app-reactjs-baf.netlify.app/",
      id: "1",
      isshow: "false",
    },
    {
      ProjectName: "Todo List ",
      Description:
        "This Project is made by using Reactjs ,Material Ui and TailwindCSS",
      img: todoreact,
      linkCode: "https://github.com/Baf-03/Todolist",
      linkSite: "https://todo-baf.netlify.app/",
      id: "2",
      isshow: "false",
    },
    {
      ProjectName: "Facebook Clone",
      Description: "This project is made by using Reactjs and Bootstrap",
      img: facebook,
      linkCode: "https://github.com/Baf-03/Facebook-Clone",
      linkSite: "lol",
      id: "1",
      isshow: "hidden",
    },
    {
      ProjectName: "Olx Clone",
      Description: "This project is made by using Reactjs and Bootstrap",
      img: olxclone,
      linkCode: "https://github.com/Baf-03/OLX-Clone-using-reactjs",
      linkSite: "https://olx-clone-baf03.netlify.app/",
      id: "2",
      isshow: "",
    },
    {
      ProjectName: "Ecommerce Website",
      Description: "it is what is ",
      img: ecom,
      linkCode: "http",
      linkSite: "lol",
      id: "1",
      isshow: "",
    },
    {
      ProjectName: "Nice ",
      Description: "it is what is ",
      img: tictactoe,
      linkCode: "http",
      linkSite: "lol",
      id: "2",
      isshow: "",
    },
    {
      ProjectName: "hello world",
      Description: "it is what is ",
      img: MemoryGame,
      linkCode: "http",
      linkSite: "lol",
      id: "1",
      isshow: "",
    },
    {
      ProjectName: "Nice ",
      Description: "it is what is ",
      img: tictactoe,
      linkCode: "http",
      linkSite: "lol",
      id: "2",
      isshow: "",
    },
    {
      ProjectName: "hello world",
      Description: "it is what is ",
      img: MemoryGame,
      linkCode: "http",
      linkSite: "lol",
      id: "1",
      isshow: "",
    },
    {
      ProjectName: "Nice ",
      Description: "it is what is ",
      img: tictactoe,
      linkCode: "http",
      linkSite: "lol",
      id: "2",
      isshow: "",
    },
    {
      ProjectName: "hello world",
      Description: "it is what is ",
      img: MemoryGame,
      linkCode: "http",
      linkSite: "lol",
      id: "1",
      isshow: "",
    },
    {
      ProjectName: "Nice ",
      Description: "it is what is ",
      img: tictactoe,
      linkCode: "http",
      linkSite: "lol",
      id: "2",
      isshow: "",
    },
    {
      ProjectName: "Nice ",
      Description: "it is what is ",
      img: tictactoe,
      linkCode: "http",
      linkSite: "lol",
      id: "2",
      isshow: "",
    },
    {
      ProjectName: "Nice ",
      Description: "it is what is ",
      img: tictactoe,
      linkCode: "http",
      linkSite: "lol",
      id: "2",
      isshow: "",
    },
  ];
  let [projectlimit, setprojectlimit] = useState([]);
  let [viewmore, setViewMore] = useState(false);
  const handleViewMore = () => {
    setViewMore(!viewmore);
  };
  useEffect(() => {
    if (viewmore) {
      setprojectlimit(projects.slice(0));
      return;
    }
    setprojectlimit(projects.slice(0, 10));
  }, [viewmore]);
  useEffect(() => {
    console.log(projectlimit);
  }, [projectlimit]);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <div className="w-[100%] flex justify-center items-center h-[80vh] text-[3rem] font-bold">
          Loading
          <div className="w-[5vw] ">
            <Spinner className=" w-[100%] h-[5rem]" color="pink" />
          </div>
        </div>
      ) : (
        <>
          <div name="aboutme"></div>
          <div className="w-[100%] xl:w-[90%]  mx-auto mt-[6%] min-h-[85vh]" >
            <div className="flex items-center">
              <Introduction />
            </div>

            <BasicModalDialog />
          </div>

          <div
            className="flex flex-col w-[100%] gap-5 flex-wrap items-center bg-fixed  p-8 bg-cover"
            style={{ backgroundImage: `url(${bgg})` }}
            name="projects"
          >
            <div
              className="text-center"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h1 className="text-red-500 text-lg">
                VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
              </h1>
              <h1 className="text-gray-700 text-[4rem] font-bold">
                My Portfolio
              </h1>
            </div>
            <div className="  flex  w-[100%] gap-[3rem] flex-wrap justify-center bg-fixed  p-5 mt-5">
              {projectlimit.map((product, index) => (
                <div
                  className="projects w-[20vw] rounded-lg backgroundcard"
                  data-aos="fade-up-left "
                >
                  <div>
                    <div className="relative">
                      <img src={product.img} className="h-[15rem] rounded-lg" />
                      <div className="cardprojects absolute bottom-0 bg-gray-500 bg-opacity-80 p-4 w-[100%] text-center text-black-900 text-bold capitalize text-[1.5rem]  ">
                        {product.ProjectName}
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="p-3"> {product.Description}</div>
                    <div className="flex gap-2 justify-center pb-3">
                      {" "}
                      <a href={product.linkCode} target="_blank">
                        <Button>View Site</Button>
                      </a>{" "}
                      <a href={product.linkSite} target="_blank">
                        <Button>View Site</Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {viewmore ? (
              <ScrollLink to="projects" spy={true} smooth={true} duration={500}>
                <div onClick={handleViewMore}>
                  <Button>
                    {viewmore ? (
                      <div>View less</div>
                    ) : (
                      <div>view more projects</div>
                    )}
                  </Button>
                </div>
              </ScrollLink>
            ) : (
              <div onClick={handleViewMore}>
                <Button>
                  {viewmore ? (
                    <div>View less</div>
                  ) : (
                    <div>view more projects</div>
                  )}
                </Button>
              </div>
            )}
          </div>

          <Skills />
          <Education />
        </>
      )}
    </>
  );
}

export default Home;
