//local storage
export const fetchData = (key) =>{
    return JSON.parse(localStorage.getItem(key));
};

//delete item
export const deleteItem= ({key})=>{
    return localStorage.removeItem(key)
}

//create budget
export const createBudget =({name,amount})=>{
    const newItem={
        id: crypto.randomUUID(),
        name: name,
        ceateAt: Data.now(),
        amount: +amount ,
        color: generateRandomColor()
    }
    const existingBudgets = fetchData("budgets") ??[ ]
    return localStorage.setItem("budgets",JSON.stringify([...existingBudgets, newItem]))
}
//generate random color
const generateRandomColor=()=>{
    const existingBudgetLength = fetchData("budgets") ?.length ?? 0 ;
    return ` ${existingBudgetLength * 34} 65% 50%`
}
//
export const waait = () => new Promise(res => setTimeout(res, Math.random() * 2000))