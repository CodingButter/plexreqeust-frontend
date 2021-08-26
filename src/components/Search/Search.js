import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Input, InputContainer, InputIcon } from "./Search.elements";
import useLocalSorage from "../../hooks/useLocalStorage";
const Search = () => {
  const history = useHistory();
  const [focus, setFocus] = useState(false);
  const [inputVal, updateInputVal] = useLocalSorage("quick-search-input", "");
  const handleSetFocus = () => {
    setFocus(true);
  };
  const handleLoseFocus = () => {
    setFocus(false);
  };

  const handleUpdateInput = (e) => {
    updateInputVal(e.target.value);
  };

  const searchMovies = () => {
    if (inputVal) history.push(`/search/${encodeURIComponent(inputVal)}`);
  };

  return (
    <Container className="search-container">
      <InputContainer focus={focus} className="search-input-container">
        <InputIcon
          onClick={searchMovies}
          className="search-input-icon"
          iconName="search"
        ></InputIcon>
        <Input
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              searchMovies();
            }
          }}
          value={inputVal}
          onFocus={handleSetFocus}
          onChange={handleUpdateInput}
          onBlur={handleLoseFocus}
        />
      </InputContainer>
    </Container>
  );
};

export default Search;
