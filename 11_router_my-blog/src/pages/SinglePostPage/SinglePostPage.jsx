import { useParams } from "react-router-dom";

import SinglePost from "../../components/SinglePost/SinglePost";

import styles from "./SinglePostPage.module.css";

const SinglePostPage = ()=> {
    const {id} = useParams();

    return (
        <main>
            <h1>Single Post page</h1>
            <SinglePost id={id} />
        </main>
    )
}

export default SinglePostPage;