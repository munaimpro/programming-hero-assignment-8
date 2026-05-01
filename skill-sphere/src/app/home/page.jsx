import Hero from "@/components/Hero";
import TopCourse from "@/components/TopCourse";
import LearningTips from "@/components/LearningTips";
import Instructors from "@/components/Instructors";


const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <TopCourse></TopCourse>
            <LearningTips></LearningTips>
            <Instructors></Instructors>
        </div>
    );
};

export default HomePage;