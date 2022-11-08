import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Slider } from "@mantine/core";

function App() {
    return (
        <div className="App">
            <Button
                sx={{
                    background: "red",

                    "&:hover": {
                        background: "purple",
                    },
                }}
            >
                Hello
            </Button>
            <Slider
                sx={{
                    marginLeft: "12.5%",
                    marginRight: "12.5%",
                }}
            />
            <Slider
                sx={{
                    marginTop: "10px",
                    marginLeft: "12.5%",
                    marginRight: "12.5%",
                }}
                classNames={{
                    thumb: "joseph-thumb",
                    bar: "joseph-thumb",
                    track: "joseph-thumb",
                }}
                // styles={{ thumb: { backgroundColor: "red" } }}
            />
        </div>
    );
}

export default App;
