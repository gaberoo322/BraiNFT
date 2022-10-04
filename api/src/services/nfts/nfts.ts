import { Network, Alchemy } from 'alchemy-sdk'

// import type { QueryResolvers } from 'types/graphql'

const settings = {
  apiKey: 'WI3U4WFYxqdC3NRABUVapQPnR-_mhqD_',
  network: Network.ETH_MAINNET,
  omitMetadata: false,
}

const alchemy = new Alchemy(settings)

// Get the latest block
// const latestBlock = alchemy.core.getBlockNumber()
// console.log('latestBlock', latestBlock)

// Get all outbound transfers for a provided address
// alchemy.core
//   .getTokenBalances('0x9128d7a95b7811af2da2ced9116b04c78792b84f')
//   .then(0)

// Get all the NFTs owned by an address
export const getNfts = async ({ wallet }) => {
  const ownedNfts = await alchemy.nft.getNftsForOwner(wallet)
  return ownedNfts
}

// Listen to all new pending transactions
// alchemy.ws.on(
//   { method: 'alchemy_pendingTransactions', fromAddress: 'greenfield.eth' },
//   (res) => console.log(...res)
// )
