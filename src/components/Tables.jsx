import Row from "./Row";
import Column from "./Columns";
import AddTransaction from "./AddTransaction";
function Tables({ transacts}) {

  return (
    <>

      <table className="table">
        <Column />
        <Row transacts={transacts}/>
        
      </table>
    </>

  )

}

export default Tables;