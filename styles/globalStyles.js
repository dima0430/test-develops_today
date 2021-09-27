import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
    }
    a {
        text-decoration:none;
        color:#000000;
    }
    ul{
        list-style: none;
    }
`
export default GlobalStyles