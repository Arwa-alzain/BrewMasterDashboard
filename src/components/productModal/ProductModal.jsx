function ProductModal({
  showForm,
  closeForm,
  editProduct,
  handleSubmit,
  handleInputChange,
  formData,
}) {
  return (
    <>
      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{editProduct ? "Edit Product" : "Add Product"}</h3>
            <form onSubmit={handleSubmit} className="product-form">
              <div className="form-group">
                <label className="product-name">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="category">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Beverages">Beverages</option>
                  <option value="Desserts">Desserts</option>
                  <option value="Breakfast">Breakfast</option>
                </select>
              </div>
              <div className="form-group">
                <label className="price">Price</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="stock">Stock</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="status">Status</label>
                <select
                  name="active"
                  value={formData.active}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Status</option>
                  <option value={true}>Active</option>
                  <option value={false}>Out Of Stock</option>
                </select>
              </div>
              <div className="form-group">
                <label className="image-url">Image</label>
                <input
                  type="file"
                  name="image"
                  onChange={handleInputChange}
                  accept="image/*"
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="form-submit-btn" onClick={handleSubmit}>
                  {editProduct ? "Update" : "Add"}
                </button>
                <button
                  type="button"
                  className="form-cancel-btn"
                  onClick={closeForm}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductModal;
