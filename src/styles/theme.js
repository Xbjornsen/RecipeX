import { createTheme } from '@material-ui/core/styles';

const theme = createTheme ({ 
    palette: {
        common: {
            black: '#000',
            white: '#000',
        },
        primary: {
            light: '#B3D1D9',
            main:'#3f50b5',
            dark: '#002884',
            contrastText:'#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
        error: {
            light: '#FFA28',
            main: 'rgb(255, 193, 7)',
            dark: 'FFB000',
            contrastText: '#000',
        },
        warning: {
            light: '#FF8A65',
            main: '#FF7043',
            dark: '#D84315',
            contrastText: '#000',
        },
        info: {
            light: '#64b5f6',
            main: '#2196f3',
            dark: '#1976d2',
            contrastText: '#fff',
        },
        success: {
            light: '#81c784',
            main: '#4caf50',
            dark: '#388e3c',
            contrastText: 'rgba(0,0,0, 0.87)',
        },
        action: {
            active: 'rgba(0, 0, 0, 0.54)',
            selected: 'rgba(0, 0, 0, 0.08)',
        },
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)',
        }
    },
})

export default theme;