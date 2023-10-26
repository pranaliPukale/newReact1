import React, { useReducer } from 'react'

const UseReducerHook1 = () => {
    const reducer=(count,action)=>{
switch (action) {
    case 'add':
        return count+1;
        break;
    case "sub":
        return count-1;
        break;
    case 'reset':
        return 0;
        break;

    default:
        break;
}
    }
const [count,dispach]=useReducer(reducer,0)
  return (
    <>
    <div>useReducerHook1</div>
    count:{count}
    <div>
<button onClick={()=>dispach("add")}>Add</button>
<button onClick={()=>dispach("sub")}>Sub</button>
<button onClick={()=>dispach("reset")}>Reset</button>
    </div>
    </>
  )
}

export default UseReducerHook1