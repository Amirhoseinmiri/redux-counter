import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import { setIncomeActions } from "store/expense/expense-slice";

export function IncomeInput(props) {
  const income = useSelector((store) => store.EXPENSE.income);
  const dispatch = useDispatch();
  const setIncome = (e) => {
    dispatch(setIncomeActions(Number.parseFloat(e.target.value)));
  };
  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input
          type="number"
          defaultValue={income}
          onChange={setIncome}
          className="form-control"
          placeholder="Ex: 3000"
        />
      </div>
    </div>
  );
}
