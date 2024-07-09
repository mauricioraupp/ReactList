import React, { useState } from 'react';
import ListaDeTarefas from './Components/ListaDeTarefas';
import AdicionarTarefa from './Components/AdicionarTarefa';
import useDarkMode from './Hooks/DarkMode';

function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
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
    <div className="w-full flex justify-center"{...isDarkMode ? 'dark' : ''}>
      <header className="w-5/6 flex flex-col gap-10 justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        className='size-10 fixed top-14 right-24 cursor-pointer' onClick={toggleDarkMode}
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
        </svg>
        <h1 className="text-center text-3xl font-semibold pt-10 text-slate-900 dark:text-slate-50">Minha Lista de Tarefas</h1>
        <AdicionarTarefa adicionarTarefa={adicionarTarefa} />
        <ListaDeTarefas tarefas={tarefas} />
      </header>
    </div>
  );
}

export default App;
