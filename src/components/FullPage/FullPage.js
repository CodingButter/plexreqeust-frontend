import { ScrollContainer, FullPageContainer } from "./FullPage.elements";
const FullPage = ({ children }) => {
  return (
    <ScrollContainer className="scroll-container">
      <FullPageContainer className="full-page-container">
        {children}
      </FullPageContainer>
    </ScrollContainer>
  );
};

export default FullPage;
