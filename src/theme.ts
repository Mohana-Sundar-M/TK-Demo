import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#48cfad",
    },
    secondary: {
      main: "#158cba",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "&:hover": {
            borderColor: "#48cfad",
          },
          "&:active": {
            borderColor: "#48cfad",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:disabled": {
            background: "#6c757d",
            color: "white",
          },
        },
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            height: "48px",
            border: `2px solid #48cfad`,
            color: "#48cfad",
            "&:hover": {
              boxShadow: "0px 0px 0px 0px",
              background: "white",
              color: "#48cfad",
              border: "2px solid #48cfad",
            },
          },
        },
        {
          props: { variant: "contained" },
          style: {
            boxShadow: "0px 0px 0px 0px",
            height: "48px",
            border: `2px solid #48cfad`,
            color: "white",
            "&:hover": {
              boxShadow: "0px 0px 0px 0px",
              background: "#48cfad",
              color: "white",
              border: "2px solid #48cfad",
            },
          },
        },
        {
          props: { variant: "outlined", color: "error" },
          style: {
            border: `2px solid #d32f2f`,
            "&:hover": {
              background: "#d32f2f",
              color: "white",
            },
          },
        },
      ],
    },
    // MuiOutlinedInput: {
    //     styleOverrides: {
    //         root: {
    //             '&:hover .MuiOutlinedInput-notchedOutline': {
    //                 borderColor: '#17a2b8',
    //             },
    //             '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    //                 borderColor: '#17a2b8',
    //             },
    //         },
    //         notchedOutline: {
    //             borderColor: '#17a2b8',
    //         },
    //     },
    // },
  },
});

export default theme;
