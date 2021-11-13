import AddBoxIcon from '@mui/icons-material/AddBox';
import AddCommentIcon from '@mui/icons-material/AddComment';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import PaymentIcon from '@mui/icons-material/Payment';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import AddService from '../AddService/AddService';
import AllOrder from '../AllOrder/AllOrder';
import MyOrder from '../MyOrder/MyOrder';
import Pay from '../Pay/Pay';
import AddReview from '../Review/AddReview';

const drawerWidth = 240;

function Dashboard(props) {
  let {path,url} = useRouteMatch();
  const {customSignOut} = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Link to={`/`}>
              <ListItemText primary="Back To Home" />
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <ProductionQuantityLimitsIcon />
            </ListItemIcon>
            <Link to={`${url}/my-order`}>
              <ListItemText primary="My Order" />
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <AddBoxIcon />
            </ListItemIcon>
            <Link to={`${url}/add`}>
              <ListItemText primary="Add Service" />
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <ArchitectureIcon />
            </ListItemIcon>
            <Link to={`${url}/all-order`}>
              <ListItemText primary="Manage All Orders" />
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <AddCommentIcon />
            </ListItemIcon>
            <Link to={`${url}/review`}>
              <ListItemText primary="Review" />
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <Link to={`${url}/pay`}>
              <ListItemText primary="Pay" />
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <Button  color="primary" onClick={customSignOut}>
             Log Out
           </Button>
          </ListItem>
          
          
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Switch>
          <Route path={`${path}/my-order`}>
            <MyOrder />
          </Route>
          <Route path={`${path}/all-order`}>
            <AllOrder />
          </Route>
          <Route path={`${path}/pay`}>
            <Pay />
          </Route>
          <Route path={`${path}/add`}>
            <AddService />
          </Route>
          <Route path={`${path}/review`}>
            <AddReview />
          </Route>

        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
