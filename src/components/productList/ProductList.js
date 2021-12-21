import React from "react";
import { Table } from "react-bootstrap";
import ProductItem from "../productItem/ProductItem";


const ProductList = ({ produits }) => {
   const handleClick = (productName) => {
        alert(`this product name is ${productName}`)
      }
  return (
    <div>
      <Table striped bordered hover className="container">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
                  {
                            produits.map((elt,index) => <ProductItem product={elt} key={index} handleClick={handleClick}/>)
                  }
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
