import React, { useEffect, useState } from 'react'
import styles from './Metamask.module.css'
import favicon from './metamask-favicon.svg'

function isMobileDevice() {
  return 'ontouchstart' in window || 'onmsgesturechange' in window;
}

async function connect(onConnected) {
  if (!window.ethereum) {
    alert("Get MetaMask!")
    return
  }

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  })

  onConnected(accounts[0])
}

async function checkIfWalletIsConnected(onConnected) {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    })

    if (accounts.length > 0) {
      const account = accounts[0]
      onConnected(account)
      return
    }

    if (isMobileDevice()) {
      await connect(onConnected)
    }
  }
}


export default function MetaMaskAuth({ onAddressChanged }) {
  const [userAddress, setUserAddress] = useState("")

  useEffect(() => {
    checkIfWalletIsConnected(setUserAddress)
  }, [])

  useEffect(() => {
    onAddressChanged(userAddress)
  }, [userAddress])

  return userAddress ? (
    <Address userAddress={userAddress} />
  ) : (
    <Connect setUserAddress={setUserAddress}/>
  )
}


function Connect({ setUserAddress }) {
  if (isMobileDevice()) {
    const dappUrl = "battlegrid-react-app"
    const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl
    return (
      <a href={metamaskAppDeepLink}>
        <button className={styles.button}>
          <img src={favicon} />
          Connect MetaMask
        </button>
      </a>
    )
  }

  
  return (
    <button className={styles.button} onClick={() => connect(setUserAddress)}>
      <img src={favicon} />
      Connect MetaMask
    </button>
  )
}


function Address({ userAddress }) {
  return (
    <span className={styles.address}>
      <img src={favicon} />
      Connected: {userAddress.substring(0, 5)}…{userAddress.substring(userAddress.length - 4)}
    </span>
  )
}