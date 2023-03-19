import 'styled-components'

import { colorSchema } from '../styles/themeColors'

type ColorTheme = typeof colorSchema

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorTheme
  }
}
