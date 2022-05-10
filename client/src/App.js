import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import './App.css';

const App = () =>

    // <Router>
    //     <Fragment>
    //         <Navbar />
    //         <Landing />
    //         <Route exact path='/' component={ Landing } />
    //     </Fragment>
    // </Router>

    <Router>
        <Navbar />
        <Routes>
            <Route exact path='/' element={<Landing />}></Route>
            <Route exact path='/Login' element={<Login />}></Route>
            <Route exact path='/Register' element={<Register />}></Route>

            {/* <Route exact path='/update' element={<Update />}>
            <Route path = "courses" element={<herm/>}/>
          </Route> */}
            {/* <Route exact path="/hey" element={<Navigate replace to = "/update" />}></Route> */}
        </Routes>
    </Router>
export default App;