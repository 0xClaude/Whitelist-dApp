import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/Home.module.css'
import NavBar from '../components/Navbar'
import { useState, useEffect } from 'react'
import Whitelist from '../components/Whitelist'
import Web3 from 'web3'


export default function Home() {

  const [web3, setWeb3] = useState(undefined);
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState(undefined);
  const [whitelist, setWhitelist] = useState(false);

  useEffect(() => {
    if (window.ethereum) {
      if (typeof web3 !== "undefined") {
        setWeb3(web3.currentProvider);
      } else {
        ethereum.request({method: "eth_requestAccounts"});
      }
    } else {
      console.log("No Metamask installed");
    }
    console.log(web3);
  }, []);


  return (
    <>
      <Head>
        <title>dApp - Whitelist</title>
      </Head>
      <NavBar connected={connected} setConnected={setConnected} account={account} setAccount={setAccount} />
      <div className={styles.main}>
        <h1>Welcome to the Whitelist</h1>
        <hr />
      </div>
      <div className={styles.main}>
        <Whitelist connected={connected} setConnected={setConnected} account={account} setAccount={setAccount} whitelist={whitelist} setWhitelist={setWhitelist} />
      </div>

    </>
  )
}
