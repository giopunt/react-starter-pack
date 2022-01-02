import styled from 'styled-components';

import Header from './components/Header';
import BuiltWith from './components/BuiltWithReact';
import { AppScreen, AppDescription, SmallBuyButton, AppTitle, AppDetails, Main, BundleDescription, BuyButton, StarterPackLogo, StyledDescription, Section, Title, AppsList, Link, IconLogo, Footer } from './styles';
import starterPackLogo from './assets/bundle.png';
import shopLogoIcon from './assets/shop-200-s.png';
import financeLogoIcon from './assets/finance-200-s.png';
import socialLogoIcon from './assets/social-200-s.png';
import shopAppSample from './assets/shop-mock-up.jpg'
import financeAppSample from './assets/finance-mock-up.jpg'
import socialAppSample from './assets/social-mock-up.jpg'


function App() {
  return (
    <div className="font-loader">
      <Header/>
      <Main>

        <Section>
          <StarterPackLogo src={starterPackLogo} alt="starter pack" />
          <Title>React Native Starter Pack</Title>
          <StyledDescription>Build Once, Run Everywhere.</StyledDescription>
          <StyledDescription>A bundle of beautiful, functional apps built with React Native to get you started.</StyledDescription>
          <BuyButton
            href="https://giovannipuntil.gumroad.com/l/react-starter-pack"
          >
            Buy the Bundle — £49
          </BuyButton>
          <Link href="#bundle">What's included ?</Link>
        </Section>

        <div className='apps'>
          <AppDescription id="shop">
            <AppDetails>
              <IconLogo src={shopLogoIcon} />
              <AppTitle>Shop</AppTitle>
              Browse curated content, search items by name, add to bag or save for later.
              <SmallBuyButton
                href="https://giovannipuntil.gumroad.com/l/react-starter-pack-shop"
              >
                Buy — £19
              </SmallBuyButton>
            </AppDetails>
            <AppScreen src={shopAppSample} alt="shop app screenshot"/>
          </AppDescription>

          <AppDescription id="finance">
            <AppDetails>
              <IconLogo src={financeLogoIcon} />
              <AppTitle>Finance</AppTitle>
              See the latest balance, keep an eye on your spending, check your investments or make a transfer.
              <SmallBuyButton
                href="https://giovannipuntil.gumroad.com/l/react-starter-pack-finance"
              >
                Buy — £19
              </SmallBuyButton>
            </AppDetails>
            <AppScreen src={financeAppSample} alt="finance app screenshot"/>
          </AppDescription>

          <AppDescription id="social">
            <AppDetails>
              <IconLogo src={socialLogoIcon} />
              <AppTitle>Social</AppTitle>
              Scroll an infinite timeline, write a post, like a post. Read and send private messages.
              <SmallBuyButton
                href="https://giovannipuntil.gumroad.com/l/react-starter-pack-social"
              >
                Buy — £19
              </SmallBuyButton>
            </AppDetails>
            <AppScreen src={socialAppSample} alt="social app screenshot"/>
          </AppDescription>
        </div>
        
        <BuiltWith>
          <Title as="h2">Code Once,<br/> Run Everywhere.</Title>
          <StyledDescription>Buy this bundle of native apps and build apps for Android and iOS using React.</StyledDescription>
        </BuiltWith>

        <BundleDescription id="bundle">
          <AppTitle>What's included</AppTitle>
          Includes the source code for 3 apps written in React Native:
          <AppsList>
            <li>— Shop</li>
            <li>— Finance</li>
            <li>— Social</li>
          </AppsList>
          The apps are all functionlly working and the UI will be showing mocked data.
        </BundleDescription>
      </Main>
      <Footer>
        made by <a href="https://twitter.com/giovannipuntil" target="_blank" rel="no-referrer">@giovannipuntil</a>
      </Footer>
    </div>
  );
}

export default App;
