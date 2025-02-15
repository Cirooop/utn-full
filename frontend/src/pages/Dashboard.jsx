import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { getAllProducts, addProduct, updateProduct, deleteProduct } from "../services/api";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ nombre: "", precio: "", stock: "", categoria: "", descripcion: "", img: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateProduct(editingId, formData);
    } else {
      await addProduct(formData);
    }
    setFormData({ nombre: "", precio: "", stock: "", categoria: "", descripcion: "", img: "" });
    setEditingId(null);
    fetchProducts();
  };

  const handleEdit = (product) => {
    setFormData({
      nombre: product.nombre,
      precio: product.precio,
      stock: product.stock,
      categoria: product.categoria,
      descripcion: product.descripcion,
      img: product.img
    });
    setEditingId(product._id);
  };

  const handleDelete = async (id) => {
    if (confirm("¿Estás seguro de que quieres eliminar este producto?")) {
      await deleteProduct(id);
      fetchProducts();
    }
  };

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h1 className="title has-text-centered">📊 Dashboard de Productos</h1>

          {/* Formulario */}
          <div className="box">
            <h2 className="subtitle">{editingId ? "✏️ Editar Producto" : "➕ Agregar Producto"}</h2>
            <form onSubmit={handleSubmit}>
              <div className="columns is-multiline">
                <div className="column is-half">
                  <input className="input" type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
                </div>
                <div className="column is-half">
                  <input className="input" type="number" name="precio" placeholder="Precio" value={formData.precio} onChange={handleChange} required />
                </div>
                <div className="column is-half">
                  <input className="input" type="number" name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange} required />
                </div>
                <div className="column is-half">
                  <input className="input" type="text" name="categoria" placeholder="Categoría" value={formData.categoria} onChange={handleChange} required />
                </div>
                <div className="column is-full">
                  <input className="input" type="text" name="descripcion" placeholder="Descripción" value={formData.descripcion} onChange={handleChange} required />
                </div>
                <div className="column is-full">
                  <input className="input" type="text" name="img" placeholder="URL de la imagen" value={formData.img} onChange={handleChange} required />
                </div>
              </div>

              <button type="submit" className={`button is-fullwidth ${editingId ? "is-warning" : "is-primary"}`}>
                {editingId ? "Actualizar Producto" : "Agregar Producto"}
              </button>
            </form>
          </div>

          {/* Tabla de productos */}
          {products.length > 0 ? (
            <div className="table-container">
              <table className="table is-striped is-hoverable is-fullwidth">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Categoría</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <td>{product.nombre}</td>
                      <td>${product.precio}</td>
                      <td>{product.stock}</td>
                      <td>{product.categoria}</td>
                      <td>
                        <button className="button is-small is-warning mr-2" onClick={() => handleEdit(product)}>✏️ Editar</button>
                        <button className="button is-small is-danger" onClick={() => handleDelete(product._id)}>🗑 Eliminar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="has-text-centered has-text-grey">No hay productos registrados.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export { Dashboard };
