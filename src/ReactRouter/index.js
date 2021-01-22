import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

/*Pages*/
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Navbar from './Navbar';
import Person from './Person';
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
                    /*Here we can se the route pathing in effect, and we can just set Person as a children component*/
                    <Route path='/person/:id' children={<Person/>}></Route>
                <Route path='*'>
                    <Error/>
                </Route>
            </Switch>
            </Router>
        </>

    );
}
export default ReactRouter;
