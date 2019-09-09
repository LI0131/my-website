import React from 'react';
import { Box, Text, Button } from 'grommet';
import { sectionStyle } from './HomeConstants';

export default props => {
    return(
        <Box style={{ height: sectionStyle }}>
            <Box pad='medium' style={{...sectionStyle, ...{
                background: `url(${props.background})`,
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
                        onClick={ () => props.history.push('/v1/resume') }
                    />
                </Box>
            </Box>
        </Box>
    )
}