import React from "react";
import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { ISchool } from "./Components/InterfaceRepository/ISchool";
import { Route, Routes, useNavigate } from "react-router-dom";
import { LogIn } from "./Components/LogIn/LogIn";
import { Home } from "./Components/Home/Home";
import { About } from "./Components/About/About";
import { Children } from "./Components/ParentInterface/Children/Children";
import { Profile } from "./Components/Profile/Profile";
import { Child } from "./Components/ParentInterface/Child/Child";
import Manage from "./Components/AdminInterface/Manage";

const FakeSchool: ISchool = {
  schoolId: "sdfs",
  schoolName: 'Shkolla Fillore dhe e Mesme e Ulët " Hysni Zajmi "',
  about: "dsfsdf",
  category: "Fillore",
  schoolAddress: "123-3",
  administrator: "",
};

function App() {
  const [LoggedIn, SetLoggedIn] = React.useState<boolean>(false);
  const [School, SetSchool] = React.useState<ISchool>({} as ISchool);

  let navigate = useNavigate();

  const logOut = (): void => {
    localStorage.removeItem("ROLE");
    SetLoggedIn(false);
    SetSchool({} as ISchool);
    navigate("/");
  };

  const logIn = (): void => {
    localStorage.setItem("ROLE", "ADMIN");
    SetSchool(FakeSchool);
    SetLoggedIn(true);
    navigate("ballina");
  };

  return (
    <>
      <Header School={School} LoggedIn={LoggedIn} />
      <div id="background"></div>
      <main>
        <Routes>
          <Route path="/" element={<LogIn logIn={logIn} />} />
          <Route path="ballina" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="femijet" element={<Children />} />
          <Route path="femijet/:id" element={<Child />} />
          <Route path="profili" element={<Profile logOut={logOut} />} />
          <Route path="menaxho" element={<Manage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
