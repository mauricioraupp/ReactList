// src/App.js
import React from 'react';
import ListaDeTarefas from './Components/ListaDeTarefas';

function App() {
  const tarefas = [
    { id: 1, descricao: 'Estudar React', estado:'Concluído' },
    { id: 2, descricao: 'Fazer compras', estado:'Não concluído' },
    { id: 3, descricao: 'Limpar a casa', estado:'Não concluído' },
  ];

  return (
    <div className="w-full flex justify-center">
      <header className=" w-5/6 flex flex-col justify-center">
        <h1 className="text-center text-3xl font-semibold p-10 text-slate-50">Minha Lista de Tarefas</h1>
        <ListaDeTarefas tarefas={tarefas} />
      </header>
    </div>
  );
}

export default App;
