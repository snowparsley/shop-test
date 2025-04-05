import { useEffect, useState } from "react";
import { Col, Row, RowWrap, Wrappers } from "../components/styled-components";
import axios from "axios";

const Home = () => {
    const default_list = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
    ]
    const [list, setList] = useState(default_list);
    const [homeContent, setHomeContent] = useState({});
    useEffect(() => {
        getHomeContent();
    }, [])
    const getHomeContent = async () => {
        try {
            let domain = await axios.get(`/api/domain/?dns=bs-company.co.kr`);
            console.log(domain)
            let { data: response } = await axios.get(`/api/shop/?is_manager=0&brand_id=12&root_id=1`);
            console.log(response)
            setHomeContent(response.data);
        } catch (err) {
            console.log(err)
        }

    }
    const onClickButton = () => {
        setList([
            ...list,
            ...list,
        ])
    }
    return (
        <>
            <Wrappers>
                <Col style={{}}>
                    {list.map((el, idx) => {
                        return <div style={{ width: '49%', border: '1px solid #000', margin: 'auto', textAlign: 'center' }}>{el}</div>
                    })}
                    <button style={{ margin: '4px 6px 4px auto' }} onClick={() => {
                        onClickButton();
                    }}>클릭</button>
                </Col>
            </Wrappers>

        </>
    )
}
export default Home;