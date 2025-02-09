import { Blockchain } from 'src';

describe('findByName', () => {
  
  it('provides a blockchain by name', () => {
    expect(Blockchain.findByName('ethereum').label).toEqual('Ethereum')
    expect(Blockchain.findByName('bsc').label).toEqual('BNB Smart Chain')
    expect(Blockchain.findByName('polygon').label).toEqual('Polygon')
  });
});
