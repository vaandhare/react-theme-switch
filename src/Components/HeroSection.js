import React, {useContext} from 'react'
import ThemeContext from '../Context/ThemeContext'
import AppTheme from '../Theme'

const HeroSection = () => {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];

    const [themeMode, setThemeMode] = useContext(ThemeContext)

    return(

        <div style={{padding: '1rem', backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`, textAlign: 'center'}}>
            <h1>Context API Theme Toggler</h1>
            <p>Paraghraph Paraghraph Paraghraph Paraghraph  </p>
            <button style={{backgroundColor: "#26ae60", padding: "10px 100px", fontSize: '20px', color: "white", border: `${currentTheme.border}`}}
            onClick={() => {
                setThemeMode(themeMode === "light" ? "dark" : "light")
            }}
            >Click Me</button>
        </div>

    )
}

export default HeroSection;