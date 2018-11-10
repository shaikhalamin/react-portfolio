import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Landingpage from './landingpage';
import Aboutme from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Main = () => {

    return (
        <Switch>
            <Route exact path="/" component={Landingpage} />
            <Route exact path="/aboutme" component={Aboutme} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
        </Switch>
    )
}

export default Main;