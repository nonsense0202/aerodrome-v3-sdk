import { Token } from '@uniswap/sdk-core'
import { FACTORY_ADDRESS, POOL_INIT_CODE_HASH } from '../constants'
import { computePoolAddress } from './computePoolAddress'


describe('#computePoolAddress', () => {
  it('should correctly compute the pool address', () => {
    const tokenA = new Token(1, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'WETH')
    const tokenB = new Token(1, '0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452', 18, 'WSTETH', 'WSTETH')
    const result = computePoolAddress({
      factoryAddress: FACTORY_ADDRESS,
      tickSpacing: 1,
      tokenA,
      tokenB,
      initCodeHash: POOL_INIT_CODE_HASH
    })

    expect(result).toEqual('0x861A2922bE165a5Bd41b1E482B49216b465e1B5F')
  })

})
