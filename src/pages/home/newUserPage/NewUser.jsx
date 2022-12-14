import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
            <div className="newUserItem">
                <label>Username</label>
                <input type="text" placeholder="johndoe" />
            </div>
            <div className="newUserItem">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" />
            </div>
            <div className="newUserItem">
                <label>Email</label>
                <input type="email" placeholder="johndoe@gmail.com" />
            </div>
            <div className="newUserItem">
                <label>Password</label>
                <input type="password" placeholder="password" />
            </div>
            <div className="newUserItem">
                <label>Phone</label>
                <input type="text" placeholder="+256 789 7845 643" />
            </div>
            <div className="newUserItem">
                <label>Address</label>
                <input type="text" placeholder="Kla|UG" />
            </div>
            <div className="newUserItem">
                <label>Gender</label>
                <div className="newUserGender">
                  <input type="radio" id="male" value="male" />
                  <label for="male">Male</label>
                  <input type="radio" id="female" value="female" />
                  <label for="female">Female</label>
                </div> 
            </div>
            <div className="newUserItem">
               <label>Active</label>
               <select className="newUserSelect" name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
               </select>
            </div>
            <button className="newUserButton">Create</button>
        </form>
    </div>
  )
}
