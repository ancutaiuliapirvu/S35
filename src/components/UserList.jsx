import UserItem from "./UserItem";
function UserList(props) {
    const {users} = props;
    return(
        <>
            {users.map((user, index) => 
                <UserItem 
                    key={index}
                    name={user.name}
                    email={user.email}
                />)}    
        </>
    )
}
export default UserList;