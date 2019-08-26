import ReactDOM from "react-dom";
import { makeMainRoutes } from "./routes";
require("dotenv").config();

const routes = makeMainRoutes();
ReactDOM.render(routes, document.getElementById("root"));
