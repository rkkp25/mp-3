import {useParams} from "react-router-dom";

export default function SkillPreview() {
    const currentPath=useParams();
    console.log(currentPath)
    let lastValue=Object.values(currentPath).pop() || "";
    lastValue = lastValue.charAt(0).toUpperCase() + lastValue.slice(1);
    console.log("lastValue");
    console.log(lastValue);
    document.title = lastValue + " | Resume";
    return (
        <>
            <h2>Technical Skills</h2>
            <ul>
                <li>C</li>
                <li>Java</li>
                <li>Python</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>C++</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>React</li>
                <li>Django</li>
                <li>Latex</li>
                <li>Windows</li>
                <li>Linux</li>
                <li>Vim/NeoVim</li>
                <li>Visual Studio Code</li>
            </ul>
            <h2>Soft Skills</h2>
            <ul>
                <li>Creativity</li>
                <li>Adaptability</li>
                <li>Problem-solving</li>
                <li>Teamwork</li>
                <li>Communication</li>
                <li>Flexibility</li>
            </ul>
        </>
    )
}
