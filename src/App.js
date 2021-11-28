import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import styled from "styled-components";
import About from "./Components/About/About";
import Skill from "./Components/Skill/Skill";

function App() {
  return (
    <div className="App">
      <MainContainer>
        <Header />
        <div>
          <About />
          <Skill />
        </div>
      </MainContainer>
    </div>
  );
}

export const MainContainer = styled.div`
  display: flex;
`;

export default App;
