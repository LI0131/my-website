import React from 'react';
import { Box, Text, Button } from 'grommet';
import { headerStyle } from '../AppConstants';
import { Github, Linkedin, Mail } from 'grommet-icons';
import ContactButton from './ContactButton';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as AppActions from '../actions';
 
const Header = ({ setActivePage }) => {

    const history = useHistory();

    const clickHandler = name => {
        setActivePage(`/v1/${name}`)
        history.push(`/v1/${name}`)
    };

    return (
        <React.Fragment>
            <Box pad='small' background='dark-2' style={headerStyle}>
                <div display='inline'>
                    <div style={{float: 'left'}}>
                        <Text size='32pt'> Liam McCann </Text>
                        <Button label='home' margin='small' plain onClick={ () => clickHandler('home') }/>
                        <Button label='resume' margin='small' plain onClick={ () => clickHandler('resume') }/>
                        <Button label='projects' margin='small' plain onClick={ () => clickHandler('projects') }/>
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

Header.propTypes = {
    setActivePage: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
    setActivePage: (url) => dispatch(AppActions.setActivePage(url))
});

export default connect(null, mapDispatchToProps)(Header);