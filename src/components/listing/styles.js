import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieCard = styled.div`
    display: flex;
    padding: 0.5rem;
    @media (max-width: 1024px) {
        font-size: 14px;
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const MovieImage = styled.img`
    border: 4px black;
    padding: 2px;
    border-style: inset;
    @media (max-width: 1024px) {
        width: 50%;
        height: 100%;
        align-self: center;
    }
`;

export const MovieInfo = styled.ul`
    list-style: none;
    margin: 0.5rem 4rem 0;
    width: 80%;

    .title {
        font-size: 20px;
        font-weight: bold;
        font-family: monospace;
        color: rgb(73 97 38);
    }
    li {
        margin: 15px 0;
    }

    @media (max-width: 1024px) {
        margin: 0.5rem 2rem 0;
        width: 75%;

        p {
            font-size: 12px;
        }
        li {
            margin: 10px 0;
            font-size: 12px;
        }
    }
`;

export const BtnSeeMore = styled(Link)`
    color: #ecf0f1;
    text-decoration: none;
    padding: 0.20rem 1rem;
    border-radius: 5px;
    background-color: rgb(85 107 47 / 75%);
`;
