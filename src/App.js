import "./App.css";
import { Testimonio } from "./componentes/Testimonio.js";
import { testimonios } from "./componentes/Testimonio.js";

function App() {
  return (
    <div className="App">
      <h1 className="titulo"> Esto es lo que dicen nuestros clientes: </h1>
      <div className="hijoDeApp">
        {testimonios.map((test) => (
          <Testimonio
            key={test.id}
            imagen={test.imagen}
            nombre={test.nombre}
            profesion={test.profesion}
            testimonio={test.testimonio}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
