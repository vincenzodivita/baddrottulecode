import './App.css';

function App() {

  const appName = (<strong className="App-name">baddrottuleCode</strong>);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{appName}</h1>
        <span>
          Benvenuto su {appName}, il mio spazio personale dove condivido le mie avventure di programmazione!
        </span>
     
        <h2>Un Gioco di Parole tra Cultura e Codice</h2>
        <p>
          Il nome del mio sito, {appName}, è un gioco di parole che fonde la tradizione siciliana con un termine ben noto nel mondo della programmazione: spaghetti code.
        </p>
        <h2>Cos'è lo Spaghetti Code?</h2>
        <p>
          In informatica, il termine spaghetti code descrive un codice sorgente che è mal strutturato, difficile da seguire e da mantenere. Proprio come un piatto di spaghetti ingarbugliati, il codice spaghetti presenta un flusso di controllo caotico e intricato, rendendo complicata la comprensione e la modifica del programma.
        </p>
        <h2>Il mio {appName}</h2>
        <p>
          Ho scelto di chiamare il mio sito {appName} per aggiungere un tocco di sicilianità al concetto di codice disordinato. Le baddrottole sono un termine dialettale siciliano, che ho scelto per rappresentare le mie radici. Anche se il mio sito non tratta di cucina, voglio evidenziare l'importanza di mantenere il codice ordinato e ben strutturato, pur riconoscendo che il mio codice inevitabilmente finirà per essere un po' disordinato – il mio "codice baddrottole".
        </p>
    
      </header>

    </div>
  );
}

export default App;
