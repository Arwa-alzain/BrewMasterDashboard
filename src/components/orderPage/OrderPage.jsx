import { useState } from "react";
import { orderData, productData } from "../../data/data";
function OrderPage() {
  const [orders, setOrders] = useState(orderData);
  const deleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  const getProductName = (productId) => {
    const product = productData.find((p) => p.id === productId);
    return product ? product.name : "Unknown Product";
  };
  return (
    <div>
      <div className="page_header">
        <h2>Order Page</h2>
        <button className="btn-add">Add Order</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{getProductName(item.product_id)}</td>
              <td>{item.quantity}</td>
              <td>
                <span
                  className={item.active ? "badge active" : "badge inactive"}
                >
                  {item.active ? "Active" : "Out Of Stock"}
                </span>
              </td>
              <td>
                <button className="edit-btn">Edit</button>
                <button
                  className="delete-btn"
                  onClick={() => deleteOrder(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderPage;
