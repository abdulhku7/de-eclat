import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Theme configuration
const theme = createTheme({
  palette: {
    primary: {
      main: '#1a1a1a',
    },
    secondary: {
      main: '#c9a77c',
    },
    background: {
      default: '#ffffff',
      paper: '#f8f8f8',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontFamily: "'Playfair Display', serif",
    },
    h2: {
      fontFamily: "'Playfair Display', serif",
    },
    h3: {
      fontFamily: "'Playfair Display', serif",
    },
  },
});

// Temporary Home component
const Home = () => (
  <div style={{ 
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '20px'
  }}>
    <h1 style={{ 
      fontFamily: "'Playfair Display', serif",
      fontSize: '3rem',
      marginBottom: '20px'
    }}>
      De Eclat
    </h1>
    <h2 style={{
      fontFamily: "'Poppins', sans-serif",
      fontSize: '1.5rem',
      fontWeight: 300,
      color: '#666'
    }}>
      Luxury Fashion from Hong Kong
    </h2>
    <p style={{
      marginTop: '40px',
      fontFamily: "'Poppins', sans-serif",
      maxWidth: '600px'
    }}>
      Coming soon with an exclusive collection of luxury fashion and lifestyle products.
    </p>
  </div>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
