import ReactDOM from "react-dom";
import { makeMainRoutes } from "./routes";
import "./styles/App.css";
require("dotenv").config();

const routes = makeMainRoutes();
ReactDOM.render(routes, document.getElementById("root"));
