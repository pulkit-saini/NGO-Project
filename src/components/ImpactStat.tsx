interface ImpactStatProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

const ImpactStat = ({ value, label, icon }: ImpactStatProps) => {
  return (
    <div className="text-center space-y-2">
      {icon && <div className="flex justify-center mb-3">{icon}</div>}
      <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-hero-start to-hero-end bg-clip-text text-transparent">
        {value}
      </h3>
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  );
};

export default ImpactStat;
