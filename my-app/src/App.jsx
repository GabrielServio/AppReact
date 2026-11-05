import { useState } from "react";
import ProdutoCard from "./components/ProdutoCard";
import { useEffect } from "react";

function App() {

  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: "Camiseta",
      preco: "49,90",
      descricao: "Camiseta básica de algodão."
    },
    {
      id: 2,
      nome: "Calça",
      preco: "99,90",
      descricao: "Calça jeans básica."
    },
    {
      id: 3,
      nome: "Tênis",
      preco: "149,90",
      descricao: "Tênis esportivo confortável."
    }
  ]);

  const [carregando, setCarregando] = useState(true);

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setCarregando(false);
    }, 2000);
  }, []);

  function adicionarProduto(e) {
    e.preventDefault();

    const novoProduto = {
      id: produtos.length + 1,
      nome: nome,
      preco: preco,
      descricao: descricao
    };

    setProdutos((produtosAtuais) => [...produtosAtuais, novoProduto]);

    setNome("");
    setPreco("");
    setDescricao("");
  }

  return (
    /* MAIN */
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-5xl font-bold italic text-center mb-10">Catálogo de Produtos</h1>

      <div className="flex gap-8">

        {/* PRODUTOS */}
        <section className="w-1/2">
          <h2 className="text-4xl font-bold italic text-center mb-5">Produtos</h2>
          {carregando ? (<p className="text-2xl font-bold italic text-center mb-5">Carregando produtos...</p>) : (
            produtos.map((produto) => (
              <ProdutoCard
                key={produto.id}
                nome={produto.nome}
                preco={produto.preco}
                descricao={produto.descricao}
              />
            ))
          )}
        </section>
        {/* PRODUTOS */}

        {/* FORMULARIO */}
        <section className="w-1/2">
          <h2 className="text-4xl font-bold italic text-center mb-5">Cadastro Produtos</h2>

          <form onSubmit={adicionarProduto}
            className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 flex flex-col">

            <input className="w-full bg-gray-900 text-lg py-4 p-3 rounded-lg border border-gray-700 outline-none focus:border-emerald-800 mb-3"
              type="text"
              placeholder="Nome do produto"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

            <input className="w-full bg-gray-900 text-lg py-4 p-3 rounded-lg border border-gray-700 outline-none focus:border-emerald-800 mb-3"
              type="text"
              placeholder="Preço"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              required
            />

            <textarea className="w-full bg-gray-900 text-lg py-4 p-3 rounded-lg border border-gray-700 outline-none focus:border-emerald-800 mb-3"
              placeholder="Descrição"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            />

            <button type="submit" className="w-1/2 self-center bg-emerald-800 hover:bg-emerald-900 text-lg p-3 font-bold rounded-xl transition-colors cursor-pointer">
              Cadastrar produto
            </button>

          </form>
        </section>
        {/* FORMULARIO */}

      </div>
    </main>
  );
}

export default App
