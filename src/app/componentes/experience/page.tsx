import Image from "next/image"
import SectionTitle from "../sectionTitle/page"
import "./experience.scss"
import { Skill } from "../skill/page"


export default function Experience() {
    return (
        <div className="experience">
            <SectionTitle text="Experience" />
            <p>Mussum Ipsum, cacilds vidis litro abertis.  Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.</p>
            <div className="experience-time">
                <Skill image="/react.png" measure={1} years="1 years" />
                <Skill image="/ts.png" measure={1} years="1 years" />
                <Skill image="/js.png" measure={1} years="1 years" />
                <Skill image="/java.png" measure={1} years="1 year" />
            </div>
        </div>

    )
}