import "bootstrap/dist/css/bootstrap.css";
import Input from "./Input";
import { CalculatorProvider } from "./context/context";
import Heading from "./Heading";

function App() {
  return (
    <CalculatorProvider>
      <div className="flex flex-col justify-center items-center  bg-stone-400 h-screen">
        <Heading />
        <div className="  m-20 text-xl border-2 rounded-2xl p-3 bg-slate-100 ">
          <Input />
        </div>
      </div>
    </CalculatorProvider>
  );
}

export default App;
