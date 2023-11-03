import {Route, Router, Routes} from "@solidjs/router";
import Home from "./pages/home/home.tsx";
import Dashboard from "./pages/dashboard/dashboard.tsx";
import LoginRegister from "./pages/auth/login_register.tsx";
import Profile from "./pages/profile/profile.tsx";
import PropertyListings from "./pages/dashboard/property_listings.tsx";
import UserLists from "./pages/dashboard/users_lists.tsx";
import {createEffect} from "solid-js";
import {keyStores, connect, WalletConnection,  ConnectedWalletAccount, utils } from "near-api-js";
import { Buffer } from 'buffer';
import {setAccountBalance, setAccountId, setWalletConnection} from "./store/store.ts";
import LoginError from "./pages/auth/login_err.tsx";

function App() {


createEffect(()=>{
    (async () => {

        // Add the following line to set the global Buffer object
        (window as any).Buffer = Buffer;

        const myKeyStore = new keyStores.BrowserLocalStorageKeyStore();


        const connectionConfig = {
            networkId: "testnet",
            keyStore: myKeyStore, // first create a key store
            nodeUrl: "https://rpc.testnet.near.org",
            walletUrl: "https://wallet.testnet.near.org",
            helperUrl: "https://helper.testnet.near.org",
            explorerUrl: "https://explorer.testnet.near.org",
        };
        const nearConnection = await connect({ headers: {}, ...connectionConfig });
        const walletConnection = new WalletConnection(nearConnection, null);
        setWalletConnection(walletConnection)

        if (walletConnection.isSignedIn()) {
            // set you account name
            const account = walletConnection.account();

            setAccountId(account.accountId);

            await getAccountBalance(account);
        } else {
            console.log("signed not  ........");
        }

    })()

})

    const getAccountBalance = async (account: ConnectedWalletAccount) => {
        const acc = await account.getAccountBalance();

        setAccountBalance(utils.format.formatNearAmount(acc.available));
    }

  return (
      <Router>
          <Routes>
              <Route path="/users_list" component={UserLists} />
              <Route path="/property_listings" component={PropertyListings} />
              <Route path="/profile" component={Profile} />
              <Route path="/login" component={LoginRegister} />
              <Route path="/login_err" component={LoginError} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/" component={Home} />
          </Routes>
      </Router>
  )
}

export default App
