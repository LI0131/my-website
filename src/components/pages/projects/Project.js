import React from 'react';
import PropTypes from 'prop-types';
import HoverableCard from '../../HoverableCard';
import { Box, Text } from 'grommet';
import { Star, Network, View } from 'grommet-icons';

const Project = ({ info }) => <React.Fragment>
    <Box pad='medium'>
        <HoverableCard isClickable url={ info.html_url }>
            <React.Fragment>
                <Text size='xlarge' margin='small' weight='bold'> { info.name } </Text>
                {info.description && <Text margin='medium' textAlign='center'> { info.description } </Text>}
                <div style={{ margin: '20px' }}>
                    <div style={{ display: 'inline', margin: '10px'}}>
                        <Star color='gold'/> <Text size='large'> { info.stargazers_count } </Text>
                    </div>
                    <div style={{ display: 'inline', margin: '10px'}}>
                        <Network color='navy'/> <Text size='large'> { info.forks } </Text>
                    </div>
                    <div style={{ display: 'inline', margin: '10px'}}>
                        <View color='black'/> <Text size='large'> { info.watchers } </Text>
                    </div>
                </div>
            </React.Fragment>
        </HoverableCard>
    </Box>
</React.Fragment>;

Project.propTypes = {
    info: PropTypes.shape({
        description: PropTypes.string,
        forks: PropTypes.number,
        html_url: PropTypes.string,
        name: PropTypes.string,
        stargazers_count: PropTypes.number,
        watchers: PropTypes.number
    })
};

export default Project;