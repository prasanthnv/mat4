import React from 'react';
import IconButton from '@mui/material/IconButton';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import { useColorMode } from '../context/ColorModeContext';

export const ColorModeToggle: React.FC = () => {
  const theme = useTheme();
  const { toggleColorMode, mode } = useColorMode();

  return (
    <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
      <IconButton onClick={toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Tooltip>
  );
};