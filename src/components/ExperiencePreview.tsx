import {useParams} from "react-router-dom";

export default function ExperiencePreview() {
    const currentPath=useParams();
    console.log(currentPath)
    let lastValue=Object.values(currentPath).pop() || "";
    lastValue = lastValue.charAt(0).toUpperCase() + lastValue.slice(1);
    console.log("lastValue");
    console.log(lastValue);
    document.title = lastValue + " | Resume";
    return (
        <>
            <h2>Key Club, Wellesley High School - <em>Volunteer</em></h2>
            <h4>September 2017-June 2020</h4>
            <ul>
                <li>I have contributed over 30 hours of volunteer work annually, totaling 90 hours of service over my three years in the club.</li>
                <li>My most notable volunteer work involved helping out at community events, providing my assistance in preparation, setup, and post-event cleanup. Additionally, during the latter half of my junior year in high school, I worked with fellow club members to teach math to students at the local elementary school.</li>
            </ul>

            <h2>Home Shopper, Auburndale Star Market, Newton - <em>Employee</em></h2>
            <h4>October 2022-Current</h4>
            <ul>
                <li>I work in the Drive Up and Go Department, which handles online orders. My work mainly consists of shopping for customers, packing orders, and handing off those orders to either the customer themselves or a 3rd party delivery service. I frequently contact the customer about their order if items are out of stock, and address any issues that may arise during the process such as refunds or delivery complications.</li>
                <li>I typically work 16 hours on the weekends during the school year, and closer to 30 hours per week during winter and summer break. Since I joined Star Market, I’ve been given the opportunity to train several new employees in the department, most of whom continue to work alongside me.</li>
            </ul>

            <h2>CS103 Lab Supervisor, Boston University - <em>Employee</em></h2>
            <h4>Spring 2025 (January-May)</h4>
            <ul>
                <li>I’m managing over 120 students over the course of the semester, aiding them in their weekly assignments as well as their final projects. I’m proctoring lab sessions as well as office hours to provide help to students who have questions or are struggling with their work. We then work together to make sure they understand the material and can reproduce the same result on their own with full confidence.</li>
                <li><a target="_blank" href="../public/CS103-Fall-2024-Syllabus.pdf">CS103 Syllabus</a></li>
            </ul>
        </>
    )
}
