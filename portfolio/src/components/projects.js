import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton,CardText } from "react-mdl";

export default class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab:0 };
    }
toggleCategories(){
    if(this.state.activeTab === 0){
        return(
            <div className="projects-grid">
                {/* project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff',height: '176px', background: 'url("https://cdn.worldvectorlogo.com/logos/react-1.svg") center / cover'}}>
                React Project #1
            </CardTitle>
            <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</CardText>
            <CardActions border>
                <Button colored> GitHub</Button>
                <Button colored> Code Pen</Button>
                <Button colored> Live Demo</Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
       {/* project 2 */}
       <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff',height: '176px', background: 'url("https://cdn.worldvectorlogo.com/logos/react-1.svg") center / cover'}}>
                React Project #2
            </CardTitle>
            <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</CardText>
            <CardActions border>
                <Button colored> GitHub</Button>
                <Button colored> Code Pen</Button>
                <Button colored> Live Demo</Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
           {/* project 3 */}
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff',height: '176px', background: 'url("https://cdn.worldvectorlogo.com/logos/react-1.svg") center / cover'}}>
                React Project #3
            </CardTitle>
            <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</CardText>
            <CardActions border>
                <Button colored> GitHub</Button>
                <Button colored> Code Pen</Button>
                <Button colored> Live Demo</Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
        </div>
        )
    }
    else if(this.state.activeTab === 1){
        return(
        <div><h1>This is Angular</h1></div>
        )
    }
    else if(this.state.activeTab === 2){
        return(
        <div><h1>This is VueJS</h1></div>
        )
    }
    else{
        return(
        <div><h1>This is MongoDB</h1></div>
        )
    }
}
    render() {
        return (
            <div className="category-tabs">
               <Tabs activeTab={ this.state.activeTab }
                onChange={( tabId ) => 
                this.setState({ activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>
               </Tabs>
              
                    <Grid className="">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>

                   
                    
              
            </div>
        )
    }
}