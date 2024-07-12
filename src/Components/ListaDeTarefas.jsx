import React from 'react';

const ListaDeTarefas = ({ tarefas, setTarefas }) => {
  const removeTr = (e) => {
    const targetId = parseInt(e.target.parentElement.firstChild.innerText) - 1;
    const novasTarefas = tarefas.filter((_, index) => index !== targetId);
    setTarefas(novasTarefas);
  };

  return (
    <table className="w-3/4 m-auto mb-10 border-solid border border-slate-900 dark:border-slate-100 
    border-separate border-spacing-0 rounded-xl">
      <thead className='bg-slate-200 dark:bg-slate-800'>
        <tr>
          <th className="text-left text-slate-800 dark:text-slate-100 max-w-1">Ordem</th>
          <th className="text-left text-slate-800 dark:text-slate-100">Tarefa</th>
          <th className="text-left text-slate-800 dark:text-slate-100">Estado</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tarefas.map((tarefa, index) => (
          <tr key={tarefa.id}>
            <td className="text-slate-800 dark:text-slate-100">{index + 1}</td>
            <td className="text-slate-800 dark:text-slate-100">{tarefa.descricao}</td>
            <td className="text-slate-800 dark:text-slate-100 w-1/3">{tarefa.estado}</td>
            <td className="text-right w-px cursor-pointer" onClick={removeTr}>❌</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListaDeTarefas;
