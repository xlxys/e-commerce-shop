import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Header from './components/Header';

const theme = createTheme({
  palette: {
    primary: {
      main: '#252B48',
      light: '#445069',
      dark: '#0d1117',
      contrastText: '#F1EFEF',
    },
    secondary: {
      main: '#5B9A8B',
      light: '#F7E987',
    }
  },
});



function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Header />
    </div>
    </ThemeProvider >
  );
}

export default App;
