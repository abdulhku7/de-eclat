import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { 
  CssBaseline, 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Menu,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

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
      fontWeight: 600,
    },
    h2: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 500,
    },
    h3: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 500,
    },
  },
});

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2, 4),
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  margin: theme.spacing(0, 1),
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
  '& svg': {
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}));

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = ['New Arrivals', 'Women', 'Men', 'Accessories', 'Collections'];

  const drawer = (
    <Box sx={{ textAlign: 'center', p: 2 }}>
      <Typography variant="h6" sx={{ my: 2, fontFamily: "'Playfair Display', serif" }}>
        De Eclat
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item}>
            <ListItemText 
              primary={item} 
              sx={{ 
                textAlign: 'center',
                '& .MuiTypography-root': {
                  fontFamily: "'Poppins', sans-serif",
                }
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
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <AppBar position="static" color="transparent" elevation={0}>
            <StyledToolbar>
              {isMobile ? (
                <>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" sx={{ fontFamily: "'Playfair Display', serif" }}>
                    De Eclat
                  </Typography>
                </>
              ) : (
                <>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography variant="h5" sx={{ fontFamily: "'Playfair Display', serif" }}>
                      De Eclat
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    {menuItems.map((item) => (
                      <NavButton key={item}>{item}</NavButton>
                    ))}
                  </Box>
                </>
              )}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton color="inherit">
                  <PersonIcon />
                </IconButton>
                <IconButton color="inherit">
                  <ShoppingCartIcon />
                </IconButton>
              </Box>
            </StyledToolbar>
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

          <Box component="main" sx={{ flexGrow: 1 }}>
            <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
              <Box sx={{ 
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                minHeight: '60vh',
                justifyContent: 'center'
              }}>
                <Typography 
                  variant="h1" 
                  component="h1" 
                  sx={{ 
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                    mb: 2
                  }}
                >
                  De Eclat
                </Typography>
                <Typography 
                  variant="h2" 
                  sx={{ 
                    fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
                    color: 'text.secondary',
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 300,
                    maxWidth: '800px',
                    mb: 4
                  }}
                >
                  Luxury Fashion from Hong Kong
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary"
                  size="large"
                  sx={{ 
                    px: 4, 
                    py: 1.5,
                    borderRadius: 0,
                    fontSize: '1.1rem'
                  }}
                >
                  Explore Collection
                </Button>
              </Box>
            </Container>
          </Box>

          <Box component="footer" sx={{ 
            mt: 'auto', 
            py: 4, 
            bgcolor: 'background.paper',
            borderTop: '1px solid',
            borderColor: 'divider'
          }}>
            <Container maxWidth="lg">
              <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                textAlign: { xs: 'center', sm: 'left' }
              }}>
                <Typography variant="body2" color="text.secondary">
                  2024 De Eclat. All rights reserved.
                </Typography>
                <SocialIcons>
                  <IconButton href="https://instagram.com" target="_blank">
                    <InstagramIcon />
                  </IconButton>
                  <IconButton href="https://facebook.com" target="_blank">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton href="https://twitter.com" target="_blank">
                    <TwitterIcon />
                  </IconButton>
                </SocialIcons>
              </Box>
            </Container>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
