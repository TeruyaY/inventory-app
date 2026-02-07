import React, {useEffect, useContext} from 'react'
import {Table} from 'react-bootstrap'
import {ProductContext} from '../ProductContext'
import {UpdateContext} from '../UpdateProductContext'
import ProductsRow from './ProductsRow'
import {useNavigate} from 'react-router-dom'

const ProductsTable = () => {
    const [products, setProducts] = useContext(ProductContext)
    const [updateProductInfo, setUpdateProductInfo] = useContext(UpdateContext)

    const navigate = useNavigate()

    const handleDelete = (id) => {
        fetch('http://127.0.0.1:8000/product/' + id, {
            method: "DELETE",
            headers: {
                accept: 'application/json'
            }
        })
        .then(resp => {
            return resp.json()
        })
        .then(result => {
            if (result.status === 'ok') {
                const filteredProducts = products.data.filter((product) => product.id!== id);
                setProducts({data: [...filteredProducts]})
                alert("Product deleted")
            } else {
                alert("Product deletion failed")
            }
        })
    }

    const handleUpdate = (id) => {
        const product = products.data.filter(product => product.id === id)[0]
        setUpdateProductInfo({
            ProductName: product.name,
            QuantityInStock: product.quantity_in_stock,
            QuantitySold: product.quantity_sold,
            UnitPrice: product.unit_price,
            Revenue: product.revenue,
            ProductId: id
        })
        navigate("/updateproduct")
    }

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
                        <th>Quantity Sold</th>
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
                            handleDelete = {handleDelete}
                            handleUpdate = {handleUpdate}
                        />
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ProductsTable;