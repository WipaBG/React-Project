import { useParams } from "react-router-dom"

import { useGetOneRoom } from "../../hooks/useCatalog";
import { useForm } from "../../hooks/useForm";
import { useCreateComment, useGetAllComments } from "../../hooks/useComments";
import { useAuthContext } from "../../contexts/AuthContext";

const initialValues = {
    comment: ''
}
export default function CatalogDetails() {
    const { roomId } = useParams();
    const [comments, dispatch] = useGetAllComments(roomId);
    const createComment = useCreateComment();
    const { email } = useAuthContext();
    const [room] = useGetOneRoom(roomId);
    const { isAuthenticated } = useAuthContext();


    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${month}-${day}-${year}`;



    const { changeHandler,
        submitHandler,
        values
    } = useForm(initialValues, async ({ comment }) => {
        try {
            const newComment = await createComment(roomId, comment, formattedDate)
            // setComments(oldComments => [...oldComments, newComment])
            dispatch({ type: 'ADD_COMMENT', payload: { ...newComment, author: { email } } })

        } catch (err) {
            console.log(err.message);
        }
    });


    return (
        <>
            <div className="room-container">
                <h2 className="room-title">Apartment: {room.number}</h2>
                <ul className="room-details-list">
                    <li>Capacity: {room.capacity} people</li>
                    <li>Room type: {room.roomType}</li>
                    <li>Price: {room.price} lv per night</li>
                </ul>
                <div className="room-image-container">
                    <img src={room.img} alt={`Room ${room.number}`} className="room-image" />
                </div>

                <section className="recent-comments">
                    <h1>Recent Comments</h1>
                    <div id="comments-container">



                    </div>

                    {comments.map(comment => (
                        <div key={comment._id} className="comment">
                            <p><strong>{comment.author.email}</strong> {comment.text}</p>
                            <p><small>{comment.date}</small></p>
                        </div>
                    ))

                    }
                    {comments.length === 0 && <p className="noComment">No comments.</p>}


                </section>

                {isAuthenticated && (<section className="add-comment" >
                    <h1>Add a Comment</h1>
                    <form id="comment-form" onSubmit={submitHandler}>


                        <label htmlFor="comment-text">Comment:</label>
                        <textarea
                            id="comment-text"
                            name="comment"
                            rows="4"
                            required
                            onChange={changeHandler}
                            value={values.comment}
                        ></textarea>

                        <button type="submit">Submit Comment</button>

                    </form>
                </section>)}

            </div>
        </>
    )
}