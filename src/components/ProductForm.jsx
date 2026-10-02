import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';

const ProductForm = ({ onAddProduct }) => {
    const initialFormState = { title: '', price: null, description: '', image: '', category: '' };
    const [newProduct, setNewProduct] = useState(initialFormState);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newProduct.title.trim() || newProduct.price === null) return;

        setLoading(true);
        const productData = {
            ...newProduct,
            image: newProduct.image.trim() || 'https://placehold.co/400x400?text=Novo+Produto'
        };
        try {
            await onAddProduct(productData);
            setNewProduct(initialFormState);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="surface-card p-4 shadow-2 border-round mb-6 max-w-3xl mx-auto">
            <div className="flex align-items-center justify-content-center gap-2 mb-4">
                <i className="pi pi-plus-circle text-2xl text-primary"></i>
                <h2 className="text-2xl font-bold m-0 text-900">Adicionar Novo Produto</h2>
            </div>
            <form onSubmit={handleSubmit} className="p-fluid grid formgrid">
                <div className="field col-12 md:col-6">
                    <label htmlFor="title" className="font-semibold text-700">Nome *</label>
                    <InputText 
                        id="title" 
                        value={newProduct.title} 
                        onChange={(e) => setNewProduct({...newProduct, title: e.target.value})} 
                        placeholder="Ex: Tênis Esportivo"
                        required 
                    />
                </div>
                <div className="field col-12 md:col-6">
                    <label htmlFor="price" className="font-semibold text-700">Preço ($) *</label>
                    <InputNumber 
                        id="price" 
                        value={newProduct.price} 
                        onValueChange={(e) => setNewProduct({...newProduct, price: e.value})} 
                        mode="currency" 
                        currency="USD" 
                        locale="en-US"
                        placeholder="$0.00"
                        required 
                    />
                </div>
                <div className="field col-12">
                    <label htmlFor="image" className="font-semibold text-700">URL da Imagem</label>
                    <InputText 
                        id="image" 
                        value={newProduct.image} 
                        onChange={(e) => setNewProduct({...newProduct, image: e.target.value})} 
                        placeholder="https://exemplo.com/foto.jpg (opcional)"
                    />
                </div>
                <div className="field col-12">
                    <label htmlFor="description" className="font-semibold text-700">Descrição *</label>
                    <InputTextarea 
                        id="description" 
                        value={newProduct.description} 
                        onChange={(e) => setNewProduct({...newProduct, description: e.target.value})} 
                        rows={3} 
                        placeholder="Detalhes sobre o produto..."
                        required 
                    />
                </div>
                <div className="col-12 flex justify-content-end mt-2">
                    <Button 
                        type="submit" 
                        label="Salvar Produto" 
                        icon="pi pi-check" 
                        loading={loading}
                        className="w-auto" 
                    />
                </div>
            </form>
        </div>
    );
};

export default ProductForm;