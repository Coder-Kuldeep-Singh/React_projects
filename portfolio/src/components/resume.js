import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './education'
import Experience from './experience'    
import Skills from './skills'    



export default class resume extends Component {
    render() {
        return (
            <div style={{background:'linear-gradient(to right, #243B55, #141E30)'}}>
               <Grid style={{margin:'0'}}>
                   <Cell col={4}  shadow={5}>
                       <div style={{textAlign:'center',margin:'0',padding:'0'}}>
                       <img 
                       src="https://cdn3.iconfinder.com/data/icons/avatar-set/512/Avatar03-512.png"
                       alt="Avatar"
                       style={{height:'200px'}}
                       />    
                       </div> 
                       <div style={{paddingLeft:'2em',paddingTop:'0'}}>
                       <h2 style={{paddingTop:'2em',color:'white'}}>Kuldeep</h2>                 
                       <h4 style={{color:'gray'}}>Programmer</h4>
                       <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
                       <p style={{color:'white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                       </p>
                       <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
                       <h5 style={{color:'white'}}>Address</h5>
                       <p style={{color:'white'}}>Lorem Ipsum is simply dummy text </p>
                       <h5 style={{color:'white'}}>Phone</h5>
                       <p style={{color:'white'}}>(123) 456-7890</p>
                       <h5 style={{color:'white'}}>Email</h5>
                       <p style={{color:'white'}}>someone@example.com</p>
                       <h5 style={{color:'white'}}>Web</h5>
                       <p style={{color:'white'}}>mywebsite.com</p>
                       <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
                       </div> 
                   </Cell>

                   <Cell className="resume-right-col" col={8} shadow={5}>
                       <h2>Education</h2>
                       <Education 
                       startYear={2005}
                       endYear={2017}
                       schoolName="My University"
                       schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                       />

                       <Education 
                       startYear={2017}
                       endYear={2021}
                       schoolName="My 2nd University"
                       schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                       />
                       <hr style={{borderTop:'3px solid #e22947'}}/>
                       <h2>Experience</h2>
                       <Experience 
                       startYear={ 2019}
                       endYear={ 2019}
                       jobName="Web Developer"
                       jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                       />
                       <hr style={{borderTop:'3px solid #e22947'}}/>
                       <h2>Skills</h2>
                       <Skills
                       skill="HTML/CSS"
                       progress={100}
                       />
                        <Skills
                       skill="JavaScript"
                       progress={80}
                       />
                        <Skills
                       skill="React"
                       progress={50}
                       />
                         <Skills
                       skill="PHP"
                       progress={60}
                       />
                   </Cell>

               </Grid>
            </div>
        )
    }
}
