import { createMuiTheme } from '@material-ui/core/styles';

const themeMain = '#ff3333'

const textGrey = '#4d4d4d'
const green = '#009900'
const error = '#ff3333'


// Create a theme instance.
const theme = createMuiTheme({
    // palette: {
    //
    // },
    typography: {
        tab: {
            fontFamily: 'Raleway',
            textTransform: 'none',
            fontWeight: '500',
            fontSize: '1rem',
        },
        h1: {
            color: themeMain,
            fontFamily:'Raleway',
            fontWeight: 400,
            fontSize: '5rem',
        },
        h3: {
            color: themeMain,
            fontFamily:'Raleway',
            fontWeight: 400,
            fontSize: '3rem',
        },
        h5: {
            color: themeMain,
            fontFamily: 'Raleway',
            fontSize: '2rem'
        },
        h6: {
            color: themeMain,
            fontFamily: 'Raleway',
            fontSize: '1.5rem'
        },
        body1: {
            color: textGrey,
            fontFamily:'Raleway',
            fontSize: '1.2rem',
            lineHeight: 1,
        },
        subtitle2: {
            color: textGrey,
            fontFamily:'Raleway',
            fontSize: '1rem',
            lineHeight: 1,
        },
        caption: {
            color: textGrey,
            fontFamily:'Raleway',
            fontSize: '0.5rem',
            lineHeight: 1,
        }
    },
    overrides: {
        MuiFormLabel: {
            root: {
                fontSize: '1rem'
            }
        },
        MuiInputLabel: {
            formControl: {
                top: '-7px'
            }
        },
        MuiOutlinedInput: {
            input: {
                padding: 8
            }
        },
        MuiRating: {
            root: {
                color: themeMain
            }
        },

    }
});

export default theme;