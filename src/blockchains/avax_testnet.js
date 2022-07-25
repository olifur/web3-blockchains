export default {
    name: 'avax_testnet',
    id: '0xa86a',
    networkId: '43113',
    label: 'Avalanche FUJI Testnet',
    fullName: 'Avalanche FUJI Testnet C-Chain',
    logo:
      'data:image/png;base64,todo',
    currency: {
      name: 'AVAX',
      symbol: 'AVAX',
      decimals: 18
    },
    explorer: 'https://testnet.snowtrace.io/',
    explorerUrlFor: ({ transaction, token })=>{
      if(transaction) { return `https://testnet.snowtrace.io/tx/${transaction.id}` }
      if(token) { return `https://testnet.snowtrace.io/token/${token}` }
    },
    rpc: 'https://api.avax-test.network/ext/bc/C/rpc',
    tokens: [ // only major tokens
      {"address": "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7", "symbol": "WAVAX", "name": "Wrapped Avax", "decimals": 18, "logo": "https://TODO/logo.png", "type": "NATIVE"},
    ]
  }
  