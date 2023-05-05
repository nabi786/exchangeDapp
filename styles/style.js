import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#161f32" },
    background: {
      default: "#ffffff",
      navbarBg: "#161f32",
      navBarBtnSecondaryColor: "#69748d",
      navBarBtnStyledColor: "#c1df82",
      gradientColor: "linear-gradient(135deg, #7B4FE8 30%, #4DBAD6 70%)",
      selfCustodyBgColor: "linear-gradient(101deg, #121628 63%, #162437 100%)",
    },
  },
  typography: {
    fontFamily: "poppins",
  },
});
export default theme;
