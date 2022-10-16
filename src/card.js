import React from 'react';
function Card(props) {
	console.log(props);
	return (
     <div className="card">
         <div>
            <h3>{props.content}</h3>
         </div>
         <div>
             <h4>Evlo kevalamana mokkaiya pottavaritin peryar : <span>{props.title}</span></h4>
         </div>
     </div>
	)
}
export default Card;