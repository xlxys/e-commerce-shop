import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Header from './components/Header';
import Banner from './components/Banner';

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
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
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

    </div>
    </ThemeProvider >
  );
}

export default App;
