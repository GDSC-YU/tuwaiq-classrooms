interface Props {
  text: string;
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  ariaLabel: string;
}

const TextChip = ({ text, isSelected, onClick, ariaLabel }: Props) => {
  const className = `text-2xl font-black ${
    isSelected
      ? "text-slate-900 dark:text-white"
      : "text-slate-900/30 hover:scale-110 hover:cursor-pointer"
  }`;

  return (
    <button onClick={onClick} className={className} aria-label={ariaLabel}>
      {text}
    </button>
  );
};

export default TextChip;
