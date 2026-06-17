type DoomCornerFrameProps = {
  children: React.ReactNode;
  className?: string;
};

export function DoomCornerFrame({ children, className = "" }: DoomCornerFrameProps) {
  return (
    <div className={`doom-frame relative ${className}`}>
      <span className="doom-frame__corner doom-frame__corner--tl" aria-hidden />
      <span className="doom-frame__corner doom-frame__corner--tr" aria-hidden />
      <span className="doom-frame__corner doom-frame__corner--bl" aria-hidden />
      <span className="doom-frame__corner doom-frame__corner--br" aria-hidden />
      {children}
    </div>
  );
}
