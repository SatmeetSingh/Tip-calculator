import "bootstrap/dist/css/bootstrap.css";
import Input from "./Input";

function App() {
  return (
    <div className="flex flex-col justify-center items-center  bg-stone-400 h-screen">
      <h1
        className="font-serif text-5xl text-white
      "
      >
        Tip Calculator
      </h1>
      <div className="  m-20 text-xl border-2 rounded-2xl p-3 bg-slate-100 ">
        <Input />
      </div>
    </div>
  );
}

export default App;
