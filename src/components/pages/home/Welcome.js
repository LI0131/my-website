import React from 'react';
import { Box, Text, Button } from 'grommet';
import { sectionStyle } from './HomeConstants';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import * as AppActions from '../../../actions';
import PropTypes from 'prop-types';

const Welcome = ({ setActivePage, background }) => {

    const history = useHistory();

    return(
        <Box style={{ height: sectionStyle }}>
            <Box pad='medium' style={{...sectionStyle, ...{
                background: `url(${background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}}>
                <Box align='center' pad={{
                    vertical: '35vh',
                    horizontal: '40vw'
                }}>
                    <Text color='#ffffff' size='16pt'>
                        Welcome to my website.
                    </Text>
                    <Button
                        label='About Me'
                        margin='small'
                        color='dark-2'
                        onClick={ () => setActivePage('/v1/resume') && history.push('/v1/resume') }
                    />
                </Box>
            </Box>
        </Box>
    )
};

Welcome.propTypes = {
    background: PropTypes.any,
    setActivePage: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
    setActivePage: (url) => dispatch(AppActions.setActivePage(url))
});

export default connect(null, mapDispatchToProps)(Welcome);