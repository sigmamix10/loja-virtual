import { useState, useEffect, useRef } from 'react';
import api from '../services/api';
import ProductCard from './ProductCard';
import ProductForm from './ProductForm';
import { Toast } from 'primereact/toast';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const toast = useRef(null);

    useEffect(() => {
        api.get('/products')
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Erro:", error);
                setLoading(false);
                toast.current?.show({ severity: 'error', summary: 'Erro', detail: 'Falha ao carregar produtos.', life: 3000 });
            });
    }, []);

    const handleAddProduct = (productData) => {
        return api.post('/products', productData)
            .then(response => {
                const createdProduct = {
                    ...response.data,
                    id: response.data.id ? `${response.data.id}-${Date.now()}` : Date.now()
                };
                setProducts(prevProducts => [createdProduct, ...prevProducts]); 
                toast.current?.show({ severity: 'success', summary: 'Sucesso', detail: 'Produto adicionado com sucesso!', life: 3000 });
            })
            .catch(error => {
                console.error("Erro:", error);
                toast.current?.show({ severity: 'error', summary: 'Erro', detail: 'Falha ao guardar o produto.', life: 3000 });
            });
    };

    return (
        <div className="p-4 max-w-screen-xl mx-auto">
            <Toast ref={toast} position="top-right" />
            <ProductForm onAddProduct={handleAddProduct} />
            <div className="flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
                <h2 className="text-3xl font-bold m-0 text-900">Catálogo de Produtos</h2>
                {!loading && (
                    <span className="text-500 font-medium">
                        {products.length} {products.length === 1 ? 'produto' : 'produtos'}
                    </span>
                )}
            </div>
            {loading ? (
                <div className="text-center text-xl p-5 text-600">
                    <i className="pi pi-spin pi-spinner mr-2 text-2xl"></i>A carregar catálogo...
                </div>
            ) : (
                <div className="grid">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductList;