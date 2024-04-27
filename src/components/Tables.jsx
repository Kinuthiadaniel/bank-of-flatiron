import Row from "./Row";
import Column from "./Columns";
function Tables({ transacts }) {

  return (
    <>

      <table className="table">
        <Column />
        <Row transacts={transacts} />
      </table>
    </>

  )

}

export default Tables;