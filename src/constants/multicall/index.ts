import { ChainId } from 'druagrswap-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb', // TODO
  [ChainId.FTMTESTNET]: '0x6eEa1D600e42D54A720a8E1b13db036559dD07D1'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
