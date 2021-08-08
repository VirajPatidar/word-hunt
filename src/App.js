import axios from "axios";
import { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header/Header";

//MUI
import { Container, Switch, withStyles } from "@material-ui/core";



function App() {
    const [word, setWord] = useState("");
    const [meanings, setMeanings] = useState([]);
    const [category, setCategory] = useState("en");
    const [LightTheme, setLightTheme] = useState(false);

    const dictionaryApi = async () => {
        try {
            const data = await axios.get(
                `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
            );
            setMeanings(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    console.log(meanings);

    useEffect(() => {
        dictionaryApi();
    }, [word, category]);


    return (
        <div
            className="App"
            style={{
                height: "100vh",
                // backgroundColor: LightTheme ? "#fff" : "#282c34",
                // color: LightTheme ? "black" : "white",
                transition: "all 0.5s linear",
            }}
        >
            <Container
                maxWidth="md"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100vh",
                    justifyContent: "space-evenly",
                }}
            >
                <Header
                    setWord={setWord}
                    category={category}
                    setCategory={setCategory}
                    word={word}
                    setMeanings={setMeanings}
                    LightTheme={LightTheme}
                />
            </Container>
        </div>
    );
}

export default App;
