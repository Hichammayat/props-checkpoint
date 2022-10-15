 const Profile=(props) => {
    const image = props => {
       
        return <div> {props.children}</div>;
       };
    return(
        
        <div>
            <h2>{props.fullName}</h2>
            <h2>{props.bio}</h2>
            <h2>{props.profession}</h2>

            <button onClick={()=>props.alertMyInput('my name is Hicham')}>click me</button>
        </div>
    )
}

export default Profile;