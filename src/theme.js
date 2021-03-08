import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        black: '#1d1c1d',
        singInDetailsGrey: '#454245',
        green: '#007a5a',
        white: '#fff',
        grey : "#dbdbdb",
        greyMessage: '#b1adad',

        google: {
            color : '#4285f4',
            shadow : '#0000004d',
            active: '#dddddd'
        },
        navBar: {
            purple: '#350d36',
            white: "#ffffff",
            black: "#1d1c1d"
        },
        logout: {
            background: '#f8f8f8',
            activeCircle: '#007a5a',
            topBorder: "#dbdbdb",
            blue: '#1264a3',
            white: '#fff'
        }
    },
    fontSizes: {
        big: '48px'
    },
    fontFamily: {
        roboto: 'Roboto, sans-serif'
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;