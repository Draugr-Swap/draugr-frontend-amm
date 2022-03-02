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
        href: 'https://ftmscan.com/token/0xf393E9Ea75befAb72D5063dE4c1b380955E7C560',
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
        href: "https://docs.draugrswap.finance/",
      },
      // {
      //   label: "Blog",
      //   href: "https://draugr-swap.medium.com/",
      // },
    ],
  },
]

export default config
