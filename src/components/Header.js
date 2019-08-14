import React from 'react';
import { Box, Text, Button } from 'grommet';
import { setActivePage } from '../actions';
import { headerStyle, iconStyle } from '../AppConstants';
import { Github, Linkedin, Mail } from 'grommet-icons';
import ContactButton from './ContactButton';
 
export default props => {

    const clickHandler = (props, name) => {
        props.dispatch(setActivePage(`/v1/${name}`))
        props.history.push(`/v1/${name}`)
    }

    return (
        <React.Fragment>
            <Box pad='small' background='dark-2' style={headerStyle}>
                <div display='inline'>
                    <div style={{float: 'left'}}>
                        <Text size='32pt'> Liam McCann </Text>
                        <Button label='home' margin='small' plain onClick={ () => clickHandler(props, 'home') }/>
                        <Button label='resume' margin='small' plain onClick={ () => clickHandler(props, 'resume') }/>
                        <Button label='projects' margin='small' plain onClick={ () => clickHandler(props, 'projects') }/>
                    </div>
                    <ContactButton to='https://github.com/LI0131'>
                        <Github/>
                    </ContactButton>
                    <ContactButton to='https://www.linkedin.com/in/william-mccann-a83558138/'>
                        <Linkedin/>
                    </ContactButton>
                    <ContactButton to='mailto:mccannw20@mail.wlu.edu'>
                        <Mail/>
                    </ContactButton>
                </div>
            </Box>
        </React.Fragment>
    );
};