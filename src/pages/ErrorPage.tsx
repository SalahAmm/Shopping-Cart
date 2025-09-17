import { Link } from "react-router"

const ErrorPage = () => {

  return (
    <>
     <div>There is no Page by this Name</div>
     <Link to='/'>Go to Home Page</Link>
    </>
  )

}

export default ErrorPage;
