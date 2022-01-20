import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.draugrswap.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://www.draugrswap.finance/farms'
  },
  {
    label: 'Armory',
    icon: 'PoolIcon',
    href: 'https://www.draugrswap.finance/nests'
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/draugr-token-address',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/draugr-swap/',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/draugr-swap',
      },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/DraugrDefi/",
      },
      {
        label: "Docs",
        href: "https://draugrswap.gitbook.io/draugr-swap/",
      },
      {
        label: "Blog",
        href: "https://draugr-swap.medium.com/",
      },
    ],
  },
  {
    label: 'Audit by ****',
    icon: 'HelmetIcon',
    href: 'https://www.draugrswap.finance/files/audit.pdf',
  },
]

export default config
