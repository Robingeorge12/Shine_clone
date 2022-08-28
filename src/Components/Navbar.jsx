import { Img,Input } from "@chakra-ui/react"
import { Link, Navigate } from "react-router-dom"
import task from "./Component.module.css"
import { useNavigate } from "react-router-dom"
import TopSlide from "./TopSlide"
import EarlyApplicant from "./EarlyApplicant"
import Remote from "./Remote"
import Walk from "./Walk"
import { Search2Icon} from '@chakra-ui/icons'
import Footer from "./Footer"
import CarouselSlide from "./CarouselSlide"
import CarRemote from "./CarRemote"
import CarWalk from "./CarWalk"
import First from "./First"

import { IoPersonOutline,IoNotificationsOutline } from "react-icons/io5";
import Home from "./Home"

// IoNotificationsOutline
// Search2Icon
export default function Navbar()
{

const navigate = useNavigate()



    return(
        <div>

                <div className={task.head}>

                    <div className={task.headcont}>

                        <div className={task.hov} style={{display:"flex",justyfyContent:"center" , alignItems:"center"}} onClick={()=>navigate("https://www.shine.com/")}>
                                <span><img width="20px" src="data:image/png;base64,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" alt="ph" /></span>
                                <div>Download App</div>
                        </div>

                        <div className={task.hov} style={{display:"flex",justyfyContent:"center" , alignItems:"center"}}>
                            <img width="20px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAaVBMVEX///8AAAD8/Pzf39/n5+ezs7PIyMjz8/Pu7u6vr6/Q0ND29valpaX5+fmoqKjc3Nw/Pz9iYmJra2sgICCKiorCwsJ8fHxcXFyCgoKSkpJzc3MtLS0YGBhVVVVPT0+enp4ODg40NDRHR0env/M2AAAEZklEQVRogc1a15ajMAwNYGpC6CH08v8fuZEMM4TqNufsfUuQLSNdqyW3Gyt0rwi1HwyFpTMvZYXx7rU13oZSFaTcaEDERJ2O4nfbMS7LaGG2VJEKUk0bvrL7/J2TzearlLyMRzdrs7WjrZw+seR1mJRMuzt5Iz401ejojh4/8LErp8PCTYJjAQNdk8noMGCHxD4TuVcXx7iCDxvUpzpuNzuBg9zPhU7whkNeXmsCUqWoDo+ROpkMkYGgEYsgBJ1BTAcyi+k+O+K3BSLUm000Bd+L6ED6XjBrhg2ynoCSgtUjgBjip4CSisfOQLCaXwday2GVtsWuPZwtZE/jrRC/wCUxu3jJTsXVKo7c2vHQ5AfRZ9WTXRzyTsOtpOEzsvX/Ksn50mompCQ6S+1bPIWUvPgCRcrH+AlQh+Ts4hC8Cm4lkBZr5sztD0LJ0e55ohFhTnDfaHkMAMYN+XXcXJ5sB9Z6CCjRObKdx5FFvwEkbtlEcyECAwhzOeUxFYH7gAIy8a/l9EqihEQWM1jhxZWp1zCZusKnZIuCTe/FZcGT8CfFBYbLd3GxhZEaHNg17BEfel/H7kLcIRQkwT764FJ6+Ka9dJdNcB+t3LkGBp1TqOjk9Qi30hrzy/C62Uzfi3dySzy1CWP6tAJCSGAW7fwdR4o+BEa9o/nNh7poRTm/G+VAjRHEeypyygd9iMVbbAO8Mc8BnKL+1tAXMxcgPjZiagh1+OIuE/c9JoCqSc0Fpehb5vwk8+cZV3VJnvs8/ko5eWZNM67qybDw7tK7pCVcM5aULqrZ27npUOzloDO9P1dl4Gpc138a1cWchYH/ouuYEjYdo/UCIywPgylL60RjSCt0ie8RW6TpUIy/xfxafpFL6UxRYnKZXb+Lye66I3hXfglQQGQQs9nk8KA4tpKZWVLgwOSoj9BHaVtReCcx781I8mvg7d+tWy2+2HMKPO/OdcZ2RHBauQVGv63ByhNv8cNZ5TsKjykesMPdIxEwS6SzPES7tb6p4BZ+w9hwFXslRcyagbPipe9NpV6ncNZermTC+xGg3ul/P2J8luwxtvC/s8Z4FAXkAF6p5g+GkuC7BVnuCxpH9TrooGLmLLhd8le8fYCvp2mD+PTlCvf+J7ake7FMDcrZXnooV5+cAew1gL1EJ3sscMBe0CuZquPvEuNUt0OdrOqn+w2K6ZqH++lYDSx66f0/dMnk8Dst+P5Kx+3WYzJ0/9Lv9BeSJ7pGcU5cokBalZrY2JgRLoYTqCriTM2kZwPfipFe0zAjKbvAVvjvIN0OHq+p767n1hgRxkUWSKdhJ8iKePEnHSiM1vOfOmxej8wjDFPn1eGJlz1eTbga9FDuBl2u7aCvw+jduaYVnOnzSWCZbveOwnr7t6kP8s77cQIx0zDZE/pFMoxtk0dRHEdR3rTjkOzu+isffo2S5kMFVhGPF6pYkLRxZwVnLLKJ56ZlK6QracrU9QhzKtf9D0meXVHml2YM8zLtnh9a+keH/wdkci91AvWtDAAAAABJRU5ErkJggg==" alt="ph" />
                            <div>For Employers</div>
                        </div>

                        <div className={task.hov} style={{display:"flex",justyfyContent:"center" , alignItems:"center"}}>
                            <img width="20px" src="data:image/png;base64,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" alt="ph3"/>
                            <div>Help</div>
                        </div>

                    </div>
                </div>

<div className={task.head2}>

                <div style={{display:"flex" ,gap:"1rem"}}>
                        <div style={{marginTop:"10px",marginLeft:"50px"}}>
                            <img width="60px" src="https://www.shine.com/next/static/images/shine-logo.png" alt="im" />
                        </div>

                        <div style={{marginTop:"20px", width:"50%" ,boarder:"1px solid black",display:"flex",}}>
                           <input style={{width:"300px"}} type="text" placeholder="Job title, skills" /> 
                           <button className={task.btn1} >
                            <Search2Icon/>
{/* <img width="20px" src="data:image/jpeg;base64,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"/> */}
                           </button>
                        </div>
                    
                </div>

            <div className={task.headcont2}>

                         <div className={task.hov} style={{display:"flex",justyfyContent:"center" , alignItems:"center",marginTop:"5px"}}>
                            <IoNotificationsOutline/>
                         {/* <img width="40px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlwwNGEFT9oO8Qg-Bx0iMv3_auqcKJHuQM09IHxvoFRf1XbCFn&usqp=CAU" alt="ph3"/> */}
                        </div>
                        <div className={task.hov} style={{display:"flex",justyfyContent:"center" , alignItems:"center",marginTop:"5px"}}>
                         <span><img width="20px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEX29vYAAAD39/f6+vr///9ERETCwsKhoaG2trawsLBKSkrR0dHy8vLX19fe3t7k5OQrKysKCgqWlpY/Pz83Nzfq6upjY2OGhoaQkJBdXV0xMTFsbGypqal0dHQSEhLIyMgjIyNUVFR9fX0bGxsD0/lWAAAFGklEQVRogb1a57qqMBAkxUpVxHLs+v7veHcHjqAETCDn7i8/0UyyZbaEQAZ/Lv8BoommmvIn2FJH03lDUq38YwR78S7LWPvGkAfRkrlnFL1uYwgRe9WYDHjNfRj/Srj4YY15BVFTWnKnG86low19FfpEUfPWippx1z6tYgCRxUWIu3eQ+btu9FKILPIYkzIhkMf7tvWZvkt9Br4i3YhCyUoAcqKvrj4trznel0VUCbMmVLjwCSKLFS15yUp5slepkL6ZeQ16RMpLDqrCfbw0OEAMKPNVDbIhr5LRjXx4DIhsZwydro9bFg71hI1yJwVORsjyfjyl+h1Gamxbz6rA1EcTaTrKZW1Mf+rKBleVx42Xo8lBZSHKwFTTfDlONjCzkQD1qiJ5pUeKTHcEsjL5mb7TAy9FDBn4IcwJA7ZI/IQ6wm9uWEst6MHUE0jXWiruspa7aDZKYlA93OvoB0RxqWCMFE0xv/GiLpV07ldv6ZHJ75wFlZbZvIofeam5WCfCnMJNGX+QyJQW2pqti2d7D5YH13YkVxnRs4MHEHXocGA8JGLZjLe8TFdlkjWDUDW0Gl8NIdw7qwQ166A1N0EodJIgaO00FgTMkXeaViWkzP1YEERCNwfKKONCZSQItNUT03CvkXkLgbDp6aKR0Ea6FwzbF9LqNN690BX0MSDKonHuJQNynqyPNsBeu1HEgn3u+vYp5XNs74vE29/eMLVlY9xLBpR4f/q7wc4CwFZQjZz7Fa7G9nI9ibcGCauqe6BIOSEiL/pVAXL7cto+QSR+Las0tcM/g0Gkym2qUM2ZU5d/cBYtOdrzr9pG1c3sJZOps8y4ErKgJSQDPi+y5BCxqKZRYL7a+SEYFqNSdPHsHkBzlm2oLSJZyqUQE7ZJRPyQL1xkfi2UXYgparAvPDNgtI2je9nyEXiBHYSLsNuX2B0qr6r7hfYXIL9NXdn26e86ctcWudezrLrhw+e5g0xt7U6Lk8FzqrpRNjvK8mpJe5jfMLGguXQVyxYdeYt/i57MVTI7f4TlMcgJHflxwTxv1w7KIKsGw46RqLRhANwlKCaG9KcYjlumVVBjNuDeCaWh5UkwSBdH5RSHUBeThW2RW7J8vp45yp7C2H7YgEn6MOlseg1nGZp7V6mDw6jwPgTj6IJBGquv1C7rOOyQ+Pq63DuHcaJtcm/jJGmTU/YdjqbDBr0tC8eaUCU3/PEnL5n4bNwi+p1aLm5DUhkwC4ldEgXFdMIfTTW4SvmGRzzCNL1yVy1yp0sq2ONJ1Q3fIIBlTC0xZkGbhCf9Sl8ZsLeL+zwIc5AIKxWXg+R2Iwll3YpqXR13bKVLUEvUHIRr1Werx0Nyq6+JcXqHgS868YYVobDPuuVz8ICtdI9t2iCUUJ6Nn0Mxn9M+3B42Bw8YqdjXaVq835kaZ5OtaTz0ZW8UBjl8BfntMV5fMN/ZN84M0mzpkPU/80T7JHu3k3AANAILe/ysdVppkP91sQ9HLHqq/4/a6NOkMiDmudSOjb7Z4fYbjpNFv1tHVm3Pq+HYdWAgZF1ucxV747YsbKUOmSTbUwpY6sUL2MnKhbwU61tMiJaomkAqNt3nYe8U82B9pFK3SZlegLy3s9MeGaPWXUNkBK6+L+LwhF9tHcuo91JiY86qKs2av7o7v46gr/UCZ9M5gFI0Xq15DBiTqeCUlxA9XbNS80kJYddbt0RqHcRhofpfYFK64B4rGv6ak6Q28Ov+pFO3+DfyP16H+wepsEQWJxQRbQAAAABJRU5ErkJggg==" alt="ph" />{}</span>
                        </div>
                        <div className={task.hov} onClick={()=>navigate("/register")} style={{display:"flex",justyfyContent:"center" , alignItems:"center",width:"40px",marginTop:"5px"}}>
                        <IoPersonOutline />
                        </div>
                     
            </div>
</div>

<div className={task.head3}>
    <div className={task.place}>
            <div>
                <Link to="/">HOME</Link>
            </div>
            <div>
            <Link to="/jobs">JOBS</Link> 
            </div>
            <div>
            <Link to="/jobseeking">JOBS SEEKING ASSISTANCE</Link>
            </div>
            <div>
            <Link to="/courses">COURSES</Link>
            </div>
            <div>
            <Link to="/career">CAREER GUIDANCE</Link>
            </div>
            <div>
            <Link to="/blog">BLOG</Link>
            </div>
        </div>

</div>

 
      {/* <Home />  */}
    {/* <TopSlide />
    
 
<CarouselSlide />

<CarRemote />


<CarWalk /> */}

{/* <Footer /> */}



        </div>
    )
}