import React, {useEffect, useContext} from 'react'
import {Table} from 'react-bootstrap'
import {ProductContext} from '../ProductContext'
import ProductsRow from './ProductsRow'

const ProductsTable = () => {
    const [products, setProducts] = useContext(ProductContext)

    useEffect(() => {
        fetch('http://127.0.0.1:8000/product')
            .then(resp => {
                if (!resp.ok) throw new Error("Network response was not ok");
                return resp.json();
            })
            .then(results => {
                console.log("Success:", results);
                setProducts({ "data": [...results.data] });
            })
            .catch(err => {
                console.error("犯人はCORSかサーバー停止:", err);
            });
    }, [])

    return (
        <div>
            
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Quantity In Stock</th>
                        <th>Unit Price</th>
                        <th>Revenue</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { products.data.map(product => (
                        <ProductsRow
                            id = {product.id}
                            name = {product.name}
                            quantity_in_stock = {product.quantity_in_stock}
                            quantity_sold = {product.quantity_sold}
                            unit_price = {product.unit_price}
                            revenue = {product.revenue}
                            key = {product.id}
                        />
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ProductsTable;