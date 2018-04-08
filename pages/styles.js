import css from 'styled-jsx/css'

export default css`
    :root{
        --my-col: purple;
        --my-bg: #cb34cc;
    }
    body{
        color: #333;
        font-size: 3rem;
        font-family: sans-serif;
    }
    .aboutLink{
        color: green;
    }
    .homeLink{
        margin-right: 10px;
    }
    footer{
        color: var(--my-col);   
    }
`
