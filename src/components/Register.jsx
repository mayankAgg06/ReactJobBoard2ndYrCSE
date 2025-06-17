import { Link,Outlet } from "react-router-dom";

const HomeLayout=()=>{
    return (
        <div>
           <h1>This is Register page</h1>
           <Link to='/login'>Click here for login page</Link>
        </div>
    )
}

export default HomeLayout;