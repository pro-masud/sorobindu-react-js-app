import { useState } from "react";

const Alert = ({type, children }) => {
    const [Alert, setAlert] = useState(false);
  return (
    <>
        <button onClick={() => setAlert(true)} className="btn btn-warning">Show</button>
        {Alert && 
            (<p className={`alert alert-${type} d-flex justify-content-between`} >{children}<button onClick={() => setAlert(false)} className='btn-close'></button></p>)
        }
    </>
  )
}

export default Alert;
