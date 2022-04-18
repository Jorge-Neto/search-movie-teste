import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import axios from "axios";
import { BASE_URL, KEY } from "./requests";

import App from "../src/App";
import Details from "../src/pages/details";

const app = express();

app.use("^/$", (req, res, next) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(
          <StaticRouter location={req.url}>
            <App />
          </StaticRouter>
        )}</div>`
      )
    );
  });
});
app.use("/details", (req, res, next) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(
          <StaticRouter location={req.url}>
            <Details />
          </StaticRouter>
        )}</div>`
      )
    );
  });
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.post("/filmes/:filme", function (req, res) {
  const { filme } = req.params;
  console.log(filme);
  axios.get(`${BASE_URL}?apikey=${KEY}&t=${filme}`).then((response) => {
    res.send(response.data);
  });
});

app.listen(3030, () => {
  console.log(`App launched on port 3030`);
});
