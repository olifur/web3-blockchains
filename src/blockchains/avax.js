export default {
    name: 'avax',
    id: '0xa86a',
    networkId: '43114',
    label: 'Avalanche Mainnet',
    fullName: 'Avalanche Mainnet C-Chain',
    logo:
      'data:image/png;base64,todo',
    currency: {
      name: 'AVAX',
      symbol: 'AVAX',
      decimals: 18
    },
    explorer: 'https://snowtrace.io/',
    explorerUrlFor: ({ transaction, token })=>{
      if(transaction) { return `https://snowtrace.io/tx/${transaction.id}` }
      if(token) { return `https://snowtrace.io/token/${token}` }
    },
    rpc: 'https://api.avax.network/ext/bc/C/rpc',
    tokens: [ // only major tokens
      {"address": "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7", "symbol": "WAVAX", "name": "Wrapped Avax", "decimals": 18, "logo": "https://TODO/logo.png", "type": "NATIVE"},
    ]
  }
  