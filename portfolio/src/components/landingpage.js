import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

export default class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src="https://cdn3.iconfinder.com/data/icons/avatar-set/512/Avatar03-512.png"
                        alt="Avatar"
                        className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Web Developer</h1>
                            <hr />
                            <p>HTML/CSS | Bootstrap | Javascript | React | ChartJS | Material Design | JQuary | PHP | MySql</p>
                            <div className="social-links">
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-linkedin-square"  aria-hidden="true"></i>
                                </a>

                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-github-square"  aria-hidden="true"></i>
                                </a>

                                {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-email-square"  aria-hidden="true"></i>
                                </a> */}

                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-linkedin-square"  aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}