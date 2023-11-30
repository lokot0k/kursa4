import {Route, Routes} from "react-router-dom"

import {Product} from "../../components/ProductPage/Product/Product";
import {Main} from "../../pages/Main/Main";
import {ProductPage} from "../../components/ProductPage/ProductPage";
import React from "react";

export default function RouterConfig() {
    return(
		<div>
			<Routes>
				<Route path='/' element={<Main/>}></Route>
				<Route path='/category/:categoryId' element={<Product/>}></Route>
				<Route path='/category/:categoryId/product/:productId' element={<ProductPage></ProductPage>}></Route>
			</Routes>
		</div>
    );
}