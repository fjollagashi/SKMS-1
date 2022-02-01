import React, { SyntheticEvent, useEffect, useState } from "react";
import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { ISchool } from "./Components/InterfaceRepository/ISchool";
import { Route, Routes, useNavigate } from "react-router-dom";
import { LogIn } from "./Components/LogIn/LogIn";
import { Home } from "./Components/Home/Home";
import { About } from "./Components/About/About";
import Children from "./Components/ParentInterface/Children/Children";
import { Profile } from "./Components/Profile/Profile";
import { Child } from "./Components/ParentInterface/Child/Child";
import Manage from "./Components/AdminInterface/Manage";
import agent from "./Agent/Agent";
import { IUser } from "./Components/InterfaceRepository/IUser";
import { observer } from "mobx-react-lite";
import { useStore } from "./Components/Stores/Store";

const FakeSchool: ISchool = {
  schoolId: "sdfs",
  schoolName: 'Shkolla Fillore dhe e Mesme e Ulët " Hysni Zajmi "',
  about: "dsfsdf",
  category: "Fillore",
  schoolAddress: "123-3",
  administrator: "",
};

export default observer(function App() {
  const { userStore } = useStore();
  const { loggedIn, logUser } = userStore;
  const [School, SetSchool] = useState<ISchool>({} as ISchool);
  const [User, setUser] = useState<IUser>({} as IUser);

  let navigate = useNavigate();

  const handleInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setUser({
      ...User,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const logOut = async () => {
    await userStore.logOut();
    SetSchool({} as ISchool);
    navigate("/");
  };

  const logIn = async () => {
    let message = await userStore.getToken(User);
    if (message === "OK") {
      SetSchool(FakeSchool);
      navigate("ballina");
    } else console.log(message);
  };

  useEffect(() => {
    if (loggedIn) SetSchool(FakeSchool);
  }, [loggedIn]);

  return (
    <>
      <Header School={School} LoggedIn={loggedIn} />
      <div id="background"></div>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <LogIn
                logIn={logIn}
                logged={loggedIn}
                buildUser={handleInputChange}
              />
            }
          />
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
});
