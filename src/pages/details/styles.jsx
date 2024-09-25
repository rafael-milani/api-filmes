import styled from "styled-components";

export const Container = styled.div`

    padding: 4rem 0;

    h1 {
        margin: 3rem 0;
    }

    .movie {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 300px;
        border-radius: 1rem;
    }

    .details {
        display: flex; 
        flex-direction: column;
        align-items: flex-start;
        margin-left: 3rem;
        max-width: 50%;
    }

    button {
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: black;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 100%;
    }

    button:hover {
        background: rgb(168, 168, 168);
    }

    span {
        line-height: 130%;
        margin-bottom: 1rem;
        font-size: 110%;
    }

    .release-date {
        opacity: 0.5;
    }
`   
