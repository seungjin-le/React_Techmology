import {useState} from 'react'

const Wallet = () => {
  const [walletAddress, setWalletAddress] = useState<any>(undefined)
  const [currentBalance, setCurrentBalance] = useState<any>(undefined)
  const [chainId, setChainId] = useState<any>(undefined)
  //  let currentAccount = web3.eth.getAccounts().then(a => console.log(a))
  const getWalletData = async (signer: any) => {
    const result = await Promise.all([signer.getAddress(), signer.getBalance(), signer.getChainId()])

    setWalletAddress(result[0])
    setCurrentBalance(Number(result[1]))
    setChainId(result[2])
  }

  console.log(walletAddress, currentBalance, chainId)
  return (
    <div>
      <button onClick={getWalletData}>asdasd</button>
    </div>
  )
}

export default Wallet
//0x4A0cFA23887788E50dBE6252d57C0A9F2466E933
