import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Furnitur from './furniturejs';
import React from 'react';
import { Route, Routes, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import Manufac from './manufac.js';
// import {Header} from './components/common'
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';
import Testimonial from './pages/Testimonial/Testimonial';
import Navbar from './components/common/navbar';
import CarouselContainer from './components/slider';
function App() {
 
 return(
   <>
   
  <div className="App">
    {/* <Header /> */}
    <Navbar/>
    <CarouselContainer />
<Router>   
  {/* < Route exact path="/" element = {<Furnitur/>} />  */}
<main>
     <Switch>
       <Route path="/" exact>
         <Furnitur/>
       </Route>
       <Route path="/about" exact>
         <About/>
       </Route>
       <Route path="/service" exact>
         <Services/>
       </Route>
       <Route path="/testimonial" exact>
         <Testimonial/>
       </Route>
       <Route path="/contact" exact>
         <Contact/>
       </Route>
       <Redirect to="/" />
     </Switch>
   </main>
</Router>



   </div>
  
  </>
   )

}

  export default App;