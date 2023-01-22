import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { purpleTeme } from "./"

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ purpleTeme }>
      <CssBaseline />

      { children }
    </ThemeProvider>
  )
}
