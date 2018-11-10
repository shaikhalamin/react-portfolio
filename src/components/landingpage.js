import React,{ Component } from 'react';
import { Grid,Cell } from 'react-mdl';


class Landingpage extends Component{
    
    render() {
        return (
            <div style={{ margin:'auto',width:'100%' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                        src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                         className="avatar-img" alt=""/>
                        
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>PHP/Laravel | HTML/CSS | Javascript | NodeJs | React | MongoDB</p>
                            <div className="social-icons">
                                <a href="https://google.com">
                                    <i class="fa fa-github fa-lg" aria-hidden="true"></i>
                                </a>|
                                <a href="https://google.com">
                                    <i class="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
                                </a>|
                                <a href="https://google.com">
                                    <i class="fa fa-youtube-play fa-lg" aria-hidden="true"></i>
                                </a>|
                                <a href="https://google.com">
                                    <i class="fa fa-github fa-lg" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }

}

export default Landingpage;