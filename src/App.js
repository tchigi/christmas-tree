import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/ToysMain/Main/Main";
import {Footer} from "./components/Footer/Footer";
import {useState} from "react";

function App() {

    const currentPage = useState('Home')

    return (
        <>
            <div className={`wrapper ${currentPage[0] === 'Home' ? 'home-wrapper' : ''}`}>
                <Header currentPage={currentPage}/>
                <Main currentPage={currentPage}/>
                <Footer/>
            </div>
        </>
    );
}
console.log('Добрый день. Сделаны все пункты кроме доп. функционала.')
export default App;
