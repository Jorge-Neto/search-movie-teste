import React, { useState } from "react";

import Listing from "../../components/listing";

import { BASE_URL} from "../../components/api/requests";

import { ContainerPanel, ResultsList } from "./styles";
import axios from 'axios';

export default function Main() {
    const [search, setSearch] = useState("");
    const [searchItem, setSearchItem] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const searchMovie = (e) => {
        e.preventDefault();
        setSearch("");
        axios.post(`${BASE_URL}filmes/${search}`)
        .then(res => {
                console.log(res);
                setSearchItem(res.data);
                localStorage.setItem('filme', searchItem);
            }).catch(function (error) {
                console.log(error);
            })
    };

    return (
        <div>
            <ContainerPanel>
                <h1>Welcome!</h1>
                <h2>Search for a movie here</h2>
                <form onSubmit={searchMovie}>
                    <input type="text" value={search} onChange={handleChange} />
                    <input type="submit" value="Search" />
                </form>

                <ResultsList>
                    {searchItem && (
                        <Listing itemToShow={searchItem} />
                    )}
                </ResultsList>
            </ContainerPanel>
        </div>
    );
}
