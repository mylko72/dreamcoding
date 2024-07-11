import { useEffect, useState } from 'react';

export default function useProduct({isOnlySale}){
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {    
        setLoading(true);
        setError(undefined);
        fetch(`data/${isOnlySale ? 'sale_' : ''}products.json`)
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
    }, [isOnlySale]);

    return [
        error,
        loading,
        products
    ]    
}