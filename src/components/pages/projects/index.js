import React, { useState, useEffect } from 'react';
import StackGrid from 'react-stack-grid';
import { Box } from 'grommet'
import { Header } from '../../header';
import { useWindowDimensions, getColumnWidth, getPageStart } from '../../../AppConstants';
import axios from 'axios';
import Project from './Project';

const Projects = () => {

    const windowWidth = useWindowDimensions();
    const columnWidth = getColumnWidth(windowWidth);
    const [gitInfo, setGitInfo] = useState(null);

    const parseGitInfo = (json) => {
        const allowed = ['description', 'html_url', 'name', 'forks', 'stargazers_count', 'watchers'];
        return json.map(item => Object.entries(item).filter(([key, val]) =>
            allowed.includes(key)).reduce((obj, [key, val]) => {
                obj[key] = val;
                return obj;
            }, {}));
    };

    useEffect(() => {
        axios.get('https://api.github.com/users/LI0131/repos')
            .then((res) => setGitInfo(parseGitInfo(res.data)));
    }, [setGitInfo]);

    return(
        <Box>
            <Header/>
            <StackGrid columnWidth={windowWidth > 684 ? columnWidth : windowWidth}>
                {gitInfo && gitInfo.map(item => <React.Fragment>
                    <Project info={item}/>
                </React.Fragment>)}
            </StackGrid>
        </Box>
    );
}

export default Projects;