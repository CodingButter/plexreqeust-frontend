import { useState } from "react";
import { Container, Input, InputContainer, InputIcon } from "./Search.elements";

const Search = () => {
  const [focus, setFocus] = useState(false);

  const handleSetFocus = () => {
    setFocus(true);
  };
  const handleLoseFocus = () => {
    setFocus(false);
  };
  return (
    <Container className="search-container">
      <InputContainer focus={focus} className="search-input-container">
        <InputIcon className="search-input-icon" iconName="search"></InputIcon>
        <Input onFocus={handleSetFocus} onBlur={handleLoseFocus} />
      </InputContainer>
    </Container>
  );
};

export default Search;
