interface Props {
  text: string;
  colors: string[];
  className?: string;
}

const GradientText = ({ text, colors, className }: Props) => {
  return (
    <span
    className={className}
      style={{
        backgroundImage: `linear-gradient(55deg, ${colors.join(",")})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {text}
    </span>
  );
};

export default GradientText;
