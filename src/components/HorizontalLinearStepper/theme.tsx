import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
    palette: {
        primary: {
          main: "#f00"
        },
        secondary: {
          main: "#0f0"
        }
      },
      typography: {
        fontFamily: "Comic Sans MS",
        body2: {
          fontFamily: "Times New Roman",
          fontSize: "1.1rem"
        }
      },
      shape: {
        borderRadius: 30
      }
    });