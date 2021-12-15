
import { MainArray } from './BillInputs';

export const Bill = () => {
    return (
      <>
      {MainArray.map((values) =>{
        return(
          <div className="bill">
          <p>{values.id}</p>
        <p>{values.title}</p>
        <h2>{values.amount}</h2>
      </div>
        )
      })}
      
      </>
    )
}
export default Bill;