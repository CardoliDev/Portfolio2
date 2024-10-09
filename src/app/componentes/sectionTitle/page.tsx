import "./section-title.scss";



interface SectionTitleProps {
    title: string;
    subtitle?: string;
  }
  
  // Certifique-se de que o componente está usando o tipo corretamente
  const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
    return (
      <div>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
      </div>
    );
  };
  
  export default SectionTitle;