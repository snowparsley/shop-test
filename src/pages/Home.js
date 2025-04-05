import { useState } from "react";
import { Col, Row, RowWrap, Wrappers } from "../components/styled-components";

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