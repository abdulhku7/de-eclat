import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton,
  Container,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  useMediaQuery,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Stack
} from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

// Create a custom theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1C2A4E', // Navy
    },
    secondary: {
      main: '#D4AF37', // Gold
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1E1E1E', // Slightly lighter dark
    },
    text: {
      primary: '#F5F5F5', // Off-white
      secondary: '#D4AF37', // Gold
    },
  },
  typography: {
    fontFamily: "'Playfair Display', 'Lato', serif",
    h1: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 300,
    },
    h2: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 300,
    },
    h3: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 400,
    },
    body1: {
      fontFamily: "'Lato', sans-serif",
    },
    button: {
      fontFamily: "'Lato', sans-serif",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'none',
          padding: '8px 24px',
        },
        outlined: {
          borderColor: '#D4AF37',
          color: '#D4AF37',
          '&:hover': {
            backgroundColor: '#D4AF37',
            color: '#1C2A4E',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E1E1E',
          borderRadius: 0,
        },
      },
    },
  },
});

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'background.paper', boxShadow: 1 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>
          De Eclat
        </Typography>
        <Stack direction="row" spacing={4}>
          <Button color="inherit">Watches</Button>
          <Button color="inherit">Bags</Button>
          <Button color="inherit">Jewelry</Button>
        </Stack>
        <IconButton color="inherit" edge="end">
          <ShoppingBagIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(28, 42, 78, 0.7)',
        },
      }}
    >
      <Box sx={{ position: 'relative', textAlign: 'center', zIndex: 1 }}>
        <Typography variant="h1" component="h1" sx={{ mb: 4, fontWeight: 300 }}>
          Modern Luxury
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Discover our collection of timeless pieces
        </Typography>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
        >
          Explore Now
        </Button>
      </Box>
    </Box>
  );
}

function FeaturedProducts() {
  const products = [
    { id: 1, name: 'Royal Chronograph', category: 'Watch', price: '$7,999', image: '/placeholder.jpg' },
    { id: 2, name: 'Sovereign Tote', category: 'Bag', price: '$3,499', image: '/placeholder.jpg' },
    { id: 3, name: 'Crown Jewel Necklace', category: 'Jewelry', price: '$12,999', image: '/placeholder.jpg' },
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
          Featured Collection
        </Typography>
        <Grid container spacing={6}>
          {products.map((product) => (
            <Grid item xs={12} md={4} key={product.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="400"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    transition: '0.3s',
                    '&:hover': {
                      opacity: 0.9,
                    },
                  }}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" component="h3" sx={{ mb: 1 }}>
                    {product.name}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 1 }}>
                    {product.category}
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2, color: 'secondary.main' }}>
                    {product.price}
                  </Typography>
                  <Button variant="outlined" color="secondary" fullWidth>
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

function Footer() {
  return (
    <Box sx={{ bgcolor: 'background.paper', color: 'text.primary', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontFamily: "'Playfair Display', serif", mb: 1 }}>
              De Eclat
            </Typography>
            <Typography variant="body2" color="secondary.main">
              Timeless elegance, reimagined.
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Stack direction="row" spacing={4} justifyContent={{ xs: 'center', md: 'flex-end' }}>
              <Button color="inherit">About</Button>
              <Button color="inherit">Contact</Button>
              <Button color="inherit">Shipping</Button>
              <Button color="inherit">Returns</Button>
            </Stack>
          </Grid>
        </Grid>
        <Typography variant="body2" color="secondary.main" align="center" sx={{ mt: 4 }}>
          2024 De Eclat. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Hero />
          <FeaturedProducts />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
