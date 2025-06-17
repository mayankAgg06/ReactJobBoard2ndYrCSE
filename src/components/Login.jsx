import { Link,Outlet } from "react-router-dom";

const HomeLayout=()=>{
    return (
        <div>
           <h1>This is Login page</h1>
           <Link to='/register'>Click here for register page</Link>
        </div>
    )
}

export default HomeLayout;