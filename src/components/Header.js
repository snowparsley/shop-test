import styled from "styled-components";

const HeaderContainer = styled.header`
position: fixed;
background: red;
width: 100%;
top: 0;
`
const Header = () => {

    return (
        <>
            <HeaderContainer>
                header
            </HeaderContainer>
        </>
    )
}
export default Header;