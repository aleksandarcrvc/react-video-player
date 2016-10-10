import React from "react";
import ReactDOM from "react-dom";

import Player from "./components/player";

const app = document.getElementById('app');
ReactDOM.render(<Player source={'../../assets/videos/SampleVideo_1280x720_2mb.mp4'} />, app);