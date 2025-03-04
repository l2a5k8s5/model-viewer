// src/components/Navigation.js
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  Button,
  useMediaQuery,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider
} from '@mui/material';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import MenuIcon from '@mui/icons-material/Menu';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InfoIcon from '@mui/icons-material/Info';

const Navigation = ({ currentTab, onTabChange }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleTabChange = (event, newValue) => {
    onTabChange(newValue);
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  const tabs = [
    { label: 'Viewer', value: 'viewer', icon: <ViewInArIcon /> },
    { label: 'Upload', value: 'upload', icon: <CloudUploadIcon /> },
    { label: 'About', value: 'about', icon: <InfoIcon /> }
  ];

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <Box sx={{ p: 2 }}>
        <Typography variant="h6">3D Model Viewer</Typography>
      </Box>
      <Divider />
      <List>
        {tabs.map((tab) => (
          <ListItem key={tab.value} disablePadding>
            <ListItemButton 
              selected={currentTab === tab.value}
              onClick={() => handleTabChange(null, tab.value)}
            >
              {tab.icon}
              <ListItemText primary={tab.label} sx={{ ml: 2 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="start"
                onClick={toggleDrawer}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                3D Model Viewer
              </Typography>
            </>
          ) : (
            <>
              <ViewInArIcon sx={{ mr: 1 }} />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                3D Model Viewer
              </Typography>
              <Tabs 
                value={currentTab} 
                onChange={handleTabChange}
                textColor="inherit"
                indicatorColor="secondary"
              >
                {tabs.map((tab) => (
                  <Tab key={tab.value} value={tab.value} label={tab.label} />
                ))}
              </Tabs>
              <Button 
                color="inherit" 
                href="https://github.com/yourusername/3d-model-viewer" 
                target="_blank"
                sx={{ ml: 2 }}
              >
                GitHub
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;