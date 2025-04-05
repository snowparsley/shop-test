import { useParams } from "react-router-dom";
import { Wrappers } from "../components/styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {

    const params = useParams();
    const [item, setItem] = useState({})
    useEffect(() => {
        getitem();
    }, [])
    const getitem = async () => {
        try {
            let { data: response } = await axios.get(`/api/shop/product/${params.id}/?id=${params.id}&brand_id=12&root_id=1`);
            console.log(response)
            setItem(response.data)
        } catch (err) {
            console.log(err);
        }

    }
    return (

        <>
            <Wrappers>
                {item.product_name}
            </Wrappers>
        </>
    )
}
export default Product;