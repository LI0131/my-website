import { useState, useEffect } from 'react';

export const DEFAULT_PATH = '/v1/home';
export const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';

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