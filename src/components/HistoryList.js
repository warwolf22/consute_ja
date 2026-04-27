function HistoryList({ historico, onSelect }) {
  if (historico.length === 0) return null;

  return (
    <div>
      <h4>Histórico de Consultas</h4>
      <div className="list-group">
        {historico.map((p, idx) => (
          <button
            key={idx}
            className="list-group-item list-group-item-action"
            onClick={() => onSelect(p)}
          >
            {<strong>{p.name}</strong>}
          </button>
        ))}
      </div>
    </div>
  );
}

export default HistoryList;
