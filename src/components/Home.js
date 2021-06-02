import React from "react";
import Inf from "./Inf/Inf";
import DayDoer from "./DayDoer/DayDoer";
import Developers from "./Developers/Developers";
import Welcome from "./Welcome/Welcome";

export default function App() {
    return (
        <div>
            <Welcome />
            <Inf/>
            <DayDoer/>
            <Developers/>
        </div>
    )
}