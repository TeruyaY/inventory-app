import React from 'react'

const ProductsRow = ({id, name, quantity_in_stock, quantity_sold, unit_price, revenue}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{quantity_in_stock}</td>
            <td>{quantity_sold}</td>
            <td>{unit_price}</td>
            <td>{revenue}</td>
            <td>
                <button className = "btn btn-outline-info btn-sm mr-2">Update</button>
                <button className = "btn btn-outline-succes btn-sm mr-2">Supplier</button>
                <button className = "btn btn-outline-danger btn-sm mr-2">Delete</button>
            </td>
        </tr>
    );
}

export default ProductsRow