import React from 'react';
import { Box, Text, Button } from 'grommet';
import { setActivePage } from '../actions';
import { Redirect } from 'react-router';
 
export default props => {

    const clickHandler = (props, name) => {
        props.dispatch(setActivePage(`/v1/${name}`))
        props.history.push(`/v1/${name}`)
    }

    return (
        <React.Fragment>
            <Box pad='small' fill background='dark-2'>
                <div display='inline'>
                    <Text size='32pt'> Liam McCann </Text>
                    <Button label='home' margin='small' plain onClick={ () => clickHandler(props, 'home') }/>
                    <Button label='about' margin='small' plain onClick={ () => clickHandler(props, 'about') }/>
                    <Button label='projects' margin='small' plain onClick={ () => clickHandler(props, 'projects') }/>
                    <Button label='contact' margin='small' plain onClick={ () => clickHandler(props, 'contact') }/>
                </div>
            </Box>
        </React.Fragment>
    );
};