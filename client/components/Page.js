import Head from 'next/head'
import Header from './Header';
import Footer from './Footer'
import styled from 'styled-components';

const MainStyles = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;
export default function Page({ children }) {
  return (
    <>
      <Head>
        <title>Sabka Bazar</title>
      </Head>
      <Header count={0} />
      <MainStyles>{children}</MainStyles>
      <Footer />
    </>
  );
}
