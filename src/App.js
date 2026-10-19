import React, { useEffect } from "react";
import "./App.scss";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import NowBuilding from "./components/NowBuilding";
import Work from "./components/Work";
import Journey from "./components/Journey";
import Tools from "./components/Tools";
import About from "./components/About";
import Contact from "./components/Contact";
import ProjectPage from "./components/ProjectPage";
import { useHashRoute } from "./hooks/useHashRoute";
import { useReveal } from "./hooks/useReveal";

function App() {
  const route = useHashRoute();
  const routeKey = route.page === "project" ? route.slug : "home";
  useReveal(routeKey);

  // Each game page starts at the top.
  useEffect(() => {
    if (route.page === "project") window.scrollTo(0, 0);
  }, [routeKey, route.page]);

  return (
    <>
      <Nav isHome={route.page === "home"} />
      {route.page === "project" ? (
        <ProjectPage slug={route.slug} />
      ) : (
        <main>
          <Hero />
          <NowBuilding />
          <Work />
          <Journey />
          <Tools />
          <About />
        </main>
      )}
      <Contact />
    </>
  );
}

export default App;
