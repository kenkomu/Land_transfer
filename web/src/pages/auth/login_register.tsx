import type {Component} from 'solid-js';
import {createEffect} from "solid-js";
import { contractId, setAccountBalance, setAccountId, walletConnection} from "../../store/store.ts";
import {useNavigate} from "@solidjs/router";
import {utils} from "near-api-js";

const LoginRegister: Component = () => {
    const navigate = useNavigate();
    createEffect(async () => {
        if (walletConnection()?.isSignedIn()) {
            // console.log("on mount login sign out current user");
            // await walletConnection()?.signOut();
            navigate("/dashboard");
        }
    },0)
    return (
        <div>
            login register
            <button onClick={async (e) => {
                e.preventDefault();
                await walletConnection()?.requestSignIn({
                    contractId: contractId()
                }, "Lands app", '/dashboard', '/login_err');

                if (walletConnection()?.isSignedIn()) {
                    const account = walletConnection()?.account();
                    if (account != undefined) {
                        setAccountId(account.accountId);

                        const acc = await account.getAccountBalance();


                        setAccountBalance(utils.format.formatNearAmount(acc.available));

                        navigate("/dashboard");
                    }
                }
             }
            }>
                login
            </button>
        </div>
    )
}


export default LoginRegister;