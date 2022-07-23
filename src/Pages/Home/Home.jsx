import './Home.css';
import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import Navbar from "../../components/Navbar/Navbar.jsx";
import SearchBar from '../../components/SearchBar/SearchBar';
import Footer from '../../components/Footer/Footer';

export default function Home() {
  
  return(
    <>
      <Navbar/>
      <SearchBar/>
      <MainContainer charactersPerPage={12}/>
      <Footer/>
    </>
  )
}