
import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Home } from './Home';
// import { FourOhFour } from './fourohfour';
import { About } from './About';
// import {Provider} from "react-redux";
// import { Home } from './frontend/home/Home';
// import { FourOhFour } from './fourohfour';



// export const App = (
//   <>
//     <Provider>
//       <BrowserRouter>
//         <Switch>
//           <Route exact path='/' component={Home} />
//           <Route component={FourOhFour} />
//         </Switch>
//       </BrowserRouter>
//     </Provider>
//   </>
// )



// function App() {
//   return (
//     <div className="App">
//       <h1>Hello, Vicios</h1>
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div className='App'>
      <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App;