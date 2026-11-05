function ProdutoCard(props) {
    return (
        <div className="mb-4 bg-gray-800 p-5 rounded-xl shadow-lg border border-emerald-800">

            <h2 className="text-2xl font-bold mb-2">
                {props.nome}
            </h2>

            <p className="font-semibold mb-2">
                Preço: R$ {props.preco}
            </p>

            <p className="text-gray-300">
                {props.descricao}
            </p>

        </div>
    )
}

export default ProdutoCard