import React from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/login/login";
import Footer from "./components/Footer/Footer";


const App = (props) => {

   console.log(props)


    return (

        <div className="app__wrapper">
            <HeaderContainer/>
            <NavBar/>
            <div className="app__wrapper-content">
                <Routes>
                    <Route path="/Profile/:userId" element={<ProfileContainer/>}/>
                    <Route path="/Dialogs" element={<DialogsContainer/>}/>
                    <Route path="/Users" element={<UsersContainer/>}/>
                    <Route path="/Login" element={<LoginPage />}/>
                    <Route path="/News" element={<News/>}/>
                    <Route path="/Music" element={<Music/>}/>
                    <Route path="/Settings" element={<Settings/>}/>
                    <Route path="*" element={<DialogsContainer/>}/>
                </Routes>
            </div>
            <Footer />
        </div>

    );
}
export default App;
