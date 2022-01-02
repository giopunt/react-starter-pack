import styled from 'styled-components';

export const Section = styled.div`
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

export const StarterPackLogo = styled.img`
  width: 100%;
  max-width: 250px;
  margin-bottom: 50px;
`

export const AppTitle = styled.h3`
  margin: 10px 0;
  font-size: 28px;
`

export const IconLogo = styled.img`
  width: 80px;
`

export const StyledDescription = styled.div`
  max-width: 100%;
  text-align: center;
  max-width: 500px;
  color: #000000;
  font-size: 22px;
  letter-spacing: 1px;
  margin-bottom: 30px;
  font-weight: 300;
  padding: 0 20px;
`

export const Link = styled.a`
  text-decoration: none;
  color: #007aff;
  font-size: 18px;
`

export const Title = styled.h1`
  font-size: 40px;
  color: #000;
  font-weight: bold;
  margin: 15px 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`

export const AppsList = styled.ul`
  list-style: none;
  margin: 10px;
  padding: 0;
`

export const BundleDescription = styled(StyledDescription)`
  margin: 100px auto;
  text-align: left;
`

export const AppDescription = styled(StyledDescription)`
  margin: 150px auto 0;
  max-width: 800px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div:first-of-type {
    margin-right: 50px;
  }

  &:nth-of-type(2) {
    flex-direction: row-reverse;

    & > div:first-of-type {
     margin-right: 0px;
     margin-left: 50px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 70px;

    & > div:first-of-type {
      margin-top: 50px;
      margin-right: 0px;
      margin-left: 0px;
    }

    &, &:nth-of-type(2) {
      flex-direction: column-reverse;

      & > div:first-of-type {
       margin-top: 50px;
      }
    }
  }
`

export const AppDetails = styled.div`
  flex: 1;
`

export const AppScreen = styled.img`
  flex: 1;
  width: 200px;
`

export const BuyButton = styled.a`
  background: #ff375f;
  border-radius: 23px;
  padding: 13px 25px;
  display: block;
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 30px;
  letter-spacing: 1px;
  text-align: center;

  &:hover {
    opacity: 80%;
    text-decoration: underline;
  }
`;

export const SmallBuyButton = styled(BuyButton)`
  margin-top: 20px;
  width: 100px;
`

export const Footer = styled.footer`
  text-align: center;
  font-size: 14px;
  padding: 25px;
  border-top: 1px solid #eee;

  & a {
    color: #000;
  }
`

export const BuiltWith = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SmallParagraph = styled.div`
  max-width: 400px;
`
