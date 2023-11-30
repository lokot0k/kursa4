import React from "react"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import ReactDOM from "react-dom/client"
import {App} from "./App"
import {HashRouter} from "react-router-dom"
import "./index.sass"
import ScrollToTop from "./components/common/SrollToTop"

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
)
root.render(
		<HashRouter>
			<ScrollToTop />
			<App/>
		</HashRouter>
)

