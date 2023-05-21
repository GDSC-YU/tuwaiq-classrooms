interface Props {
  text: string;
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLParagraphElement>;
}

export default function TextChip({ text, isSelected, onClick }: Props) {
  const className = `text-2xl font-black ${
    isSelected
      ? "text-slate-900 dark:text-white"
      : "text-slate-900/30 hover:scale-110 hover:cursor-pointer"
  }`;

  return (
    <p onClick={onClick} className={className}>
      {text}
    </p>
  );
}
