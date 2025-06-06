import { AppBar, Toolbar, Typography, Box, ColorModeToggle, IconButton, Button } from '@mat4/react';
import { Menu as MenuIcon } from '@mat4/react/icons';
function App() {
  return (
    <>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
          <ColorModeToggle />
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}

export default App;
