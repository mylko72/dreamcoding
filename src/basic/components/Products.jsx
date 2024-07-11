import React, { useState } from 'react';
import useProduct from '../../hook/use-product';

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [error, loading, products] = useProduct({isOnlySale: checked});

  const handleChange = () => {
    setChecked(prev => !prev);
  }

  if(loading) return <div>로딩중...</div>

  if(error) return <div style={{color: 'red'}}>{ error }</div>

  return (
    <>
      <input id="chk" type="checkbox" value={checked} checked={checked} onChange={handleChange} />
      <label htmlFor='chk'>세일 품목을 보시려면 체크하세요!!</label>
      <ul>
        {products.map((product, idx) => (
          <li key={idx}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      {/* <button onClick={() => setCount((prev) => prev + 1)}>{count}</button> */}
    </>
  );
}
