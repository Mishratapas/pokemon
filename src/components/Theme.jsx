import {createTheme} from "@mui/system";

export const muiTheme = createTheme({
  overrides: {
    MuiInputLabel: {
      outlined: {
        "&$focused": {
          color: "#FE5454",
        },
      },
    },
  },
});
