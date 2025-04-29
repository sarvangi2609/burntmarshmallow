import { Link } from "react-router-dom";

export function UserDropDown() {
    return (
      <>

      <div className="nav-drop">
        <ul className="navdrop-ul">

            <li>  <Link to="/userprofile" style={{textDecoration:"none"}}><h4>Sign In</h4></Link>  
                <div style={{padding:"10px 0px"}}>View your account and check your order status.</div>
            </li>

            <hr />

            <li>
            <Link to="/userprofile" style={{textDecoration:"none"}}><h4>Create Account</h4> </Link>   
                <div style={{padding:"10px 0px"}}>Track orders, save items to lists and more!</div>
            </li>

            <hr />

            <li> <h4>My Account</h4> </li>
            <li> <h4>My Order</h4> </li>
            <li> <h4>Explore Pro</h4> </li>
            <li> <h4>Help</h4> </li>

        </ul>
      </div>

      </>
    );
}



export function UserDropDownAfterSignin() {
  return (
    <>

    <div className="nav-drop">
      <ul className="navdrop-ul">

          <li> <h4>My Account</h4> </li>
          <li> <h4>My Order</h4> </li>
          <li> <h4>My Reviews</h4> </li>
          <li> <h4>Explore Pro</h4> </li>
          <li> <h4>Gift cards</h4> </li>
          <li> <h4>My Lists</h4> </li>
          <li> <h4>Help</h4> </li>

          <hr />

          <li> <h4>Sign Out</h4> </li>

      </ul>
    </div>

    </>
  );
}



export function ListDropDown() {
  return (
    <>

    <div className="nav-drop">
      <ul className="navdrop-ul">

          <li> <h4>Favorites</h4> 
          </li>


          <li> <h4>Save For Later</h4> </li>

          <hr />

          <li> <h4>View All My Lists</h4> </li>
          <li> <h4>Find a List</h4> </li>
  
      </ul>
    </div>

    </>
  );
}
  
