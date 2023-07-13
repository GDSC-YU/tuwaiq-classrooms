interface Props {
  text: string;
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const TextChip = ({ text, isSelected, onClick }: Props) => {
  const ariaLabel = isSelected
    ? `${text}'s Schedule Button - Currently Selected`
    : `View ${text}'s Schedule Button`;

  const className = `p-1 transition duration-300 ease-in-out ${
    isSelected ? "text-white" : "text-slate-900/30 hover:scale-110"
  }`;

  return (
    <button onClick={onClick} className={className} aria-label={ariaLabel}>
      <span className="text-3xl font-black">{text}</span>
    </button>
  );
};

export default TextChip;
