import {useParams} from "react-router-dom";

export default function EducationPreview() {
    const currentPath=useParams();
    console.log(currentPath)
    let lastValue=Object.values(currentPath).pop() || "";
    lastValue = lastValue.charAt(0).toUpperCase() + lastValue.slice(1);
    console.log("lastValue");
    console.log(lastValue);
    document.title = lastValue + " | Resume";
    return (
        <>
            <h2>Wellesley High School</h2>
            <h4>September 2017-June 2021</h4>
            <p>Attended for 4 years and graduated in 2021. Focused on learning computer science in junior and senior
                year.</p>

            <h2>University of Massachusetts Lowell</h2>
            <h4>September 2021-May 2022</h4>
            <p>I was accepted as a computer science major in the Honors College at the University of Massachusetts
                Lowell. I successfully auditioned for and participated in the school’s wind ensemble throughout
                the academic year as an extracurricular activity. However, early in the school year, I made the
                decision to transfer to a different university to pursue a better program, increased opportunities,
                and a more suitable location</p>

            <h2>Boston University</h2>
            <h4>September 2022-Current (May 2025)</h4>
            <p>I was accepted as a computer engineering major at Boston University. In spring 2023, I transferred
                into the College of Arts and Sciences as a Computer Science major.</p>

            <h3>Relevant Coursework</h3>
            <p>Relevant Coursework: Algorithms · Sorting · Probability · Functional Programming ·
                Computing Systems · Databases · Fullstack Development · Combinatoric Structures · Cybersecurity</p>

            <h3>Cumulative GPA: 3.420</h3>
        </>
    )
}
