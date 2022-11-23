import {useParams} from "react-router-dom"

const Posts=()=>{
    const {year,month}=useParams();
    return (
        <div>
            <h1>Posts</h1>
            Year:<b>{year}</b>,Month:<b>{month}</b>
        </div>
    );
};

export default Posts;