import Layout from './components/Layout';
import ProductList from './components/ProductList';

function App() {
  return (
    <Layout>
        {/* Tudo o que colocar aqui dentro entra no {children} do Layout */}
        <ProductList />
    </Layout>
  );
}

export default App;