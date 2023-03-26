import { useContext, useState } from 'react';
import { data } from './lib/data'
import './App.scss';
import logo from "./image/Logo.svg";
import Order from './Component/Order/Order';
import { Context } from './Context/Context';


function App() {
  const [category, setCategory] = useState('Ichimlik')
  const [active, setActive] = useState(1)
  const [active2, setActive2] = useState(0)
  const types = []
  data.forEach(element => {
    if (types.includes(element.type) !== true) {
      types.push(element.type)
    }
    
  });
  const {order,setOrder} = useContext(Context)
  return (
    <div className="App">
      <nav className="control">
        <ul>
          <li key={data.id}><a href="#"><img src={logo} className="logo" alt="" /></a></li>
          <li key={data.id} className={active === 1 ? "active" : null} ><a href="#" onClick={() => setActive(1)}><i className="bi bi-house"></i></a></li>
          <li key={data.id} className={active === 2 ? "active" : null}><a href="#" onClick={() => setActive(2)}><i className="bi bi-activity"></i></a></li>
          <li key={data.id} className={active === 3 ? "active" : null}><a href="#" onClick={() => setActive(3)}><i className="bi bi-bell"></i></a></li>
          <li key={data.id} className={active === 4 ? "active" : null}><a href="#" onClick={() => setActive(4)}><i className="bi bi-patch-plus"></i></a></li>
          <li key={data.id} className={active === 5 ? "active" : null}><a href="#" onClick={() => setActive(5)}><i className="bi bi-gear"></i></a></li>
          <li key={data.id} className={active === 6 ? "active" : null}><a href="#" onClick={() => setActive(6)}><i className="bi bi-envelope-open"></i></a></li>
          <li key={data.id} className={active === 7 ? "active" : null}><a href="#" onClick={() => setActive(7)}><i className="bi bi-box-arrow-in-right"></i></a></li>
        </ul>
      </nav>
      
      <div className="main">
        <div className="hero">
          <span className="text_logo">Jaegar Resto</span>


          <input type="search" placeholder='Search' />
        </div>
        <span className='date'>Wednesday, 13 Mar 2023</span>

        <div className='menu'>
          {
            types && types.map((i, index) => (
              <button Key={index} onClick={() => (
                setCategory(i),
                setActive2(index)
              )} className={active2 === index ? "menu__active" : null}>{i}</button>
            ))
          }

        </div>
          <ul className="card__list">
            {
              data && data.filter((i) => i.type === category).map((item, index) => (
                <li className="card__item" Key={index}>
                  <img src={item.img} alt="" />
                  {item.title}
                  <b>narxi: {item.price}$</b>
                  <i>id: {item.id}</i>
                  <button onClick={()=> {
                      setOrder([...new Set(order), item])
                      item.count = item.count? item.count + 1 : 1
                      item.have = item.have? item.have - 1 : item.have
                    }}  Key={index}>Savatga Solish</button>
                  </li>
              ))
            }
          </ul>
      </div>
      <Order/>
    </div>
  );
}

export default App;
