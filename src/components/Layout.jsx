const Layout = ({ children }) => {
    return (
        <div className="min-h-screen surface-ground pb-5">
            {/* Cabeçalho com fundo azul e texto branco, sem ícone de carrinho */}
            <header className="py-3 px-4 shadow-2 mb-5">
                <div className="max-w-screen-xl mx-auto flex align-items-center gap-3">
                    <i className="pi pi-shopping-bag text-3xl"></i>
                    <h1 className="m-0 text-2xl font-bold">Minha Loja Virtual</h1>
                </div>
            </header>
            
            {/* Conteúdo das páginas */}
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;