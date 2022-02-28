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
        href: 'https://ftmscan.com/token/0x89B784E11563C3aC0c788387158b1d51eA1D326d',
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
