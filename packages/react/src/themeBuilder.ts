import { createTheme } from '@mui/material/styles';
import {
  ColorsBrandPrimaryMain,
  ColorsBrandSecondaryMain,
  ColorsSurfaceMain,
  ColorsTextPrimary,
  ColorsTextSecondary,
  ColorsTextDisabled,
  ColorsBrandPrimaryDark
} from '@mat4/theme'; // Adjust the path as per your monorepo alias

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: ColorsBrandPrimaryMain
    },
    secondary: {
      main: ColorsBrandSecondaryMain
    },
    background: {
      default: ColorsSurfaceMain || '#ffffff'
    },
    text: {
      primary: ColorsTextPrimary,
      secondary: ColorsTextSecondary,
      disabled: ColorsTextDisabled
    }
  },
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     containedPrimary: {
    //       backgroundColor: ColorsButtonPrimaryBackground,
    //       color: ColorsButtonPrimaryText,
    //       '&:hover': {
    //         backgroundColor: '#529fe3'
    //       }
    //     }
    //   }
    // }
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#000'
    },  
    secondary: {
      main: ColorsBrandSecondaryMain
    },
    background: {
      default: ColorsSurfaceMain || '#121212'
    },
    text: {
      primary: ColorsTextPrimary,
      secondary: ColorsTextSecondary,
      disabled: ColorsTextDisabled
    }
  },
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     containedPrimary: {
    //       backgroundColor: ColorsButtonPrimaryBackground,
    //       color: ColorsButtonPrimaryText,
    //       '&:hover': {
    //         backgroundColor: '#529fe3'
    //       }
    //     }
    //   }
    // }
  }
});