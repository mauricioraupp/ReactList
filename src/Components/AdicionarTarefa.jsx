import React, { useState } from 'react';

function AdicionarTarefa({ adicionarTarefa }) {
  const [novaTarefa, setNovaTarefa] = useState('');
  const [estadoTarefa, setEstadoTarefa] = useState('Não concluído');

  const handleAdicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      adicionarTarefa(novaTarefa, estadoTarefa);
      setNovaTarefa('');
    }
  };

  return (
    <div className="flex justify-center">
      <article>
        <input type="text" value={novaTarefa} onChange={(e) => setNovaTarefa(e.target.value)}
          className="pl-3 pr-3 pt-2 pb-2 border border-gray-300 rounded-l"placeholder="Nova tarefa"/>
        <select name="estado" value={estadoTarefa} onChange={(e) => setEstadoTarefa(e.target.value)}
          className="pl-3 pr-3 pt-2 border border-gray-300 rounded-r">
            <option value="Não concluído">Não concluído</option>
            <option value="Concluido">Concluído</option>
        </select>
      </article>
      <button onClick={handleAdicionarTarefa} className="ml-2 p-2 bg-sky-600 text-white rounded-xl font-semibold hover:bg-sky-700">Adicionar</button>
    </div>
  );
}

export default AdicionarTarefa;