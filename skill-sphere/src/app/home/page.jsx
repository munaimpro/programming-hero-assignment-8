import Hero from "@/components/Hero";
import TopCourse from "@/components/TopCourse";
import LearningTips from "@/components/LearningTips";
import Instructors from "@/components/Instructors";
import TrendingCourse from "@/components/TrendingCourse";


const HomePage = () => {
    return (
        <>
            <Hero></Hero>
            <TopCourse></TopCourse>
            <LearningTips></LearningTips>
            <TrendingCourse></TrendingCourse>
            <Instructors></Instructors>
        </>
    );
};

export default HomePage;