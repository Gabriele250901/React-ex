import React from "react";
import "./App.css";
import { Hello } from "./components/exercise1/hello";
import { Message } from "./components/exercise1/message";

import { GitHubUser } from "./components/exercise34/exercise";
import { GitHubUserList } from "./components/exercise35/exercise35";
import { ClickCounterFunc } from "./components/exercise30/exercise30";

function App() {

  return (
    <div>
      <Hello />
      <Message />
      <ClickCounterFunc/>
    </div>
  );
}

export default App;
// ogni volta che mi correggerai un esercizio togliero` la classe dall'app in modo da non fare casini
