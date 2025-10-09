import "./ToolButton.css";

type ToolButtonProps = {
  imgSrc: string;
  imgAlt: string;
  textButton: string;
}

const ToolButton = ({ imgSrc, imgAlt, textButton }: ToolButtonProps) => {
  return (
    <button className="tool-button">
      <img src={imgSrc} alt={imgAlt} />
      <p>{textButton}</p>
    </button>
  );
}

export default ToolButton;