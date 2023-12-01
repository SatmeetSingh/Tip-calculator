import { useState } from "react";

function Input() {
  const [person, setPerson] = useState(1);
  const [tip, setTip] = useState(0);
  const [bill, setBill] = useState(0);

  const Tip = (tip * bill) / 100 / person;

  const Total = bill / person + Tip;

  const Disabled = tip <= 0 && "disabled";
  const Disabled1 = tip >= 100 && "disabled";
  const Disabled2 = person <= 1 && "disabled";
  const Disabled3 = person >= 100 && "disabled";

  return (
    <div className="grid grid-cols-2 gap-[2em]">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <label>Bill</label>
          <input
            type="number"
            placeholder="Amount"
            className="border-2 p-1 "
            min={0}
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </div>

        <div className="input-group mb-3 flex ">
          <label htmlFor="button-addon1" className="form-label mr-2">
            Tip%
          </label>

          <button
            className="btn btn-outline-secondary px-3 font-bold bg-slate-100 "
            type="button"
            id="button-addon1"
            onClick={() => {
              setTip((prev) => prev - 1);
            }}
            disabled={Disabled}
          >
            -
          </button>
          <input
            type="number"
            className="form-control"
            placeholder=""
            min={1}
            max={100}
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            value={tip}
            onChange={(e) => setTip(e.target.value)}
          />

          <button
            className="btn btn-outline-secondary px-3 bg-slate-100"
            type="button"
            id="button-addon2"
            onClick={() => {
              setTip((prev) => prev + 1);
            }}
            disabled={Disabled1}
          >
            +
          </button>
        </div>
        <div className="input-group mb-3 flex ">
          <label htmlFor="button-addon1" className="form-label mr-2">
            Number of person
          </label>

          <button
            className="btn btn-outline-secondary px-3 font-bold bg-slate-100 "
            type="button"
            id="button-addon1"
            onClick={() => {
              setPerson((prev) => prev - 1);
            }}
            disabled={Disabled2}
          >
            -
          </button>
          <input
            type="number"
            className="form-control"
            placeholder=""
            min={1}
            max={100}
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            value={person}
            onChange={(e) => setPerson(e.target.value)}
          />

          <button
            className="btn btn-outline-secondary px-3 bg-slate-100"
            type="button"
            id="button-addon2"
            onClick={() => {
              setPerson((prev) => prev + 1);
            }}
            disabled={Disabled3}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between my-10">
        <div className="flex items-center justify-between  font-semibold text-3xl">
          <h1>Tip</h1>
          <h1 className="font-mono">$ {Tip.toFixed(2)}</h1>
        </div>
        <div className="flex items-center justify-between  font-bold text-3xl">
          <h1>Total</h1>
          <h1 className="font-mono">$ {Total.toFixed(2)}</h1>
        </div>
      </div>
    </div>
  );
}

export default Input;
