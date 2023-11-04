import type {Component} from 'solid-js';
import {useNavigate} from "@solidjs/router";
import {createEffect} from "solid-js";
import {accountId, setAccountBalance, setAccountId, walletConnection} from "../../store/store.ts";

const Dashboard: Component = () => {
    const navigate = useNavigate();
    createEffect(() => {
        if (!walletConnection()?.isSignedIn()) {
            navigate("/login");
        }
    })

    return (
        <div>
            dashboard hi {accountId()}

            <button onClick={async (e)=>{
                e.preventDefault();

                await walletConnection()?.signOut();
                if (walletConnection()?.isSignedIn()) {
                    alert("No able to sign out")

                } else {
                    setAccountId("")
                    setAccountBalance("")
                }
            }}>
                sign out
            </button>
        </div>
    )
}


export default Dashboard;