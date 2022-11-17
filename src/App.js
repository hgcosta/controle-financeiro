import React from "react";
import Form from "./components/form";
import Header from "./components/header";
import Resume from "./components/resume";
import GlobalStyle from "./styles/global";



const App = ()=>{
    return (
     <>
        <Header/>
        <Resume/>
        <Form />
        <GlobalStyle/>
     </>
    
    );
};


export default App;