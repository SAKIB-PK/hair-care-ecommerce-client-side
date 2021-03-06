import AddBoxIcon from '@mui/icons-material/AddBox';
import AddCommentIcon from '@mui/icons-material/AddComment';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import PaymentIcon from '@mui/icons-material/Payment';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
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
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import AddService from '../AddService/AddService';
import AllOrder from '../AllOrder/AllOrder';
import Loading from '../Loading/Loading';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProduct from '../ManageProduct/ManageProduct';
import MyOrder from '../MyOrder/MyOrder';
import Pay from '../Pay/Pay';
import Payment from '../Pay/Payment';
import AddReview from '../Review/AddReview';

const drawerWidth = 240;

function Dashboard(props) {
  const { user } = useAuth();
  const [loading,setLoading] =useState(true);
  const [isAdmin,setIsAdmin] = useState(false);
  useEffect(()=>{
    axios.get(`https://stark-cove-71679.herokuapp.com/admin?email=${user.email}`)
    .then(res =>{
      if(res.data.email){
        setIsAdmin(true);
      }else{
        setIsAdmin(false);
      }
    })
    .catch(err =>{
      console.log(err);
    })
    .finally(()=>{
      setLoading(false);
    })
  },[user]);
  
  let {path,url} = useRouteMatch();
  const {customSignOut} = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

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
          
            {
              isAdmin && 
              <>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <AddBoxIcon />
                </ListItemIcon> 
                <Link to={`${url}/add`}>
                  <ListItemText primary="Add Product" />
                </Link>
              </ListItem>
            </>
            }
            {
              isAdmin && 
              <>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <ArchitectureIcon />
                </ListItemIcon>
                <Link to={`${url}/all-order`}>
                  <ListItemText primary="Manage All Orders" />
                </Link>
              </ListItem>
            </>
            }
            {
              isAdmin && 
              <>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <PlaylistAddCheckIcon />
                </ListItemIcon>
                <Link to={`${url}/manage-product`}>
                  <ListItemText primary="Manage Product" />
                </Link>
              </ListItem>
            </>
            }
            {
              isAdmin && 
              <>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <SupervisorAccountIcon />
                </ListItemIcon>
                <Link to={`${url}/make-admin`}>
                  <ListItemText primary="Make Admin" />
                </Link>
              </ListItem>
            </>
            }
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
  if(loading){
    return <Loading/>
  }
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
          <Route path={`${path}/manage-product`}>
            <ManageProduct />
          </Route>
          <Route path={`${path}/my-order`}>
            <MyOrder />
          </Route>
          <Route path={`${path}/all-order`}>
            <AllOrder />
          </Route>
          <Route path={`${path}/make-admin`}>
            <MakeAdmin />
          </Route>
          <Route path={`${path}/pay/:id`}>
            <Payment />
          </Route>
          <Route  path={`${path}/pay`}>
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
