import ethereum from './blockchains/ethereum'
import bsc from './blockchains/bsc'
import polygon from './blockchains/polygon'
import solana from './blockchains/solana'
import avax from './blockchains/avax'
import avax_testnet from './blockchains/avax_testnet'
import unknown from './blockchains/unknown'

let all = [
  ethereum,
  bsc,
  polygon,
  solana,
  avax,
  avax_testnet,
  unknown
]

let Blockchain = {
  all,

  findById: function (id) {
    let fixedId = id
    if (fixedId.match('0x0')) {
      // remove leading 0
      fixedId = fixedId.replace(/0x0+/, '0x')
    }
    let found = all.find((blockchain) => {
      return blockchain.id == fixedId
    })
    if(found == undefined) {
      found = all.find((blockchain) => {
        return blockchain.id == 'unknown'
      })
    }
    return found
  },

  findByNetworkId: function (networkId) {
    networkId = networkId.toString()
    let found = all.find((blockchain) => {
      return blockchain.networkId == networkId
    })
    return found
  },

  findByName: function (name) {
    return all.find((blockchain) => {
      return blockchain.name == name
    })
  },
}

export { Blockchain }
