import theme from "@/styles/style";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import AppContext from "@/Config/AppContext";

export default function App({ Component, pageProps }) {
  const [walletAddress, setWalletAddress] = useState("");
  const [balance, setBalance] = useState("");

  const contextObject = {
    walletAddressContext: walletAddress,
    setWalletAddressContext: setWalletAddress,
    balanceContext: balance,
    setBalanceContext: setBalance,
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={contextObject}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </ThemeProvider>
  );
}
