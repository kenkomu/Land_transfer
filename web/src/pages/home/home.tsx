import type {Component} from 'solid-js';
import {useNavigate} from "@solidjs/router";

const Home: Component = () => {
    const navigate = useNavigate();
    return (
        <div>
home  <button onClick={(e)=>{
    e.preventDefault();
            navigate("/login");
        }}>Login</button>
        </div>
    )
}


export default Home;