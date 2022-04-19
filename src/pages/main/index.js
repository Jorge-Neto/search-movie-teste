import React, { useState } from "react";

import Listing from "../../components/listing";

import { BASE_URL } from "../../components/api/requests";

import { ContainerPanel, ResultsList, FormTitle, FormSubtitle } from "./styles";
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
                sessionStorage.setItem('filme', JSON.stringify(res.data));
                setSearchItem(res.data);
            }).catch(function (error) {
                console.log(error);
            })
    };

    return (
        <div>
            <ContainerPanel>
                <FormTitle>Welcome!</FormTitle>
                <FormSubtitle>Search for a movie here</FormSubtitle>
                <form onSubmit={searchMovie}>
                    <input className="searchInput" type="text" value={search} placeholder="Type here..." onChange={handleChange} />
                    <input className="searchButton" type="submit" value="Search" />
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
