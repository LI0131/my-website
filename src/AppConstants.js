import React, { useState, useEffect } from 'react';

/*
* Define Values
*/

export const DEFAULT_PATH = '/v1/home';
export const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
export const BLUE_SCHEME = { still: '#2a90bd', hovered: '#34b4eb' }
export const RED_SCHEME = { still: '#d13b3b', hovered: '#e64040' }
export const GREEN_SCHEME = { still: '#5eb555', hovered: '#6dd463' }

/*
* Define Styles
*/

export const headerStyle = {
    zIndex: '10',
    overflow: 'hidden',
    position: 'fixed',
    top: 0,
    width: '100%'
};

export const iconStyle = {
    float: 'right',
    marginTop: '15px',
    marginRight: '15px'
}

export const primaryStyle = {
    fontWeight: 'bold',
    display: 'inline',
    fontStyle: 'normal',
}

export const tertiaryStyle = {
    fontWeight: 'lighter',
    fontStyle: 'italic',
}

/*
* Define Functions
*/

export function MAP_STATE_TO_PROPS(state) {
    return {
        activeIndex: state.NavigationReducer.activePage,
    }
};

function getWindowWidth() {
    const { innerWidth: width } = window;
    return width;
};

export function useWindowDimensions() {
    const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  
    useEffect(() => {
      function handleResize() {
        setWindowWidth(getWindowWidth());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowWidth;
};

export function getColumnWidth(width) {
    return width < 480 ? '100%' : (
        width < 960 ? '50%' :
        '33%'
    );
};

export function getPageStart(width) {
    return width > 590 ? '9vh' : '15vh'
};

export function getColor() {
    const schemes = [BLUE_SCHEME, RED_SCHEME, GREEN_SCHEME];
    return schemes[Math.floor(Math.random() * schemes.length)];
};

export const Dash = () => {
    return (
        <div style={primaryStyle}> {" | "} </div>
    )
};