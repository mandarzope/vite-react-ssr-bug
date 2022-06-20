import ReactDOMServer from "react-dom/server";
// import { StaticRouter } from 'react-router-dom/server'
import App from "./App";

export function render() {
  return ReactDOMServer.renderToString(<App />);
}
