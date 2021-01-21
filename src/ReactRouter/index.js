import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

/*Pages*/
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Navbar from './Navbar';
/*Navbar*/

const ReactRouter = () => {
    return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/about'>
                    <About/>
                </Route>
                <Route path='/people'>
                    <People/>
                </Route>
                <Route path='*'>
                    <Error/>
                </Route>
            </Switch>
            </Router>
        </>

    );
}
export default ReactRouter;
