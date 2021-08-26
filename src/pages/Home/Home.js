import PageHeader from "../../components/PageHeader";
import styled from "styled-components";
const Home = () => {
  return (
    <>
      <PageHeader>Home</PageHeader>
      <Wrapper></Wrapper>
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  position: relative;
  width: 100px;
  height: 50px;
`;
