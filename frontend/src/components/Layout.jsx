import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      {/* Navbar */}
      <header>
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
          <div className="container is-flex is-align-items-center is-justify-content-space-between">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item has-text-weight-bold is-size-4 has-text-white">
                🛍️ MiTienda
              </Link>
              <span className="navbar-burger" data-target="navMenu">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navMenu" className="navbar-menu">
              <div className="navbar-start">
                <Link to="/" className="navbar-item has-text-light">🏠 Home</Link>
                <Link to="/dashboard" className="navbar-item has-text-light">📊 Dashboard</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>


      {/* Contenido Principal */}
      <main className="section is-medium">
        <div className="container has-text-centered">{children}</div>
      </main>

      {/* Footer */}
      <footer className="footer has-background-dark has-text-white">
        <div className="content has-text-centered">
          <p className="is-size-6">&copy; 2024 MiTienda. Todos los derechos reservados.</p>
          <p className="is-size-7">Síguenos en nuestras redes sociales 🚀</p>
        </div>
      </footer>
    </>
  );
};

export { Layout };
