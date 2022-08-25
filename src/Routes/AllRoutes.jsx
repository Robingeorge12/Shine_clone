import { Route, Routes } from "react-router-dom";
import Blog from "./Blog";
import Career from "./Career";
import Course from "./Course";
import Home from "./Home";
import Job from "./Job";
import JobSeeks from "./JobSeek";

export default function AllRoutes()
{

    return(
        <div>
<Routes>

    <Route path={"/home"} element={<Home />} />
    <Route path={"/job"} element={<Job />} />
    <Route path={"/jobseeking"} element={<JobSeeks />} />
    <Route path={"/courses"} element={<Course />} />
    <Route path={"/career"} element={<Career />} />
    <Route path={"/blog"} element={<Blog />} />

</Routes>

        </div>
    )
}