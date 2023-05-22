import { useState } from "react";

interface Props {
  text: string;
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const TextChip = ({ text, isSelected, onClick }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const ariaLabel = isSelected
    ? `${text}'s Schedule Button - Currently Selected`
    : `View ${text}'s Schedule Button`;

  const className = `text-2xl font-black ${
    isSelected
      ? "text-slate-900 dark:text-white"
      : "text-slate-900/30 hover:scale-110 hover:cursor-pointer"
  }`;

  return (
    <button
      onClick={onClick}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel}
    >
      {text}
    </button>
  );
};

export default TextChip;
