import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

export default class contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Kuldeep</h2>
                        <img 
                        src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                        alt="Avatar"
                        style={{height:'200px'}}
                        />
                        <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true" />
                                   (123) 456-7890
                                    </ListItemContent>
                            </ListItem>

                            <ListItem>
                            <ListItemContent style={{fontSize:'25px'}}>
                                    <i className="fa fa-fax" aria-hidden="true" />
                                   (123) 456-7890
                                    </ListItemContent>
                            </ListItem>

                            <ListItem>
                            <ListItemContent style={{fontSize:'25px'}}>
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                   someone@example.com
                                    </ListItemContent>
                            </ListItem>
                            <ListItem>

                            <ListItemContent style={{fontSize:'25px'}}>
                                    <i className="fa fa-skype" aria-hidden="true" />
                                   MySkypeId
                                    </ListItemContent>
                            </ListItem>
                         </List>
                        </div>
                       
                    </Cell>
                </Grid>
            </div>
        )
    }
}
