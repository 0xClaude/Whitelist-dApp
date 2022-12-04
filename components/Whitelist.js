import Web3 from "web3";
import { useEffect } from "react";

export default function Whitelist(props) {
    
    useEffect(() => {
        if (props.whitelist) {
            const button = document.getElementById("whitelist-btn");
            button.disabled = true;
            button.innerText = "You are whitelisted";
        } 
    })

    const handleClick = async () => {
        props.setWhitelist(!props.whitelist);
        console.log(`whitelist set to ${props.whitelist}`);
    }
    
    const handleConnect = async () => {
        if (window.ethereum) {
            const accounts = await ethereum.request({method: "eth_requestAccounts"});
            const account = accounts[0];
            console.log(account);
            props.setAccount(account);
        }
        console.log("connect wallet");
    }

    return (
        <>
            <div>
                <p>There are {props.spots} spots left</p>
                {props.connected ? (<button className="btn btn-primary btn-lg" onClick={handleClick} id="whitelist-btn">Whitelist me</button>) : (
                    <button className="btn btn-success btn-lg" onClick={handleConnect}>Connect</button>
                )}

            </div>
        </>
    );
}