const SectionTitle = ({ title, text }) => {
  return (
    <div className="section-title">
      <p className="section-title__first">{title}</p>
      <p className="section-title__second">{text}</p>
    </div>
  );
};

export default SectionTitle;
