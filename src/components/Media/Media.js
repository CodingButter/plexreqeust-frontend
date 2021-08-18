import { CellItem, Poster } from "./Media.elements";

const Media = ({ media }) => {
  return (
    <CellItem>
      <Poster src={media.poster} />
    </CellItem>
  );
};

export default Media;
