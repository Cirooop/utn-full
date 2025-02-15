import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { getAllProducts } from "../services/api";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchingProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };
    fetchingProducts();
  }, []);

  return (
    <Layout>
      <section className="section has-background-light">
        <div className="container">
          <h1 className="title has-text-centered has-text-dark">🛒 Lista de Productos</h1>

          {products.length > 0 ? (
            <div className="columns is-multiline">
              {products.map((product) => (
                <div key={product._id} className="column is-one-third">
                  <div className="card">
                    {/* Imagen con tamaño fijo */}
                    <div className="card-image">
                      <figure className="image">
                        <img
                          src={product.img}
                          alt={product.nombre}
                          style={{ height: "350px", width: "100%", objectFit: "cover" }}
                        />
                      </figure>
                    </div>

                    {/* Contenido del producto */}
                    <div className="card-content">
                      <p className="title is-5">{product.nombre}</p>
                      <p className="subtitle is-6">{product.descripcion}</p>

                      <div className="content">
                        <p className="has-text-weight-bold has-text-danger is-size-5">${product.precio}</p>
                        <p className="is-size-7 has-text-grey">Stock: {product.stock}</p>
                        <p className="is-size-7 has-text-grey-light">Categoría: {product.categoria}</p>
                      </div>
                    </div>

                    {/* Botón de acción */}
                    <footer className="card-footer">
                      <a href="#" className="card-footer-item has-text-weight-bold has-text-primary">
                        Ver más
                      </a>
                    </footer>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="has-text-centered has-text-grey-dark">No hay productos disponibles.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export { Home };
