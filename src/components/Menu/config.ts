import { MenuEntry } from '@druagrswap-libs/uikit'

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
    label: 'Raids',
    icon: 'FarmIcon',
    href: 'https://www.draugrswap.finance/farms'
  },
  {
    label: 'Forge',
    icon: 'PoolIcon',
    href: 'https://www.draugrswap.finance/nests'
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Fantom Scan',
        href: 'https://ftmscan.com/token/0x7D572502Bd99f8830F32F2F4CF0fC8767282A992',
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
]

export default config
