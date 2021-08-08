import React from "react";
import "./Header.css";
import categories from "../data/category";
import { debounce } from "lodash";
import Gitlink from "../Gitlink";

//MUI
import { createTheme, TextField, ThemeProvider } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import { Typography } from "@material-ui/core";

const Header = ({ category, setCategory, setWord, word, setMeanings, LightTheme }) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: LightTheme ? "#000" : "#fff",
            },
            type: LightTheme ? "light" : "dark",
        },
    });

    const handleChange = (e) => {
        setCategory(e.target.value);
        setWord("");
        setMeanings([]);
    };

    const handleText = debounce((text) => {
        setWord(text);
    }, 500);

    return (
        <div className="header">
            <span className="title">{word ? word : "Word Hunt"}</span>
            <br />
            <Typography className="mt-3">Source Code can be found at:</Typography>
            <Gitlink theme={darkTheme}/>
            <br />
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField
                        className="search"
                        id="filled-basic"
                        //value={word}
                        label="Search a Word"
                        onChange={(e) => handleText(e.target.value)}
                    />
                    <TextField
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => handleChange(e)}
                        className="select"
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.label} value={option.label}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    );
};

export default Header;
