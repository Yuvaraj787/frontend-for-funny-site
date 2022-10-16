import React from 'react';
function Form() {
	return (
     <div className="form">
     <div className="title">
        <h1>Upload a mokkai</h1>
     </div>
         <form action="http://localhost:5000/post" method="post">
         <h3>Your name:</h3>
               <input className="input" type='text' placeHolder="Your name" name="name" /><br />
         <h3>Your valuable mokkai:</h3>
            <textarea name="mokka" className="input" placeHolder="Unga mokkaiya inga podunga" cols="30" rows="10">
            </textarea><br />
         <input type="submit" className="addbtn" value="Add" />
         </form>
         <div className="note">
          <h4>Each and every mokkai is valuable to us</h4>
         </div>
     </div>
	)
}
export default Form;