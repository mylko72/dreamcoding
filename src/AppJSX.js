import './App.css';

function AppJSX() {
  const objStyle = {width:'200px', height:'200px', border:'1px solid blue'}
  const name ='엘리';
  const lists = ['우유', '딸기', '바나나', '스콘', '요거트'];
  return (
    <>
      <h1>{`Hello, ${name}`}</h1>
      <ul>
        {
          lists.map(list => (
            <li>{list}</li>
          ))
        }
      </ul>
      <img
        style={objStyle} 
        src="https://images.unsplash.com/photo-1718489211836-65a20ad6bd8d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" 
        alt="test" />
    
    </>


  );
}

export default AppJSX;
