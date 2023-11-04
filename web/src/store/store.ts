import {createSignal} from "solid-js";
import {Contract, WalletConnection} from "near-api-js";

const [accountId, setAccountId] = createSignal("")
const [profile, setProfile] = createSignal("")

const [walletConnection, setWalletConnection] = createSignal<WalletConnection | undefined>(undefined)
const [contract, setContract] = createSignal<Contract | undefined>(undefined)
const [contractId, setContractId] = createSignal<string>("dev-1699006645642-96863308071582")

const [accountBalance, setAccountBalance] = createSignal("")

export {accountId,setAccountId,profile,setProfile, walletConnection, setWalletConnection,contract, setContract, contractId, setContractId ,accountBalance, setAccountBalance}