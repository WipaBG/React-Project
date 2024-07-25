export default function AddComments() {
    return (
        <section className="add-comment">
            <h1>Add a Comment</h1>
            <form id="comment-form">
                <label for="comment-name">Name:</label>
                <input type="text" id="comment-name" name="name" required/>

                    <label htmlFor="comment-text">Comment:</label>
                    <textarea id="comment-text" name="comment" rows="4" required></textarea>

                    <button type="submit">Submit Comment</button>
            </form>
        </section>
    )
}