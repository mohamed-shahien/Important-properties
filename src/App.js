import React, { useState } from "react";
import {Container} from 'react-bootstrap'
import NavScrollExample from "./components/NavScrollExample";
import Header from "./components/Header";
import './App.css'
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import { data } from "./data";

function App() {
  const [cards,setCardes]=useState(data);

  // map the category
  const btnfilter = ["الكل",...new Set(data.map((i)=> i.category))] //not dublecait
  console.log(btnfilter);

  // filter the category 
  const FilterCategory = (cat)=>{
    if(cat === "الكل"){
      setCardes(data)
    }else{
      const newar = data.filter((item)=> item.category === cat);
      setCardes(newar);
    }
  }
  
  const Filtersearch = (word)=>{
    if(word !== ""){
      const newar = data.filter((item)=> item.title === word);
      setCardes(newar);
    }
  }




  return (
    <div className="color_body font">
      <NavScrollExample Filtersearch={Filtersearch}/>
        <Container>
          <Header/>
          <Category clicked={FilterCategory} allCat={btnfilter}/>
          <ItemsList cards={cards}/>
        </Container>
    </div>
  );
}

export default App;
