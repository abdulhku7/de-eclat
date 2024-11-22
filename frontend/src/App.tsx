import React, { useState } from 'react';
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

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontSize: '3rem',
      fontWeight: 300,
      letterSpacing: '0.02em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 300,
      letterSpacing: '0.02em',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '8px 24px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#000000',
        },
      },
    },
  },
});

const menuItems = ['Watches', 'Bags', 'Jewelry'];

const products = [
  { id: 1, name: 'Classic Chronograph', category: 'Watch', price: '$5,999', image: 'https://via.placeholder.com/400' },
  { id: 2, name: 'Elegant Tote', category: 'Bag', price: '$2,499', image: 'https://via.placeholder.com/400' },
  { id: 3, name: 'Diamond Necklace', category: 'Jewelry', price: '$7,999', image: 'https://via.placeholder.com/400' },
];

const footerLinks = [
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Shipping', href: '/shipping' },
  { name: 'Returns', href: '/returns' },
];

function Header() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar sx={{ px: { xs: 2, sm: 6 }, py: 2 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontSize: '1.5rem',
            fontWeight: 600,
          }}
        >
          De Eclat
        </Typography>
        {!isMobile && (
          <Stack direction="row" spacing={4}>
            {menuItems.map((item) => (
              <Button
                key={item}
                color="inherit"
                sx={{
                  '&:hover': {
                    color: 'text.secondary',
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Stack>
        )}
        <IconButton
          color="inherit"
          sx={{
            ml: 2,
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
          }}
        >
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
        color: 'white',
        backgroundImage: 'url(https://via.placeholder.com/1920x1080)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          textAlign: 'center',
          zIndex: 1,
        }}
      >
        <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
          Timeless Elegance
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Discover our collection of luxury timepieces
        </Typography>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          sx={{
            borderColor: 'white',
            color: 'white',
            '&:hover': {
              backgroundColor: 'white',
              color: 'black',
            },
          }}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
}

function FeaturedProducts() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h2" component="h2" align="center" sx={{ mb: 6 }}>
        Featured Products
      </Typography>
      <Grid container spacing={6}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} md={4}>
            <Card elevation={0} sx={{ backgroundColor: 'transparent' }}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{
                  height: 400,
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
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {product.price}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  sx={{
                    '&:hover': {
                      backgroundColor: 'black',
                      color: 'white',
                    },
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 4, px: { xs: 2, sm: 6 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: { xs: 4, md: 0 },
          }}
        >
          <Box sx={{ mb: { xs: 3, md: 0 } }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              De Eclat
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Timeless elegance, delivered.
            </Typography>
          </Box>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2, sm: 4 }}
            alignItems="center"
          >
            {footerLinks.map((link) => (
              <Button
                key={link.name}
                color="inherit"
                sx={{
                  '&:hover': {
                    color: 'text.secondary',
                  },
                }}
              >
                {link.name}
              </Button>
            ))}
          </Stack>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 4 }}
        >
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
