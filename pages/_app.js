import theme from "@/styles/style";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import AppContext from "@/Config/AppContext";

export default function App({ Component, pageProps }) {
  const [walletAddress, setWalletAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [Stacked, setStacked] = useState("");

  const contextObject = {
    walletAddressContext: walletAddress,
    setWalletAddressContext: setWalletAddress,
    balanceContext: balance,
    setBalanceContext: setBalance,
    setStackedContext: setStacked,
    StackedContext: Stacked,
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={contextObject}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </ThemeProvider>
  );
}
