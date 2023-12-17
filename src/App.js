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
import Skills from "./components/Skills";
import Banner from "./components/Banner";
import Sketches from "./components/Sketches";


import colony from "./assets/images/experience/colony11.png";
import utLogo from "./assets/images/experience/UT_logo.png";
import moolfa from "./assets/images/experience/moolfa.png"

import iust from "./assets/images/experience/iust.png";

import playground0 from "./assets/images/projects/playground/playground_icon.jpg";
import playground1 from "./assets/images/projects/playground/mushroom.png";
import playground2 from "./assets/images/projects/playground/spidercube.png";
import playground3 from "./assets/images/projects/playground/lake.png";

import bridgeRun from "./assets/images/projects/bridgerun/icon.jpg";
import bridgeRun1 from "./assets/images/projects/bridgerun/gameplay0.png";
import bridgeRun2 from "./assets/images/projects/bridgerun/gameplay1.png";
import bridgeRun3 from "./assets/images/projects/bridgerun/gameplay2.png";


import rebel0 from "./assets/images/projects/rebel/Rose.jpg"
import rebel1 from "./assets/images/projects/rebel/Rebel1.png"
import rebel2 from "./assets/images/projects/rebel/Rebel2.png"
import rebel3 from "./assets/images/projects/rebel/Rebel3.png"
import rebel4 from "./assets/images/projects/rebel/Rebel4.png"

import hexaDominoes0 from "./assets/images/projects/hexadominoes/Icon.jpg"
import hexaDominoes1 from "./assets/images/projects/hexadominoes/gameplay1.png"
import hexaDominoes2 from "./assets/images/projects/hexadominoes/gameplay2.png"
import hexaDominoes3 from "./assets/images/projects/hexadominoes/gameplay3.png"

import waterfall0 from "./assets/images/projects/waterfall/waterfall0.jpg"
import waterfall1 from "./assets/images/projects/waterfall/waterfall1.png"
import waterfall2 from "./assets/images/projects/waterfall/waterfall2.png"

// import ged from "./assets/images/arts/concept-art/Ged.PNG";
// import blueFloyed from "./assets/images/arts/concept-art/BlueFloyed.PNG";
// import veilOfDiscord from "./assets/images/arts/concept-art/VeilOfDiscord.PNG";
// import stunningLook from "./assets/images/arts/concept-art/StunningLook.PNG";
// import deatVoodoo from "./assets/images/arts/concept-art/DeathVoodoo.PNG";

import parallexBackground from "./assets/images/arts/DominoColorBanner.png";
import HDIcon from "./assets/images/projects/DominoColor/HexaDaminoesIcon.png";
import HDScreenShot1 from "./assets/images/projects/DominoColor/1st.png";
import HDScreenShot2 from "./assets/images/projects/DominoColor/2st.png";
import HDSimpleIcon from "./assets/images/projects/DominoColor/V1.jpg";

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      windowInnerHeight: window.innerHeight,
      foo: "bar",
      resumeData: {
        experience: [
          {
            technologies:[],
            mainTech: ["Unity", "C#", "DOTS"],
            years: "2021.4 - 2021.10",
            title: "Game Developer",
            company: "NoOp Army",
            // companyIcon: funtory,
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
            technologies: ["Major: Software Engineering"],
            mainTech: ["Thesis: Multi-Modal route advisory system"],
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
            technologies: ["Major: Hardware Engineering"],
            mainTech: [],
            years: "2013.09 - 2018.06",
            title: "Computer Engineering",
            company: "Iran University of Science and Technology",
            companyIcon: iust,
          }
        ],
        projects: [
          {
            title: "Playground",
            url: "https://moolfa.itch.io/playground",
            description: "o    Personal project which each level is a minimal prototype\n" +
              "o    Implemented different challenging mechanics such as rope simulation and AI based NPCs\n",
            thumbnail: playground0,
            images: [
              playground1,
              playground2,
              playground3,
            ],
            youtube: "o1SbL0i7x1M",
            startDate: 2020,
          },
          {
            title: "Hexa Dominoes",
            url: "https://moolfa.itch.io/playground",
            description: "o    Design and implement an original game\n" +
                "o    Add business systems for in-app purchase, ads pop-up and data collection\n",
            thumbnail: HDSimpleIcon,
            images: [
              HDScreenShot1,
              HDScreenShot2,
            ],
            youtube: "o1SbL0i7x1M",
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
            title: "Hexa Dominoes",
            url: "https://play.google.com/store/apps/details?id=com.moolfa.dominocolor",
            description: "o    My first published project in google play \n" +
                "o    Helped in developing level manager and designed new levels\n",
            thumbnail: hexaDominoes0,
            images: [
              hexaDominoes1,
              hexaDominoes2,
              hexaDominoes3,
            ],
            startDate: 2017,
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
        dominoes: [
          {
            title: "Hexa Dominoes",
            thumbnail: HDIcon,
            images: [
              HDScreenShot1,
              HDScreenShot1,
            ],
            youtube: "kRbxADt-gVc",
          },
          ],
        basic_info: {
          section_name: {
            experience: "My Journey",
            hexaDominoes: "Hexa Dominoes",
            projects: "Projects",
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
    var bannerHeight = height < width ? height / 3 : width / 2;
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
        <div style={{height: this.state.windowInnerHeight, flex: 1, display: "flex", flexDirection: "column", backgroundColor: '#324C6F'}}>
          <Banner/>
          <Header sharedData={this.state.sharedData.basic_info} />
        </div>
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <HexaDominoes
            resumeProjects={this.state.resumeData.dominoes}
            resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />

        {/*<Parallax bgImage={parallexBackground} strength={500}>*/}
        {/*  <div style={{ height: window.innerHeight }}>*/}
        {/*  </div>*/}
        {/*</Parallax>*/}
        <Parallax bgImage={parallexBackground} strength={500}>
          <div style={{ height: this.state.windowInnerHeight }}>
          </div>
        </Parallax>
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
