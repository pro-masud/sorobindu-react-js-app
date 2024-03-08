const Alert = ({type, children }) => {
  return (
    <>
      <p className={`alert alert-${type} d-flex justify-content-between`} >{children}<button className='btn-close'></button></p>
    </>
  )
}

export default Alert;
