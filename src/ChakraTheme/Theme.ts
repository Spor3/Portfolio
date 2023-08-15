import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const semanticToken:any = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
    semanticTokens: {
      colors: {
        bg: {
            default: '#111a21',
        },
        primary: {
          default: 'gray.200',
          /* _dark: 'cyan.200', */
        },
        secondary: {
          default: 'gray.400',
        },
        violet: {
          default: 'purple.500',
        }
      },
    },
  }

// 3. extend the theme
const theme = extendTheme(semanticToken)

export default theme