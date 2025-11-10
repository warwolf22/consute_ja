import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import InputBar from "../components/InputBar";
import ProductCard from "../components/ProductCard";
import HistoryList from "../components/HistoryList";

function ConsulteJa() {
  const [barcode, setBarcode] = useState("");
  const [produto, setProduto] = useState(null);
  const [historico, setHistorico] = useState([]);
  const [loading, setLoading] = useState(false);

  async function buscarProduto() {
    if (!barcode) return;
    setLoading(true);
    try {
      const resposta = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
      const dados = await resposta.json();

      if (dados.status === 1) {
        const produtoFormatado = {
          name: dados.product.product_name || "Sem nome",
          description: dados.product.generic_name || "Sem descrição",
          image: dados.product.image_front_url || "",
          price: (Math.random() * 50 + 10).toFixed(2)
        };
        setProduto(produtoFormatado);
        setHistorico([produtoFormatado, ...historico]);
      } else {
        alert("Produto não encontrado");
      }
    } catch (err) {
      console.error("Erro na requisição", err);
      alert("Erro na requisição");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4">ConsulteJá</h1>
      <InputBar barcode={barcode} setBarcode={setBarcode} buscarProduto={buscarProduto} loading={loading} />
      <ProductCard produto={produto} />
      <HistoryList historico={historico} onSelect={(p) => setProduto(p)} />
    </div>
  );
}

export default ConsulteJa;
