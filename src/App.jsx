import Alert from './components/Alert/Alert';
import './App.css'

const App = () => {
  return (
    <>
     <div className="container my-5">
        <div className="row ">
            <div className="col-md-12">
                <div className="compo-alert">
                  <Alert type={'danger'}>This is a Danger Alert</Alert>
                  <Alert type={'info'}>This is a Info Alert </Alert>
                  <Alert type={'warning'}>This is a Warning Alert </Alert>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
