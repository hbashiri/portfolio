import React, { Component } from "react";
import $ from "jquery";
import { Parallax, Background } from "react-parallax";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import HexaDominoes from "./components/HexaDominoes";
import EphemeralLight from "./components/EphemeralLight";
import Skills from "./components/Skills";
import Banner from "./components/Banner";
import Sketches from "./components/Sketches";


import colony from "./assets/images/experience/colony11.png";
import utLogo from "./assets/images/experience/UT_logo.png";
import moolfa from "./assets/images/experience/moolfa.png"
import iust from "./assets/images/experience/iust.png";
import noopArmyLogo from "./assets/images/experience/noopArmyLogo.png";
import PaeezanLogo from "./assets/images/experience/PaeezanLogo.png";

import playground0 from "./assets/images/projects/playground/playground_icon.jpg";
import playground1 from "./assets/images/projects/playground/mushroom.png";
import playground2 from "./assets/images/projects/playground/spidercube.png";
import playground3 from "./assets/images/projects/playground/lake.png";


import rebel0 from "./assets/images/projects/rebel/Rose.jpg"
import rebel1 from "./assets/images/projects/rebel/Rebel1.png"
import rebel2 from "./assets/images/projects/rebel/Rebel2.png"
import rebel3 from "./assets/images/projects/rebel/Rebel3.png"
import rebel4 from "./assets/images/projects/rebel/Rebel4.png"

import waterfall0 from "./assets/images/projects/waterfall/waterfall0.jpg"
import waterfall1 from "./assets/images/projects/waterfall/waterfall1.png"
import waterfall2 from "./assets/images/projects/waterfall/waterfall2.png"

import art0 from "./assets/images/arts/concept-art/Paint1.jpg"
import art1 from "./assets/images/arts/concept-art/PixelAsset1.png"
import art2 from "./assets/images/arts/concept-art/PixelAsset2.png"
import art3 from "./assets/images/arts/concept-art/Sketch1.jpg"
import art4 from "./assets/images/arts/concept-art/Sketch2.jpg"
import art5 from "./assets/images/arts/concept-art/watermill.gif"

import HDIcon from "./assets/images/projects/hexaDominoes/icon.jpg";
import HDScreenShot1 from "./assets/images/projects/hexaDominoes/1.png";
import HDScreenShot2 from "./assets/images/projects/hexaDominoes/2.png";
import HDScreenShot3 from "./assets/images/projects/hexaDominoes/3.png";
import HDScreenShot4 from "./assets/images/projects/hexaDominoes/4.png";
import HDScreenShot5 from "./assets/images/projects/hexaDominoes/5.png";
import HDSetting from "./assets/images/projects/hexaDominoes/setting.png";

import BRIcon from "./assets/images/projects/bridgeRun/icon.jpg";
import BRScreenShot1 from "./assets/images/projects/bridgeRun/1.png";
import BRScreenShot2 from "./assets/images/projects/bridgeRun/2.png";
import BRScreenShot3 from "./assets/images/projects/bridgeRun/3.png";
import BRScreenShot4 from "./assets/images/projects/bridgeRun/4.png";
import BRShop from "./assets/images/projects/bridgeRun/shop.png";
import BRVictoryPanel from "./assets/images/projects/bridgeRun/victoryPanel.png";
import BRStartPage from "./assets/images/projects/bridgeRun/startPage.png";

import parallexBackground from "./assets/images/arts/DominoColorBanner.png";

import ELPortrait from "./assets/images/projects/ephemeralLight/Portrait.jpg"
import ELLandscape from "./assets/images/projects/ephemeralLight/Landscap.jpg"
import EL1 from "./assets/images/projects/ephemeralLight/1.png"
import EL2 from "./assets/images/projects/ephemeralLight/2.png"
import EL3 from "./assets/images/projects/ephemeralLight/3.png"
import EL4 from "./assets/images/projects/ephemeralLight/4.png"
import EL5 from "./assets/images/projects/ephemeralLight/5.png"
import EL6 from "./assets/images/projects/ephemeralLight/6.png"
import EL7 from "./assets/images/projects/ephemeralLight/7.png"
import EL8 from "./assets/images/projects/ephemeralLight/8.png"

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      windowInnerHeight: window.innerHeight,
      foo: "bar",
      resumeData: {
        experience: [
          {
            technologies:["Ephemeral Light"],
            mainTech: ["Unity", "C#", "UI Toolkit", "MVP"],
            years: "2022.5 - present",
            title: "Game Developer",
            company: "Paeezan Studio",
            companyIcon: PaeezanLogo,
          },
          {
            technologies:["Enlightenment"],
            mainTech: ["Unity", "C#", "DOTS", "UI Toolkit"],
            years: "2021.4 - 2021.10",
            title: "Game Developer",
            company: "NoOp Army",
            companyIcon: noopArmyLogo,
          },
          {
            technologies:[],
            mainTech: ["Unity", "C#"],
            years: "2020.10 - 2020.12",
            title: "Game Developer and Designer",
            company: "Colony11",
            companyIcon: colony,
          },
          {
              mainTech: ["Major: Software Engineering"],
              technologies: ["Thesis: Multi-Modal route advisory system"],
              years: "2018.9 - 2021.03",
              title: "Computer Engineering",
              company: "Tehran University",
              companyIcon: utLogo,
          },
          {
              technologies: ["Hexa Dominoes, Waterfall"],
              mainTech: ["Unity", "C#"],
              years: "2015.9 - 2017.10",
              title: "Freelance Game Developer",
              company: "Freelance",
              companyIcon: moolfa,
          },
          {
              mainTech: ["Major: Hardware Engineering"],
              technologies: ["Game design course in 2016"],
              years: "2013.09 - 2018.06",
              title: "Computer Engineering",
              company: "Iran University of Science and Technology",
              companyIcon: iust,
          }
        ],
        projects: [
          {
            title: "Bridge Run",
            url: "https://play.google.com/store/apps/details?id=com.Moolfa.BridgeRun",
            description: "Bridge Run was created for Bazaar Game Contest, where the focus was on creating runner games in" +
                " three weeks. We participated as a team of two. Although my main contribution was game designing and coding," +
                " I created most of the 3D models and wrote shaders for the game too. We used standard characters model and Mixamo" +
                " animations for the project. Later we published it on Google Play and got 10k organic users in 2 months!\n",
                // "My contribution in this project was:\n"+
                // "    •\tImplementing game features.\n" +
                // "    •\tDesigning gameplay and levels.\n" +
                // "    •\tImplementing user interfaces.\n" +
                // "    •\tWrite shaders in HLSL.\n" +
                // "    •\tCreating 3D models.\n",
            thumbnail: BRIcon,
            images: [
                BRScreenShot1,
                BRScreenShot2,
                BRShop,
                BRStartPage,
                BRVictoryPanel,
                BRScreenShot3,
                BRScreenShot4,
            ],
            // youtube: "o1SbL0i7x1M",
            startDate: 2022,
          },
          {
            title: "Playground",
            url: "https://moolfa.itch.io/playground",
            description: "This game is created to prototype different mechanics in Unity." +
                " Each level is a minimal prototype where the objective is to reach the door. I Implemented different " +
                "challenging mechanics such as rope and water simulation.",
            thumbnail: playground0,
            images: [
              playground1,
              playground2,
              playground3,
            ],
            youtube: "o1SbL0i7x1M",
            startDate: 2022,
          },
          {
            title: "Hexa Dominoes",
            url: "https://play.google.com/store/apps/details?id=com.moolfa.dominocolor",
            description: "•    Designed and developed the game \n" +
                "•    Led a multi-disciplinary team to produce the game\n",
            thumbnail: HDIcon,
            images: [
              HDScreenShot1,
              HDScreenShot2,
              HDScreenShot3,
              HDScreenShot4,
              HDScreenShot5,
              HDSetting,
            ],
            startDate: 2021,
          },
          {
            title: "Rebel",
            url: "https://moolfa.itch.io/rebel",
            description: "o    Designed and developed game logics\n" +
              "o    Worked on character design and animations\n",
            thumbnail: rebel0,
            images: [
              rebel1,
              rebel2,
              rebel3,
              rebel4,
            ],
            youtube: "kRbxADt-gVc",
            startDate: 2019,
          },
          {
            title: "Waterfall",
            url: "https://hvbashiri.itch.io/waterfall",
            description: "o    Final project of fundamentals of game design course \n" +
              "o    Worked on character animations and core gameplay mechanics\n",
            thumbnail: waterfall0,
            images: [
              waterfall1,
              waterfall2,
            ],
            startDate: 2016,
          },
        ],
        ephemeralLight:
          {
            title: "Ephemeral Light",
            description: "",
            des: "Ephemeral Light is an exciting tactical RPG game with a strong focus on storytelling." +
                " Players can explore cities, talk to people, and make choices that shape the outcome of the game." +
                " In combat, which happens in turns on hexagonal tile environments, players control one to three heroes" +
                " with unique abilities inspired by MOBA games. As the story unfolds, players can choose companions," +
                " upgrade abilities using resources they collect, and influence the game's ending. Ephemeral Light offers" +
                " a captivating adventure where players can experience strategic battles, immersive narratives," +
                " and the power to impact the game world.",
            thumbnail: ELLandscape,
            images: [
              EL1,
              EL2,
              EL3,
              EL4,
              EL5,
              EL6,
              EL7,
              EL8,
            ],
            projects: [
              {
                title: "Wit, our visual novel tool",
                description: "One of the key elements in a narrative-driven game is the art of storytelling. " +
                    "To facilitate the management of branching and complex narratives, I developed a graph-based tool" +
                    " called Wit within the Unity game engine. Wit provides us with a versatile platform to write dialogues," +
                    " design scenes, and set triggers or player choices. To get a better understanding of Wit and its capabilities," +
                    " I invite you to watch the demo reel or read about it in my Medium .",
                youtube: "VEHTnPa6LaU",
              },
              {
                title: "Mirage, our mesh generator tool",
                description: "We incorporated mesh generation techniques in two key areas of our project: \n" +
                    "•  We utilized mesh generation to create our object in our exploration world from 2D sprites.\n" +
                    "•  We employed mesh generation to create a path preview system. This feature visually displayed the walking paths for both the player and enemy units.\n"
              }
            ],
          },
        arts: [
          {
            title: "Sketches",
            thumbnail: art3,
            images: [
              art3,
              art5,
              art1,
              art2,
              art0,
              art4
            ],
          },
        ],
        basic_info: {
          section_name: {
            experience: "My Journey",
            ephemeralLight: "Ephemeral Light",
            enlightenment: "Enlightenment",
            hexaDominoes: "Hexa Dominoes",
            projects: "Personal Projects",
            sketches: "Life Interests"
          }
        }
      },
      sharedData: {},
    };
  }


  componentDidMount() {
    this.loadSharedData();
    this.calculateBannerHeight(window.innerHeight, window.innerWidth);

    window.addEventListener("orientationchange", () => {
      this.calculateBannerHeight(window.innerWidth, window.innerHeight);
    })
  }

  calculateBannerHeight(height, width) {
    var bannerHeight = height < width ? height > 900 ? 480:  height / 3 : width / 2;
    bannerHeight = bannerHeight > 300 ? bannerHeight : 300;
    var mobileVersion = bannerHeight <= 300 || navigator.platform.indexOf('MacIntel') !== -1;
    this.setState({windowInnerHeight: height, bannerSize: bannerHeight, mobileVersion});
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      <div>
        <div
            className= "main-background-color-variable"
            style={{height: this.state.windowInnerHeight, flex: 1, display: "flex", flexDirection: "column"}}>
          <Banner/>
          <Header sharedData={this.state.sharedData.basic_info} />
        </div>
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <EphemeralLight
            resumeProjects={this.state.resumeData.ephemeralLight}
            resumeBasicInfo={this.state.resumeData.basic_info}
          />
        {/*<HexaDominoes*/}
        {/*    resumeProjects={this.state.resumeData.dominoes}*/}
        {/*    resumeBasicInfo={this.state.resumeData.basic_info}*/}
        {/*/>*/}
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />

        {/*<Parallax bgImage={parallexBackground} strength={500}>*/}
        {/*  <div style={{ height: window.innerHeight }}>*/}
        {/*  </div>*/}
        {/*</Parallax>*/}
        {/*<Parallax bgImage={parallexBackground} strength={500}>*/}
        {/*  <div style={{ height: this.state.windowInnerHeight }}>*/}
        {/*  </div>*/}
        {/*</Parallax>*/}
        <Sketches
          resumeProjects={this.state.resumeData.arts}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />

        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}

export default App;
