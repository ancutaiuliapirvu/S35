function UserItem(props) {
    const {name, email} = props;
    console.log('name', name, 'email', email);
    return(
        <>
            <h3>{name}</h3>
            <p>{email}</p>
        </>
    )
}
export default UserItem;