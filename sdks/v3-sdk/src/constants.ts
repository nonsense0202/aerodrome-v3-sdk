import { keccak256 } from '@ethersproject/solidity'

export const FACTORY_ADDRESS = '0x5e7BB104d84c7CB9B682AaC2F3d509f5F406809A'
export const POOL_IMPLEMENTATION = '0xeC8E5342B19977B4eF8892e02D8DAEcfa1315831'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const POOL_INIT_CODE_HASH = keccak256(['bytes'], [`0x3d602d80600a3d3981f3363d3d373d3d3d363d73${POOL_IMPLEMENTATION.slice(2)}5af43d82803e903d91602b57fd5bf3`]);

// @deprecated please use poolInitCodeHash(chainId: ChainId)
// export const POOL_INIT_CODE_HASH = '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54'
// export function poolInitCodeHash(chainId?: ChainId): string {
//   switch (chainId) {
//     case ChainId.ZKSYNC:
//       return '0x010013f177ea1fcbc4520f9a3ca7cd2d1d77959e05aa66484027cb38e712aeed'
//     default:
//       return POOL_INIT_CODE_HASH
//   }
// }


/**
  * The default pool implementation address of aerodrome
 */




/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
  LOWEST = 100,
  LOW_200 = 200,
  LOW_300 = 300,
  LOW_400 = 400,
  LOW = 500,
  MEDIUM = 3000,
  HIGH = 10000,
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.LOWEST]: 1,
  [FeeAmount.LOW_200]: 4,
  [FeeAmount.LOW_300]: 6,
  [FeeAmount.LOW_400]: 8,
  [FeeAmount.LOW]: 10,
  [FeeAmount.MEDIUM]: 60,
  [FeeAmount.HIGH]: 200,
}
