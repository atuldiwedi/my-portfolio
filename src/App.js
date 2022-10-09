import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import styled from "styled-components";
import SkillsPage from "./Pages/SkillsPage/SkillsPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainContainer>
          <Header />
          <MainContent>
            <Routes>
              <Route exact path="/my-portfolio" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skill" exact element={<SkillsPage />} />
              <Route path="/contact-me" exact element={<ContactPage />} />
              <Route path="/project" exact element={<ProjectPage />} />
            </Routes>
          </MainContent>
        </MainContainer>
      </div>
    </BrowserRouter>
  );
}

export const MainContainer = styled.div`
  display: flex;
`;

export const MainContent = styled.div`
  margin-left: 15%;
  width: 100%;
`;

export default App;
