import { render } from "preact";
import { App } from "./app.tsx";
import "./index.css";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

render(<App />, document.getElementById("app")!);
