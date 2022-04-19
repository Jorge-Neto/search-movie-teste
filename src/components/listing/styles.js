import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieCard = styled.div`
    display: flex;
    padding: 0.5rem;
`;

export const MovieImage = styled.img`
    border: 4px black;
    padding: 2px;
    border-style: inset;
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
`;

export const BtnSeeMore = styled(Link)`
    color: #ecf0f1;
    text-decoration: none;
    border: 0.5px solid #ecf0f1;
    padding: 0.20rem 1rem;
    border-radius: 5px;
    background-color: rgb(85 107 47 / 75%);
`;
