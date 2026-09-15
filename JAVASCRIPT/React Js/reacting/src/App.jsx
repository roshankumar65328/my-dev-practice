import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import SecondPage from "./Components/SecondPage";
import Card from "./Components/Card";
import VariableArrayMapping from "./Components/VariableArrayMapping";
import ComponentReusability from "./Components/ComponentReusability";
import ConditionalRendering from "./Components/ConditionalRendering";
import EventHandling from "./Components/EventHandling";
import UseState1 from "./Components/UseState1";
import UseState2 from "./Components/UseState2";
import UseState3 from "./Components/UseState3";
import UseState4 from "./Components/UseState4";
import UseState5 from "./Components/UseState5";
import UseState6 from "./Components/UseState6";
import UseState7 from "./Components/UseState7";
import UseState8 from "./Components/UseState8";
import UseState9 from "./Components/UseState9";
import UseState10Hooks from "./Components/UseState10Hooks";
import Props from "./Components/Props";
import Propsdrilling1 from "./Components/Propsdrilling1";
import Propsdrilling2 from "./Components/Propsdrilling2";
import Propsdrillingexercise from "./Components/Propsdrillingexercise";
import Propsdrillingexercisenav from "./Components/Propsdrillingexercisenav";
import UseRef from "./Components/UseRef";
import ControlledComponent from "./Components/ControlledComponent";
import { SiReacthookform } from "react-icons/si";   // ye shayad react-hook-form terminal se install karne pe aayi h
import ReactHookForm from "./Components/ReactHookForm";
import ReviseApp from "./Components/ReviseApp"

// import {Link, Route, Routes} from "react-router-dom";   // hame Link tag avail karayega
// import RoutingHome from "./Components/RoutingHome"
// import RouterContact from "./Components/RoutingContact"
// import RoutingAbout from "./Components/RoutingAbout";
import RoutingApp from "./Components/RoutingApp";

import IntegrateApi from "./Components/IntegrateApi"



function App() {


  const data = [
    { name: "Roshan", profession: "Software Engineer", image: "https://images.unsplash.com/photo-1627885432487-c99c16d7346d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvdHJhaXRzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500", friends: false },
    { name: "Noni", profession: "Web Developer", image: "https://images.unsplash.com/photo-1618393649689-c997c7455ef5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG90cmFpdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500", friends: false },
    { name: "Khalnayak", profession: "Frontend Engineer", image: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG90cmFpdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500", friends: false },
    { name: "Gangster", profession: "Backend Engineer", image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG90cmFpdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500", friends: false }
  ];

  const [realdata, setRealData] = useState(data);
  const handleFriendsButton = (Cardindex) => {
    setRealData((previous) => {                           // previous parameter matlab jo pehle value thi setRealData me
      return previous.map((item, index) => {
        if (index === Cardindex) {
          return { ...item, friends: !item.friends }
        }
        return item;
      })
    })
  }



  const data1 = [
    { image: "https://images.unsplash.com/photo-1627885432487-c99c16d7346d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvdHJhaXRzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500", name: "Roshan", artist: "Honey Singh", added: false },
    { image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG90cmFpdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500", name: "Prateek", artist: "Badshah", added: false },
    { image: "https://images.unsplash.com/photo-1627885432487-c99c16d7346d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvdHJhaXRzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500", name: "Prithvi", artist: "Stebin Ben", added: false },
    { image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG90cmFpdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500", name: "Bhaishab", artist: "Sukh-E", added: false }
  ];

const [realdata1, setRealData1] = useState(data1);
const handleFavourateButton = (index)=>{
  setRealData1((prev)=>{
    return prev.map((item, itemindex)=>{
      if(itemindex === index) return {...item, added: !item.added};
      return item;
    })
  })
}



  return (
    <div className="pb-[50vh]">
      <Navbar />
      <Hero />
      <SecondPage />
      {/* <Card/> */}
      {/* <VariableArrayMapping/> */}
      {/* <ComponentReusability/> */}
      <ConditionalRendering />
      <EventHandling />
      <UseState1 />
      <UseState2 />
      <UseState3 />
      <UseState4 />
      <UseState5 />
      <UseState6 />
      <UseState7 />
      <UseState8 />
      <UseState9 />
      <UseState10Hooks />
      <Props text="Know More" color="bg-red-700" />
      <Props text="Download" color="bg-blue-500" />
      <Propsdrilling1 />

      <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
        {realdata.map((item, index) => (
          <Propsdrilling2 values={item} key={index} index={index} handleClick={handleFriendsButton}  />
        ))}
      </div>


      <div className="w-full h-screen bg-zinc-300">
        <Propsdrillingexercisenav datas={realdata1} />
        <div className="px-20 flex gap-10 mt-10 flex-wrap">
          {realdata1.map((obj, index)=>(
            <Propsdrillingexercise datas = {obj} handleClick1 ={handleFavourateButton} index = {index} key = {index}/>
          ))}
        </div>
      </div>

      {/*for form handling used useRef, controlled components, react hook form.*/}
      <UseRef/>
      <ControlledComponent />
      <ReactHookForm />
      <ReviseApp />

      <RoutingApp />

      <IntegrateApi />

    </div>
  );
}

export default App;






// is jsx function ko multiple jsx element ko return karne ke liye ek div ko return karna hota hai
// hum iss div ki jageh     return (<>
//                                  -------
//                                  -------
//                                 </>
//                          );

// this method of returning the thing is called fragment 