import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


import commentsApi from "../../api/comments-api";

import roomsApi from "../../api/rooms-api";


export default function CatalogDetails() {
    const [room, setRoom] = useState({});
    const { roomId } = useParams();
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${month}-${day}-${year}`; 


    useEffect(() => {
        (async () => {
            const result = await roomsApi.getOne(roomId);
            setRoom(result);
        })();


    }, [roomId]);


    const commentSubmitHanlder = async (e) => {
        e.preventDefault();

        const newComment = await commentsApi.create(roomId, username, comment, formattedDate);
        setRoom(prevState => ({
            ...prevState,
            comments: {
                ...prevState.comments,
                [newComment._id]: newComment,
            }
        }))
    }






    return (
        <>
            <div className="room-container">
                <h2 className="room-title">Apartment: {room.number}</h2>
                <ul className="room-details-list">
                    <li>Capacity: {room.capacity} people</li>
                    <li>Room type: {room.roomType}</li>
                </ul>
                <div className="room-image-container">
                    <img src={room.img} alt={`Room ${room.number}`} className="room-image" />
                </div>

                <section className="recent-comments">
                    <h1>Recent Comments</h1>
                    <div id="comments-container">



                    </div>
                    {Object.keys(room.comments || {}).length > 0

                        ? Object.values(room.comments).map(comment => (
                            <div key={comment._id} className="comment">
                                <p><strong>{comment.username}:</strong> {comment.text}</p>
                                <p><small>{comment.date}</small></p>
                            </div>
                        ))
                        : <p className="noComment">No comments.</p>

                    }

                </section>

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

            </div>


        </>

    )
}