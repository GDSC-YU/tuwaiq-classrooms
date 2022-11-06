interface Props {
  text: string;
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLParagraphElement>;
}

export default function TextChip({ text, isSelected, onClick }: Props) {
  return (
    <p
      onClick={onClick}
      className={`text-cairo text-2xl ${
        isSelected ? "text-black" : "text-black/20"
      } font-black`}
    >
      {text}
    </p>
  );
}
