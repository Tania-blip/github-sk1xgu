import './App.css';
import { useState } from 'react';

function LocalApp() {
  /* 
        TODO 2.1: Pentru a salva Todo-urile decomenteaza blocul urmator
        
        Explicatii:
        In mod normal daca schimbi valoarea unei variabile din componenta ta,
        noua valoare nu va fi afisata pe ecran. Programatorul trebuie sa ii spuna
        lui React ca vrea sa afiseze pe ecran noua valoare, acest lucru este realizat
        folosind useState, care tine minte valoarea (primul entry din array) si ofera
        o functie cu care poti sa incarci o noua valoare in variabila (al doilea entry).

        useState primeste si un parametru care reprezinta valoarea cu care este initializata
        variabila.
    */

  const [todos, setTodos] = useState([
    {
      text: 'Mulge vaca 1',
      done: true,
    },
    {
      text: 'Strange laptele 2',
      done: false,
    },
  ]);

  /* 
        TODO 3.2: Pentru a salva Todo-urile decomenteaza blocul urmator
        
        Explicatii:
        Atunci cand se apasa un buton o functie este apelata. In cazul nostru
        functia construieste un nou Todo (newEntry) si dupa aceea seteaza sirul
        de todo-uri la un nou sir format din toate elementele existente (...todos)
        si noul element creat (newEntry).
    */

  function addNewTodo(form) {
    form.preventDefault();

    let newEntry = {
      text: form.target.todoAdder.value,
      done: false,
    };

    setTodos([...todos, newEntry]);
  }

  return (
    <div className="App">
      {/* 
            TODO 1: Scoate blocul urmator din comentarii si vezi ce apare pe ecran
        */}

      <h1>EVERYTHING</h1>

      <h1>heihei</h1>

      {/*
            TODO 3.1: Schimba functia atribuita lui onSubmit cu addNewTodo
        */}
      {
        <form action="" onSubmit={addNewTodo}>
          <label htmlFor="todoAdder">Add new item</label>
          <input
            type="text"
            name="todoAdder"
            id="todoAdder"
            placeholder={'Tasteaza aici.'}
            required={true}
          />
          <button type="submit">Adauga</button>
        </form>
      }

      {/* 
            TODO 2.2: Decomenteaza blocul urmator pentru a afisa lista de todo-uri
        */}
      {
        <ul>
          {todos.map((item, index) => {
            return (
              <li
                className={item.done ? 'finished' : 'notFinished'}
                key={item.id}
              >
                {`${index + 1}: ${item.text}`}
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
}

export default LocalApp;
