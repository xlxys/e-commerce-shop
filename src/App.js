import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Header from './components/Header';
import Banner from './components/Banner';
import Categories from './components/Categories';
import Products from './components/Products';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#252B48',
      light: '#445069',
      dark: '#0d1117',
      contrastText: '#f1efef',
    },
    secondary: {
      main: '#5B9A8B',
      light: '#F7E987',
    },
    white: {
      main: '#f1efef',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label': {
            color: '#f1efef',
          },
          '& label.Mui-focused': {
            color: '#f1efef',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#f1efef',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#f1efef',
            },
            '&:hover fieldset': {
              borderColor: '#f1efef',
              borderWidth: '0.15rem',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#f1efef',
            },
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          textTransform: 'initial',
          fontSize: '1rem',
        },
      },
    },
  },
  typography: {
    fontFamily: [
      '"Segoe UI"',
      'Roboto',
      'Arial',
      'sans-serif',
      '"Open Sans"',

    ].join(','),
  },
});



function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Header />
      <Banner />
      <Categories />
      <Products />
      <Footer />
    </div>
    </ThemeProvider >
  );
}

export default App;
