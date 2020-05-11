import './header.scss';

import React from 'react';
import { Box, Text, Button } from 'grommet';
import { Github, Linkedin, Mail } from 'grommet-icons';
import ContactButton from '../ContactButton';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as AppActions from '../../actions';
import Menu from './Menu';
 
const Header = ({ setActivePage }) => {

    const history = useHistory();

    const clickHandler = name => {
        setActivePage(`/v1/${name}`)
        history.push(`/v1/${name}`)
    };

    return (
        <React.Fragment>
            <Box className='header' pad='small' background='dark-2'>
                <Text size='32pt'> Liam McCann </Text>
                <div className='header-content'>
                    <Button label='home' margin='small' plain onClick={ () => clickHandler('home') }/>
                    <Button label='resume' margin='small' plain onClick={ () => clickHandler('resume') }/>
                    <Button label='projects' margin='small' plain onClick={ () => clickHandler('projects') }/>
                    <ContactButton to='https://github.com/LI0131'>
                        <Github className='header-icon-button'/>
                    </ContactButton>
                    <ContactButton to='https://www.linkedin.com/in/william-mccann-a83558138/'>
                        <Linkedin className='header-icon-button'/>
                    </ContactButton>
                    <ContactButton to='mailto:mccannw20@mail.wlu.edu'>
                        <Mail className='header-icon-button'/>
                    </ContactButton>
                </div>
                <Menu
                    items={[
                        <Button label='home' margin='small' plain onClick={ () => clickHandler('home') }/>,
                        <Button label='resume' margin='small' plain onClick={ () => clickHandler('resume') }/>,
                        <Button label='projects' margin='small' plain onClick={ () => clickHandler('projects') }/>,
                    ]}
                />
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