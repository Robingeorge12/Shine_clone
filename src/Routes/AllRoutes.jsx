import { Route, Routes } from "react-router-dom";
import First from "../Components/First";
import Blog from "./Blog";
import Career from "./Career";
import Course from "./Course";
import Home from "../Components/Home";
import Job from "./Job";
import JobSeeks from "./JobSeek";
import Work from "./Work";
import Reg from "../Components/Reg";
import Log from "../Components/Log";
import Second from "../Components/Second";

export default function AllRoutes()
{

    return(
        <div>
<Routes>

    <Route path={"/"} element={<Home />} />
    <Route path={"/job"} element={<Job />} />
    <Route path={"/jobseeking"} element={<JobSeeks />} />
    <Route path={"/courses"} element={<Course />} />
    <Route path={"/career"} element={<Career />} />
    <Route path={"/blog"} element={<Blog />} />
    <Route path={"/work"} element={<Work />} />
    <Route path={"/register"} element={<Reg/>} />
    <Route path={"/login"} element={<Log />} />
    <Route path={"/first"} element={<First />} />
    <Route path={"/second"} element={<Second />} />

</Routes>

        </div>
    )
}