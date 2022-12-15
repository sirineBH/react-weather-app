import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --whiteSmoke: #f5f5f5;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
        --primaryColor: #52276b;
    }

    * {
        box-sizing: border-box;
        font-family: 'Abel', sans-serif;
    }

    body {
        margin : 0;
        padding : 0;

        h1 {
            font-size: var(--fontSuperBig);
            font-weight: 600;
            color: var(--white);
        }

        h3 {
            font-size: var(--fontMed);
            font-weight: 600;
        }

        p {
            font-size: var(--fontSmall);
            color: var(--white);
        }
        
    }

    .App {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 20px ;
    }


    /* override slide styling */
    .slick-slide > div {
    margin: 0 10px;
    }
    .slick-list {
    margin: 0 -10px;
    }

    .slick-prev {
    left: 3% !important;
    z-index: 1;
    }

    .slick-prev:before {
    color: var(--primaryColor) ;
    }

    .slick-next {
    right: 3% !important;
    z-index: 1;
    }

    .slick-next:before {
    color: var(--primaryColor);
    }
`;
