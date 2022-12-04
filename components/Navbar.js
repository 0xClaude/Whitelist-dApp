import Link from "next/link"
import ConnectButton from "./ConnectButton"

export default function NavBar(props) {
    return (
        <>
            <div className="navbar navbar-expand bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">Whitelist</Link>
                    <ConnectButton connected={props.connected} setConnected={props.setConnected} account={props.account} setAccount={props.setAccount} />
                </div>
            </div>
        </>
    )
}