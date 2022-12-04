import { useState } from "react";
import styles from "../styles/Home.module.css"
import Link from "next/link";

export default function ConnectButton(props) {

    const [button, setButton] = useState("Connect wallet");

    const handleClick = () => {
        if (!props.connected) {
            connectWallet();
        } else {
            const menu = document.getElementById("popup");
            if (menu.style.display === "none") {
                menu.style.display = "block";
            } else {
                menu.style.display = "none"
            }
        }
    }

    const connectWallet = async () => {
        if (window.ethereum) {
            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            const account = accounts[0].slice(0, 6);
            props.setAccount(account);
            props.setConnected(true);
            setButton(`Connected: ${account}...`);
        } else {
            console.log("No MetaMask installed");
        }
    }

    const switchAccount = async () => {
        console.log("Switch account");
    }

    const logout = async () => {
        console.log("Logout");
    }

    return (
        <>
            <button className="btn btn-success btn-sm" onClick={handleClick}>
                {button}
            </button>
            <div id="popup" className={styles.popup}>
                <p><Link href="#" onClick={switchAccount}>Switch account</Link></p>
                <p><Link href="#" onClick={logout}>Disconnect</Link></p>
            </div>
        </>
    )
}