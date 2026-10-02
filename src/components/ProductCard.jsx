import { Card } from 'primereact/card';

const ProductCard = ({ product }) => {
    const header = (
        <div className="flex justify-content-center align-items-center p-3 border-bottom-1 surface-border bg-white" style={{ height: '220px' }}>
            <img 
                alt={product.title} 
                src={product.image || 'https://placehold.co/400x400?text=Sem+Imagem'} 
                style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} 
            />
        </div>
    );

    const footer = (
        <div className="mt-auto pt-3 border-top-1 surface-border flex align-items-center">
            <span className="text-2xl font-bold text-primary">${Number(product.price).toFixed(2)}</span>
        </div>
    );

    const titleElement = (
        <div>
            {product.category && (
                <span className="text-xs uppercase font-semibold text-500 mb-1 block">
                    {product.category}
                </span>
            )}
            <h3 
                className="text-base font-bold m-0 text-900"
                title={product.title}
                style={{ 
                    display: '-webkit-box', 
                    WebkitLineClamp: 2, 
                    WebkitBoxOrient: 'vertical', 
                    overflow: 'hidden', 
                    minHeight: '2.8rem',
                    lineHeight: '1.4rem' 
                }}
            >
                {product.title}
            </h3>
        </div>
    );

    return (
        <div className="col-12 sm:col-6 lg:col-4 xl:col-3 p-2">
            <Card 
                title={titleElement} 
                footer={footer} 
                header={header} 
                className="h-full flex flex-column shadow-2 hover:shadow-5 transition-all transition-duration-300 border-round overflow-hidden"
            >
                <p 
                    className="m-0 text-color-secondary text-sm line-height-3" 
                    style={{ 
                        display: '-webkit-box', 
                        WebkitLineClamp: 3, 
                        WebkitBoxOrient: 'vertical', 
                        overflow: 'hidden' 
                    }}
                >
                    {product.description}
                </p>
            </Card>
        </div>
    );
};

export default ProductCard;