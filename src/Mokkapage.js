import React from 'react';
import Card from './card';
import {useState,useEffect} from 'react';
function Mokkapage() {
	const [mokkais,setquestions] = useState([]);
  fetch("https://backend-for-funnysite.herokuapp.com/get").then(
    x => x.json()
  ).then((y) => {
    setquestions(y);
  })
	return (
     <div className="mpage">
     <div className="title"><h1>Prabala Mokkaigal</h1></div>
     <br />
          {mokkais.map(mokkai=>{
          	return <Card title={mokkai.name} content={mokkai.mokkka} />
          })}
     </div>
	)
}
export default Mokkapage;
