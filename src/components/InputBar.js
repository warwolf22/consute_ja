function InputBar({ barcode, setBarcode, buscarProduto, loading }) {
  return (
    <div className="row mb-4">
      <div className="col-md-8">
        <input
          type="text"
          className="form-control"
          placeholder="Digite o código de barras"
          value={barcode}
          onChange={(e) => setBarcode(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && buscarProduto()}
        />
      </div>
      <div className="col-md-4">
        <button
          className="btn btn-primary w-100"
          onClick={buscarProduto}
          disabled={loading}
        >
          {loading ? "Carregando..." : "Consultar"}
        </button>
      </div>
    </div>
  );
}

export default InputBar;
