import { useState } from "react";
import { productData } from "../../data/data";
import ProductModal from "../productModal/ProductModal";
function ProductPage() {
  const [products, setProducts] = useState(productData);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    active: "",
    image: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  // When clicking Update button:
  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert File object to URL string for images
    const imageUrl =
      typeof formData.image === "object" && formData.image
        ? URL.createObjectURL(formData.image)
        : formData.image;

    if (editProduct) {
      setProducts(
        products.map((item) =>
          item.id === editProduct // 1 === 1 (true!) - Now finds the right product
            ? {
                ...item,
                name: formData.name,
                category: formData.category,
                price: formData.price,
                stock: formData.stock,
                active: formData.stock > 0,
                image: imageUrl,
              }
            : item
        )
      );
    } else {
      const newProduct = {
        id: products.length + 1,
        name: formData.name,
        category: formData.category,
        price: formData.price,
        stock: formData.stock,
        active: formData.stock > 0,
        image: imageUrl,
      };
      setProducts([...products, newProduct]);
    }
    closeForm();
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file" && files.length > 0) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const openAddForm = () => {
    setEditProduct(null);
    setFormData({
      name: "",
      category: "",
      price: "",
      stock: "",
      active: "",
      image: "",
    });
    setShowForm(true);
  };

  // When clicking Edit button:
  const openEditForm = (product) => {
    setEditProduct(product.id); // editProduct = 1 (the ID)
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      stock: product.stock,
      active: product.active,
      image: product.image,
    });
    setShowForm(true);
  };

  const closeForm = () => {
    setEditProduct(null);
    setFormData({
      name: "",
      category: "",
      price: "",
      stock: "",
      active: "",
      image: "",
    });
    setShowForm(false);
  };

  return (
    <>
      <ProductModal
        showForm={showForm}
        closeForm={closeForm}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        editProduct={editProduct}
      ></ProductModal>
      <div>
        <div className="page_header">
          <h2>Products Page</h2>
          <button className="btn-add" onClick={openAddForm}>
            Add Product
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>${item.price}</td>
                <td>{item.stock}</td>
                <td>
                  <span
                    className={item.active ? "badge active" : "badge inactive"}
                  >
                    {item.active ? "Active" : "Out Of Stock"}
                  </span>
                </td>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="product-image"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                </td>

                <td>
                  <button
                    className="edit-btn"
                    onClick={() => openEditForm(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => deleteProduct(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProductPage;
