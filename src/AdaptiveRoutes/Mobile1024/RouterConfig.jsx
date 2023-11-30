import {Route, Routes} from "react-router-dom"
import Root from "./pages/Root/Root";
import Catalog from "./pages/Catalog/Catalog";
import Product from "./pages/Product/Product";

export default function RouterConfig() {
    return(
        <div>
			<Routes>
				<Route path='/' element={<Root />}></Route>
				<Route path='/category/:categoryId' element={<Catalog />}></Route>
				<Route path='/category/:categoryId/product/:productId' element={<Product />}></Route>
			</Routes>
		</div>
    );
}