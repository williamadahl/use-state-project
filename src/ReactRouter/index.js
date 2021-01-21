import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

/*Pages*/
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
/*Navbar*/

const ReactRouter = () => {
    return (
        <>
            <Router>
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
