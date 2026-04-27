function ProductCard({ produto }) {
  if (!produto) return null;

  return (
    <div className="card mb-4 shadow-sm">
      {produto.image && (
        <img src={produto.image} className="card-img-top" alt={produto.name} />
      )}
      <div className="card-body">
        <h5 className="card-title">{produto.name}</h5>
        <p className="card-text">{produto.description}</p>
        {/* <p className="card-text"><strong>Preço:</strong> R$ {produto.price}</p> */}
      </div>
    </div>
  );
}

export default ProductCard;
