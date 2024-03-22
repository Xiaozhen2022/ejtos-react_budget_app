import React, { useContext, useState } from 'react';
import { AppContext  } from '../context/AppContext';


const Budget = () => {
    const { dispatch, currency,expenses} = useContext(AppContext);
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const upperLimitValue = 20000
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (e) => {
        setNewBudget(e.target.value);
    }
    const handleKeyDown = (e) => {

        if ( e.key === 'Enter' && newBudget <= upperLimitValue && newBudget< totalExpenses) {
          dispatch({ type: "SET_BUDGET", payload: newBudget });
        }else if (newBudget > upperLimitValue) {
            alert("The value cannot exceed upper limit value!");  
        }
         else if ( newBudget < totalExpenses) {alert("The value cannot be lower than spending"); }

      };
      

    return (
        <div className="alert alert-secondary ">
            <label>Budget: {currency}</label>
            <input
                className='w-50 ms-1'
                required
                type="number"
                id="cost"
                step={10}
                value={newBudget}
                onChange={handleBudgetChange}
                onKeyDown={handleKeyDown}
            />
    </div>

    );
};
export default Budget;