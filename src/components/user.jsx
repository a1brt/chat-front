import { Avatar } from "@mui/material"

function User(props){
    // eslint-disable-next-line react/prop-types
    return <Avatar>{props.data.name.charAt(0)}</Avatar>
}

export default User