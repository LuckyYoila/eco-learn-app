"use client";

import { PeraWalletConnect } from "@perawallet/connect";
import { useEffect, useState } from "react";

const CHAINIDS = {
  MainNet: "416001",
  TestNet: "416002",
  BetaNet: "416003",
};

const peraWallet = new PeraWalletConnect({
  shouldShowSignTxnToast:true
});

const usePeraWallet = () => {
  const [accountAddress, setAccountAddress] = useState("");
  const isConnectedToPeraWallet = !!accountAddress;

  function handleConnectWalletClick() {
    peraWallet
      .connect()
      .then((newAccounts) => {
        peraWallet?.connector?.on("disconnect", handleDisconnectWalletClick);

        setAccountAddress(newAccounts[0]);
      })
      .catch((error) => {
        if (error?.data?.type !== "CONNECT_MODAL_CLOSED") {
          console.log(error);
        }
      });
  }

  function handleDisconnectWalletClick() {
    peraWallet.disconnect();

    setAccountAddress("");
  }

  useEffect(() => {
    // Reconnect to the session when the component is mounted
    peraWallet
      .reconnectSession()
      .then((accounts) => {
        peraWallet?.connector?.on("disconnect", handleDisconnectWalletClick);

        if (accounts.length) {
          setAccountAddress(accounts[0]);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  return { accountAddress, isConnectedToPeraWallet, handleConnectWalletClick };
};

export default usePeraWallet;
