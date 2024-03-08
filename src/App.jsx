import Alert from './components/Alert/Alert'
import './App.css'

function App() {

  return (
    <>
     <div className="container my-5">
        <div className="row ">
            <div className="col-md-12">
                <div className="compo-alert">
                  <Alert type={'danger'}>this is a alert </Alert>
                  <Alert type={'info'} />
                  <Alert type={'warning'} />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
