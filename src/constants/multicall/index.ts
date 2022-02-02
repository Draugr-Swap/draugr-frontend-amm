import { ChainId } from 'druagrswap-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x00F8B38b4a2a1F7AA4e4CF0EE62bd02Fe23F542e', // TODO
  [ChainId.FTMTESTNET]: '0x6eEa1D600e42D54A720a8E1b13db036559dD07D1'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
