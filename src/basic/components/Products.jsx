import React, { useEffect, useState } from 'react';

export default function Products() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [products, setProducts] = useState([]);

  const handleChange = () => {
    setChecked(prev => !prev);
    setLoading(true);
  }

  useEffect(() => {    
    setLoading(true);
    setError(undefined);
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      })
      .catch((e) => {
        setError('에러가 발생했습니다!!!')
      })
      .finally(() => {
        setLoading(false);
      })

    return () => {
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, [checked]);

  if(loading) return <div>로딩중...</div>

  if(error) return <div style={{color: 'red'}}>{ error }</div>

  return (
    <>
      <input id="chk" type="checkbox" value={checked} onChange={handleChange} />
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
