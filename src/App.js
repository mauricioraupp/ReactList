import React, { useState } from 'react';
import ListaDeTarefas from './Components/ListaDeTarefas';
import AdicionarTarefa from './Components/AdicionarTarefa';
import MoonIcon from './Components/MoonIcon';

function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, descricao: 'Estudar React', estado: 'Concluído' },
    { id: 2, descricao: 'Fazer compras', estado: 'Não concluído' },
    { id: 3, descricao: 'Limpar a casa', estado: 'Não concluído' },
  ]);

  const adicionarTarefa = (descricao, estado) => {
    const novaId = tarefas.length ? tarefas[tarefas.length - 1].id + 1 : 1;
    const novaTarefaObj = {
      id: novaId,
      descricao,
      estado
    };
    setTarefas([...tarefas, novaTarefaObj]);
  };

  return (
    <div className="w-full flex justify-center">
      <header className="w-5/6 flex flex-col gap-10 justify-center">
        <h1 className="text-center text-3xl font-semibold pt-10 text-slate-900 dark:text-slate-50">Minha Lista de Tarefas</h1>
        <MoonIcon/>
        <AdicionarTarefa adicionarTarefa={adicionarTarefa} />
        <ListaDeTarefas tarefas={tarefas} setTarefas={setTarefas}/>
      </header>
    </div>
  );
}

export default App;