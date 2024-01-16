import React from 'react'
import styled,{ThemeProvider} from 'styled-components'
import { GlobalStyle } from './GlobalStyle'

const StyledComponent = () => {

    const theme={
        color:{
            textColor:"green",
            bg:"red"
        }
    }

    const FavColor="black";

    const Head = styled.h1`
    color:${({theme})=> theme.color.textColor};
    text-align : center;
    background-color:${({theme})=>theme.color.bg};
    

    span{
        color:${FavColor};
        i{
            color:black;
            &:hover{
                color:royalblue;
            }
        }
        &:hover{
            color:red;
        }

        &:before{
            content:"😍"
        }

        &:after{
            content:"😍"
        }
    }
 
    &:hover {
      color:blue;
    }

    `
    const Para = styled.p`
    color:black;
    text-align : center;
    
    `


    return (
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyle/>
            <Head>Hello,i am <span>Vednidhi <i>Kumar</i></span></Head>
            <Para>I am good at Reactjs</Para>
        </>
        </ThemeProvider>
    )
}

export default StyledComponent
