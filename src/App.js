import React, { Component } from 'react';
import './App.css';
import { Content,Layout,Header,Navigation,Drawer} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title="Portfolio" scroll>
              <Navigation>
                  <Link to="/aboutme">Aboutme</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/projects">Project</Link>
                  <Link to="/resume">Resume</Link>
              </Navigation>
            </Header>
            <Drawer title="Portfolio">
              <Navigation>
                <Link to="/aboutme">Aboutme</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Project</Link>
                <Link to="/resume">Resume</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
        </Layout>
      </div>

    );
  }
}

export default App;
