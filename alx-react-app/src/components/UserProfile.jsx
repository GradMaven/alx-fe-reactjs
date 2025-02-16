const UserProfile = (props) => {
    return (
        <div style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px", maxWidth: "300px" }}>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;
