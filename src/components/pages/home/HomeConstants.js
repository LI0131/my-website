/*
* Define styles
*/

export const sectionStyle = {
    height: '100vh',
    width: '100vw'
}

/*
* Define Functions
*/

export function getSectionSize(pageStart) {
    return { 
        width: `100vw`,
        height: window.innerHeight - pageStart
    }
};