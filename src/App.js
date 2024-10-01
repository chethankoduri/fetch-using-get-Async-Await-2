import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  let[products,setProducts] = useState([]);
  let [users, setUsers] = useState([]);

useEffect(() => {
  //getProductsFromServer();
},[]);

let getProductsFromServer = async ()=> {

  let reqOptions = {
    method:"GET",
  };

let JSONData = await fetch("https://fakestoreapi.com/products",reqOptions);
let JSOData = await JSONData.json();
setProducts(JSOData);

console.log(JSOData);

};

let getListOfUsersFromServer = async ()=> {
  let reqOptions = {
    method:"GET",
  };
  let JSONData = await fetch("https://reqres.in/api/users?page=2",
    reqOptions
  );

  let JSOData = await JSONData.json();
  setUsers(JSOData.data)

  console.log(JSOData.data);
};

  return(
    <div className="App">
    <button onClick={()=>{
      getProductsFromServer();
  }}
    >
    Get Products
    </button>
    <button onClick={()=>{
      getListOfUsersFromServer();
    
    }}
    >
      Get Users List
      </button>
    <div className="productsContainer">
    {products.map((ele,i) => {
    return (
    <div className="productDiv">
      <h4>{ele.title}</h4>
      <img className="productPic" title ={ele.description}
      src={ele.image}
      ></img>
      <h5>₹.{ele.price}</h5>
    </div>
    );
    })}
    </div>
<div>
  {users.map((ele,i)=> {
return(
  <div>
<h1>
 {ele.first_name},{ele.last_name} 
</h1>
<img src={ele.avatar}></img>
</div>
  );
 })}
</div>
    </div>
  );
}

export default App;
