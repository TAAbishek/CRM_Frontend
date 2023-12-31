
function NotAuthorized(props){
    return(
        <div className="bg-info vh-100 d-flex justify-content-center align-items-center">
            <div className="text-white text-center">
                <h3>OOPS! {props.type.toLocaleUpperCase()} is not authorized to access this route</h3>
                <a href="/" className="text-white"><p>Move to Login Page</p></a>
            </div>
        </div>
    )
}

export default NotAuthorized;