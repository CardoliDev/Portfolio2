import "./section-title.scss";



interface SectionTitleprops {
    text: string
}
export default function SectionTitle({ text }: SectionTitleprops) {
    return (
        <h3 className="section-title">{text}</h3>
    )

}