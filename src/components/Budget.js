import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
  
        const inputvalue = event.target.value;

        if (parseInt(inputvalue)>20000) {
            alert("Your input number is exceed 2000");
            setNewBudget('2000');
        }
        // else if (parseInt(inputvalue)<totalExpenses) {
        //     alert("Your input number should not less than totalExpenses!");
        //     setNewBudget('2000');
        //             }
        else {setNewBudget(inputvalue);}
        
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
