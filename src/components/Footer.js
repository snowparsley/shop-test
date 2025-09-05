import styled from "styled-components";

const FooterContainer = styled.footer`
  background: rgb(246, 246, 246); /* 배경색 */
  color: black;
  width: 50%;
  margin: 0 auto;
  padding: 10px 0px 70px;
  font-size: 11px;
  font-family: "Helvetica", "Arial", sans-serif;
  line-height: 0.3;
  h6 {
    color: rgba(141, 133, 133, 1);
  }
  h3,
  h5,
  h6 {
    padding-left: 10px;
  }

  ,
  h6 {
    margin-top: 5%;
  }
`;

const Footer = () => (
  <FooterContainer>
    <h3>이용약관 개인정보정책</h3>
    <h5>bs컴퍼니 | 대표 김바다 | 사업자번호 bs컴퍼니</h5>
    <h5>bs컴퍼니</h5>
    <h5>고객센터 bs컴퍼니 | 팩스 bs컴퍼니</h5>
    <h5>개인정보 보호책임자 bs컴퍼니</h5>
    <h6>
      본 사이트는 위탁판매자이며 상품은 다수의 위탁업체에서 제공하고 있습니다.
      상품, 상품정보, 거래에 관한 의무와 책임은 공급사에게 있습니다.
    </h6>
  </FooterContainer>
);

export default Footer;
