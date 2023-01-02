import "./App.css";
import "./Boot.css"
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

export default function App() {

  return (
    <div className="App">
      <Bootstarp  />
    </div>
  )
}
function Bootstarp() {

  return (
    <div className="container">
      <div className="navbar"><h1>Pricing Table</h1></div>
    <div className="row row-cols-1 row-cols-md-3 g-4 ">
      <div className="col">
        <div className="card h-100 w-100 voot">
          <div className="card-body">
            <p className="card-text">FREE</p>
            <h5 className="card-title"><span className="head">0$</span>/month</h5>
            <hr></hr>
          </div>
          <div className="gg">
            <small className="text">
              <ol>
              {/* {name1.map((char1)=><li className="list">{char1}</li>)} */}
              <li className="list"><DoneIcon/>Single User</li>
              <li className="list"><DoneIcon/>5GB Storage</li>
              <li className="list"><DoneIcon/>Unlimited Public Projects</li>
              <li className="list"><DoneIcon/>Community Access</li>
              <li className="opacity"><CloseIcon/>Unlimited Private  Projects</li>
              <li className="opacity"><CloseIcon/>Dedicated Phone Support</li>
              <li className="opacity"><CloseIcon/>Free Subdomain</li>
              <li className="opacity"><CloseIcon/>Monthly Status Reports</li>
              </ol>
            </small>
            <div className="last"><a href="#" className="bt">BUTTON</a></div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100  w-100  voot">
          <div className="card-body">
            <p className="card-text">PLUS</p>
            <h5 className="card-title"><span className="head">$9</span>/month</h5>
            <hr></hr>
          </div>
          <div className="gg">
            <small className="text">
              <ol>
              {/* {name2.map((char2)=><li li className="list">{char2}</li>)} */}
              <li className="list"><DoneIcon/>Single User</li>
              <li className="list"><DoneIcon/>5GB Storage</li>
              <li className="list"><DoneIcon/>Unlimited Public Projects</li>
              <li className="list"><DoneIcon/>Community Access</li>
              <li className="list"><DoneIcon/>Unlimited Private  Projects</li>
              <li className="list"><DoneIcon/>Dedicated Phone Support</li>
              <li className="list"><DoneIcon/>Free Subdomain</li>
              <li className="opacity"><CloseIcon/>Monthly Status Reports</li>
              </ol>
            </small>
            <div className="last"><a href="#" className="bt">BUTTON</a></div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100  w-100  voot">
          <div className="card-body">
            <p className="card-text">PRO</p>
            <h5 className="card-title"><span className="head">$49</span >/month</h5>
            <hr></hr>
          </div>
          <div className="gg">
            <small className="text">
              <ol>
              {/* {name3.map((char3)=><li li className="list">{char3}</li>)} */}
              <li className="list"><DoneIcon/>Single User</li>
              <li className="list"><DoneIcon/>5GB Storage</li>
              <li className="list"><DoneIcon/>Unlimited Public Projects</li>
              <li className="list"><DoneIcon/>Community Access</li>
              <li className="list"><DoneIcon/>Unlimited Private  Projects</li>
              <li className="list"><DoneIcon/>Dedicated Phone Support</li>
              <li className="list"><DoneIcon/>Free Subdomain</li>
              <li className="list"><DoneIcon/>Monthly Status Reports</li>
              </ol>
            </small>
            <div className="last"><a href="#" className="bt">BUTTON</a></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}





