import styled from "styled-components";

const BottomMenuContainer = styled.div`
position: fixed;
background: blue;
width: 100%;
bottom: 0;
`
const BottomMenu = () => {

    return (
        <>
            <BottomMenuContainer>
                BottomMenuContainer
            </BottomMenuContainer>
        </>
    )
}
export default BottomMenu;