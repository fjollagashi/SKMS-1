import React from "react";
import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { ISchool } from "./Components/InterfaceRepository/ISchool";
import { Route, Routes } from "react-router-dom";
import { LogIn } from "./Components/LogIn/LogIn";
import { Home } from "./Components/Home/Home";
import { About } from "./Components/About/About";
import { Children } from "./Components/ParentInterface/Children/Children";
import { Profile } from "./Components/Profile/Profile";
import { Child } from "./Components/ParentInterface/Child/Child";

const FakeSchool: ISchool = {
  schoolId: "sdfs",
  schoolName: 'Shkolla Fillore dhe e Mesme e Ulët " Hysni Zajmi "',
  about: "dsfsdf",
};

function App() {
  const [LoggedIn, SetLoggedIn] = React.useState<boolean>(true);
  const [School, SetSchool] = React.useState<ISchool>(FakeSchool);

  return (
    <>
      <Header School={School} LoggedIn={LoggedIn} />
      <div id="background"></div>
      <main>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="ballina" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="femijet" element={<Children />} />
          <Route path="femijet/:id" element={<Child />} />
          <Route path="profili" element={<Profile role={"PARENT"} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
