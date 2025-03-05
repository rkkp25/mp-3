// React Imports 
import { Routes, Route, createBrowserRouter, RouterProvider, useParams } from "react-router-dom";
import { useEffect } from "react";
import { styled } from "styled-components";

// Components
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


import HomePreview from "./components/HomePreview";
import EducationPreview from "./components/EducationPreview";
import ExperiencePreview from "./components/ExperiencePreview";
import SkillsPreview from "./components/SkillsPreview";
import ProjectsPreview from "./components/ProjectsPreview";
import DocumentsPreview from "./components/DocumentsPreview";

// Styles 
const StyledWrapper = styled.div`
    width: 80%;
    margin: auto;
    background-image: linear-gradient(#7cebbb, white);
    font-family: monospace;

    @media (max-width: 900px) {
        width: 100%;
    }
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

const StyledMain = styled.main`
    padding: 0.5vw 2vw 5vw 2vw;
    
    @media (max-width: 900px) {
        padding: 2vw 4vw;
    }
`;

export function Root() {
    return (
        <>
            <StyledWrapper>
                <Header />
                <StyledDiv>
                    <Nav />
                    <StyledMain>
                        <Routes>
                            <Route path={`/*`} element={<HomePreview />}/>
                            <Route path={`/education`} element={<EducationPreview />}/>
                            <Route path={`/experience`} element={<ExperiencePreview />}/>
                            <Route path={`/skills`} element={<SkillsPreview />}/>
                            <Route path={`/projects`} element={<ProjectsPreview />}/>
                            <Route path={`/documents`} element={<DocumentsPreview />}/>
                        </Routes>
                    </StyledMain>
                </StyledDiv>
                <Footer />
            </StyledWrapper>
        </>
    );
}

const router = createBrowserRouter(
    [{path:"*", Component:Root}]
);



export function App() {
    const currentPath=useParams();
    let lastValue=Object.values(currentPath).pop() || "";
    lastValue = lastValue.charAt(0).toUpperCase() + lastValue.slice(1);
    useEffect(()=>{
        if(lastValue===""){
            document.title="Home | Resume";
        }else {
            document.title=lastValue+" | Resume";
        }
    },[lastValue])

    return (
        <>
            <RouterProvider router={router}/>
        </>


    )
}

export default App
