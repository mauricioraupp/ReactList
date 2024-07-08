// src/ListaDeTarefas.js
import React from 'react';

const ListaDeTarefas = ({ tarefas }) => {
  return (
    <table className="w-3/4 m-auto border-solid border-2 border-slate-100 border-separate border-spacing-0 rounded-2xl">
      <thead>
        <tr>
          <th className="text-left text-slate-100">Ordem</th>
          <th className="text-left text-slate-100">Tarefa</th>
          <th className="text-left text-slate-100">Estado</th>
        </tr>
      </thead>
      <tbody className="rounded-lg">
        {tarefas.map((tarefa) => (
          <tr key={tarefa.id}>
            <td className="text-slate-100">{tarefa.id}</td>
            <td className="text-slate-100">{tarefa.descricao}</td>
            <td className="text-slate-100">{tarefa.estado}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListaDeTarefas;