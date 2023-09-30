import ProgressiveImg from "./ProgressiveImg";

interface Props {
  id: string;
  name: string;
  imgSrc: string;
}
const Pokemon = ({ id, name, imgSrc }: Props) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div>
        {id}. {name}
      </div>
      <ProgressiveImg src={imgSrc} alt={`${name} sprite`} />
    </div>
  );
};

export default Pokemon;
