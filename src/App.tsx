import {Suspense, useContext, useState} from 'react';
import "./styles/index.scss";
import {Route, Routes, Link} from "react-router-dom";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";



const App = () => {
    const {theme, toggleTheme} = useTheme();
    const bool = true;

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>ChangeTHEME</button>
            <Link to={'/about'}>About Page</Link>
            <Link to={'/'}>Main Page</Link>
            <Suspense fallback={<div>Loading....</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageLazy/>} />
                    <Route path={'/'} element={<MainPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;