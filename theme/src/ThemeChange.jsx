import React, { createContext } from 'react'

export const ThemeContext=createContext()
const ThemeChange = ({children}) => {
  const [theme, setTheme] = React.useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeChange