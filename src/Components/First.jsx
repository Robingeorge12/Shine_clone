import { Box, LightMode } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../Context/AppContext"
import task from "./Component.module.css"
import { IoLocation, IoBagHandleOutline } from "react-icons/io5";


export default function First() {
    const { state, setState } = useContext(AppContext)
    const [data] = useState(state)
    // console.log(data)

    return (
        <div>

            <div>

                <div className={task.divbox} >
                    <div>


                        <div style={{ display: "flex" }}>
                            <span >{state.head}</span>
                            <div style={{ marginLeft: "580px" }}>{state.day}</div>
                        </div>

                        <div className={task.hd}>
                            <h4>{state.pos}</h4>
                        </div>

                        <div>
                            <h4>{state.com}</h4>
                        </div>

                        <div style={{ display: "flex" }}>
                            <span style={{ display: "flex", gap: "1rem", marginTop: "5px", marginBottom: "5px" }}> <IoLocation />{state.cty} <IoBagHandleOutline />{state.ex} </span>
                        </div>

                        <div style={{ display: "flex", gap: "2rem",marginLeft:"5px" }}>
                            <ul type="square" style={{marginLeft:"15px"}}> <li>{state.ft1}</li></ul>

                            <ul type="square"> <li>{state.ft2}</li></ul>

                        </div>

                        <div>
                            <button style={{marginLeft: "580px",fontWeight: "500",color:"blue"}}>Apply</button>
                        </div>

                    </div>
                </div>

                <div className={task.a}>
                    <div>Job Details</div>
                    <div>Key Skills</div>
                    <div> Recuiter Details</div>
                    <div> Company Details</div>


                </div>


                <div className={task.pa}>


                    <h4> Position's General Duties and Tasks</h4><br /><br />
                    <h4> In these roles you will  be responsible for</h4><br /><br />

                    <p> -Work with Architect to gather the technical details and requirements.</p>
                    <p>-Write Reusable, Effective, as wstatel as Scalable code and create front-end modules using React Native.</p>
                    <p>-Integration with REST services in the application.</p>
                    <p>-Integration of third-party authentication services.</p>
                    <p>-Follow UI design, UI guidelines and coding guidelines to develop and deliver the applications</p>
                    <p>-Participate in code review process and implementing the code review comments.</p>
                    <p>-Ensure websites are responsive across many platforms, including laptops and smartphones.</p>
                    <p>-Developing Innovative and reusable components.</p>

                    <h4>Requirements for this role include:  </h4><br /><br />
                    <p>-5+ Years experience in Frontend Development - UI</p>
                    <p>-3+ Years proven experience as a React Native development</p>
                    <p>-3+ Years experience in React JS, HTML5, CSS3, Bootstrap and Responsive/Progressive web application development</p>
                    <p>-
                        3+ Years experience using REACT tools including React.js, Webpack, Jest/Enzyme, Redux, Saga and Flux</p>
                    <p>-Bachelor s Degree or equivalent education and work experience</p>
                    <p>-Strong analytical skills and problem-solving techniques</p><br /><br />
                    <h4>  Preferences:  - </h4><br /><br />
                    <p>-Experience in CI/CD</p>
                    <p>-Experience in Rest API integrations</p>
                    <p>-Experience/knowledge of other Java script frameworks like ReactJS, Angular and Flutter.</p>
                    <p>-Experience using Redux libraries like Redux-thunk and Redux-saga.</p>
                    <p>-Experience using process management tools like Atlassian JIRA.</p>
                    <p>Required schedule availability for this position is Monday-Friday (09:00am to 06:00pm IST). The shift timings can be changed as per client requirements. Additionally, resources may have to do overtime and work on weekend s basis business requirement.</p>
                <p><b> Job Segment:</b> Developer, Front End, Application Developer, User Experience, Java, Technology </p>
                    <div>
                        <h4>Other Details</h4>
                        <h4>Department  General / Other SoftwareWeb / Mobile Technologies</h4>
                        <h4>Industry IT  IT - Software</h4>
                        <h4>Education Graduation </h4>
                    </div>
                </div>




            </div>
        </div>
    )
}