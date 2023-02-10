interface Props {
  text: string;
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLParagraphElement>;
}

export default function TextChip({ text, isSelected, onClick }: Props) {
  const className = `text-cairo text-2xl ${
    isSelected ? "text-black" : "text-black/20"
  } font-black`;

  return (
    <p onClick={onClick} className={className}>
      {text}
    </p>
  );
}
