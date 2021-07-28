import React, { Component, createContext } from "react"

export const ThemeContext = createContext();
export class ThemeProvider extends Component {
    constructor(props) {
        super(props)

        this.state = { isDarkMode: true }
        this.toggleMode = this.toggleMode.bind(this)
    }

    toggleMode() {
        this.setState({ isDarkMode: !this.state.isDarkMode })
    }

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggle: this.toggleMode }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}