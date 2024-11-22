import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  Box,
  useMediaQuery,
  ThemeProvider,
  createTheme,
  CssBaseline
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a1a1a',
    },
    secondary: {
      main: '#c9a77c',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '3.5rem',
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
    },
  },
});

const menuItems = ['New Arrivals', 'Women', 'Men', 'Accessories', 'Collections'];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemText 
              primary={item} 
              sx={{ 
                textAlign: 'center',
                padding: '12px'
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography
              variant="h6"
              component="div"
              sx={{ 
                flexGrow: 1,
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.5rem'
              }}
            >
              De Eclat
            </Typography>
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 2 }}>
                {menuItems.map((item) => (
                  <Button color="inherit" key={item}>
                    {item}
                  </Button>
                ))}
              </Box>
            )}
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
            <IconButton color="inherit">
              <PersonIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>

        <Container>
          <Box
            sx={{
              minHeight: '80vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              py: 8,
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                mb: 4,
                fontSize: { xs: '2.5rem', sm: '3.5rem' },
              }}
            >
              Elegance Redefined
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                maxWidth: '600px',
                color: 'text.secondary',
              }}
            >
              Discover our curated collection of luxury fashion pieces that embody timeless sophistication
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: '0',
              }}
            >
              Shop Now
            </Button>
          </Box>
        </Container>

        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: 'transparent',
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="body2" color="text.secondary" align="center">
              2024 De Eclat. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
