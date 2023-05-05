import theme from "@/styles/style";
import { ThemeProvider } from "@mui/material/styles";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
