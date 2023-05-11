import { useLoaderData } from "react-router-dom";
import CoffeeCord from "./components/CoffeeCord";


const App = () => {

  const coffees = useLoaderData()

  return (
    <div className="m-20">
      <h1 className="text-center text-3xl font-bold underline my-20">
        Hot Hot cold coffee: {coffees.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-4 ">
        {
          coffees.map(coffee => <CoffeeCord
            key={coffee._id}
            coffee={coffee}
          >

          </CoffeeCord>)
        }
      </div>
    </div>
  );
};

export default App;