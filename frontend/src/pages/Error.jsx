import { Layout } from "../components/Layout";

const Error = () => {
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-red-500 animate-bounce">Error</h1>
          <p className="text-lg mt-4 text-gray-300">Algo salió mal. Por favor, inténtalo de nuevo.</p>
          <a href="/" className="mt-6 inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition">
            Volver al inicio
          </a>
        </div>
      </section>
    </Layout>
  );
};

export { Error };
