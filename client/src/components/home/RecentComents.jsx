export default function RecentComents(){
    
    return(
        <section className="recent-comments">
        <h1>Recent Comments</h1>
        <div id="comments-container">
            <div className="comment">
                <p><strong>John Doe:</strong> Great room and excellent service!</p>
                <p><small>2024-07-20</small></p>
            </div>
            <div className="comment">
                <p><strong>Jane Smith:</strong> Enjoyed my stay, very comfortable.</p>
                <p><small>2024-07-19</small></p>
            </div>
            <div className="comment">
                <p><strong>Sam Brown:</strong> Clean and well-maintained rooms.</p>
                <p><small>2024-07-18</small></p>
            </div>
        </div>
    </section>
    )
}