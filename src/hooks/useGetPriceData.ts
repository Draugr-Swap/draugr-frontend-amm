import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useMulticallContract } from './useContract'
import ERC20_INTERFACE from '../constants/abis/erc20'
import priceContracts from '../constants/eggPriceContracts'

type ApiResponse = {
  prices: {
    [key: string]: string
  }
  update_at: string
}

const useGetPriceData = () => {
  const [data, setData] = useState<number>(0)

  const multicallContract = useMulticallContract();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(multicallContract){
          const {cakeAddress, busdAddress, lpAddress} = priceContracts;
          const calls = [
            [cakeAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [lpAddress])],
            [busdAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [lpAddress])],
          ];

          const [resultsBlockNumber, result] = await multicallContract.aggregate(calls);
          console.log("Call Result", result);
          const [cakeAmount, busdAmount] = result.map(r=>ERC20_INTERFACE.decodeFunctionResult("balanceOf", r));
          const cake = new BigNumber(cakeAmount);
          const busd = new BigNumber(busdAmount);
          console.log("Cake Amount", cake);
          console.log("BUSD Amount", busd);
          const cakePrice = busd.div(cake).toNumber();
          console.log("Cake Price", cakePrice);
          setData(cakePrice)
        }
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [multicallContract])

  return data
}

export default useGetPriceData
