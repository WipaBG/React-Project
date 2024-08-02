import { useState } from "react";
import commentsApi from "../../../api/comments-api";

export default function AddComments({
    roomId
}) {

    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');

    const commentSubmitHanlder = async (e) => {
        e.preventDefault();

        await commentsApi.create(roomId, username, comment);
    }




    return (
        <section className="add-comment" >
            <h1>Add a Comment</h1>
            <form id="comment-form" onSubmit={commentSubmitHanlder}>
                <label htmlFor="comment-name">Name:</label>
                <input
                    type="text"
                    id="comment-name"
                    name="name"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}

                />

                <label htmlFor="comment-text">Comment:</label>
                <textarea
                    id="comment-text"
                    name="comment"
                    rows="4"
                    required
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                ></textarea>

                <button type="submit">Submit Comment</button>

            </form>
        </section>
    )
}