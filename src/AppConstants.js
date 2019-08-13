import { useState, useEffect } from 'react';

export const DEFAULT_PATH = '/v1/home';
export const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
export const BLUE_SCHEME = { still: '#2a90bd', hovered: '#34b4eb' }
export const RED_SCHEME = { still: '#d13b3b', hovered: '#e64040' }
export const GREEN_SCHEME = { still: '#5eb555', hovered: '#6dd463' }

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

export function getColor() {
    const schemes = [BLUE_SCHEME, RED_SCHEME, GREEN_SCHEME];
    return schemes[Math.floor(Math.random() * schemes.length)];
}