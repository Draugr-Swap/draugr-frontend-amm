import { ChainId } from 'druagrswap-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x760BF09f2b1f3a40144b7Fe999e9F619DE5f8A31', // TODO
  [ChainId.FTMTESTNET]: '0x6eEa1D600e42D54A720a8E1b13db036559dD07D1'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
