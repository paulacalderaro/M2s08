import "./App.css";
import Header from "./components/Header";
import ItemReceita from "./components/ItemCardapio";

function App() {
  return (
    <div>
      <Header />

      <section>
        <h2>Nosso Cardápio</h2>
        <div className="container-cardapio">
          <ItemReceita
            title="Empada de Carne"
            description="Deliciosa empada recheada com carne moída e temperos especiais"
            price={10}
          />
          <ItemReceita
            title="Empada de Frango"
            description="Saborosa empada com frango desfiado e ervas finas"
            price={12}
          />
          <ItemReceita
            title="Empada de Camarão"
            description="Empada recheada com camarões frescos e temperos agridoces"
            price={15}
          />
          <ItemReceita
            title="Empada de Palmito"
            description="Empada vegetariana com palmito e azeitonas"
            price={11}
          />
          <ItemReceita
            title="Empada de Queijo"
            description="Clássica empada de queijo minas"
            price={9}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
