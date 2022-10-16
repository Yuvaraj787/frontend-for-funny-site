import React from 'react';
import App from './App';
import Form from './Form';
import Mokkapage from './Mokkapage'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function All() {
	return (
     <BrowserRouter>
<Routes>
<Route path="/" element={<App />} />
<Route path="/create" element={<Form />} />
<Route path="/show" element={<Mokkapage />} />
</Routes>
     </BrowserRouter>
	)
}
export default All;