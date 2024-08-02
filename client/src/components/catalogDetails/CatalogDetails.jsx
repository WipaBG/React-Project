import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


import commentsApi from "../../api/comments-api";

import roomsApi from "../../api/rooms-api";

import AddComments from "./add-comment/AddComments";

export default function CatalogDetails() {
    const [room, setRoom] = useState({});
    const { roomId } = useParams();
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');



    useEffect(() => {
        (async () => {
            const result = await roomsApi.getOne(roomId);
            setRoom(result);
        })();


    });

    const commentSubmitHanlder = async (e) => {
        e.preventDefault();

        await commentsApi.create(roomId, username, comment);
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
                        {room.comments && Object.values(room.comments).map(comment => (
                            <div key={comment._id}className="comment">
                                <p><strong>{comment.username}:</strong> {comment.text}</p>
                                <p><small>2024-07-20</small></p>
                            </div>
                        ))}

                    </div>
                </section>

                <AddComments roomId={roomId} />

            </div>


        </>

    )
}