import SectionTitle from "../sectionTitle/page"
import "./information.scss"

export default function Info() {
  return (
    <div className="infos">
      <SectionTitle text="Languages" />
      <div className="languages-info">
        <span>🇺🇸 EN - Technical English</span>
        <span>🇧🇷 PT-BR - Native Speaker</span>
      </div>
      <SectionTitle text="Education" />
      <div className="educational-info">
        <span>🎓</span>
        <span>Technologist in Systems Analysis and Development</span>
      </div>
    </div>
  )
};
