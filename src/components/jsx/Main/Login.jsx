const loginData = [
  {
    id: 1,
    name: "Email / Phone Number",
    classId: "email-or-phone",
    placeholder: "Email or phone here...",
  },
  {
    id: 2,
    name: "Password",
    classId: "password",
    placeholder: "Password here...",
  },
]



function MemberForm(){
  return(
    loginData.map((item) => {
      return(
        <form action="" className="member-form" key={item.id}>
          <label htmlFor={item.classId} className="member-label">{item.name}</label>
          <input type="text" className="member-input" id={item.classId} placeholder={item.placeholder}/>
        </form>
      )
    })
  )
}


export default function Login(){
  return(
    <section className="membership">
      <div className="member-container">
        <h3 className="member-title title">Login or Signup</h3>
        <div className="member-body">
          <section className="login member-section">
            <div className="login-container">
              <h5 className="login-title second-title">Login</h5>
              <div className="login-body">
                <MemberForm/>
                <a href="" className="forget-password">Forget Password?</a>
                <br/>
                <button type="submit" className="member-submit">Login</button>
                <div className="member-btn-group">
                  <button type="submit" className="shortcut-submit">Use <b>FACEBOOK</b> to login</button>
                  <button type="submit" className="shortcut-submit">Use <b>LINE</b> to login</button>
                </div>
              </div>
            </div>
          </section>
          <section className="signup member-section">
            <div className="signup-container">
              <h5 className="signup-title second-title">Signup</h5>
              <div className="signup-body">
                <MemberForm/>
                <div className="member-checkbox-group">
                  <input type="checkbox" name="subscribe" class="member-checkbox-input"/>
                  <label for="subscribe" class="member-checkbox-label">I would like to received AC's latest news and membership
                    discount information</label>
                  <br/>
                  <input type="checkbox" name="policy" class="member-checkbox-input"/>
                  <label for="policy" class="member-checkbox-label">I agree AC's <a href="" class="customer-privacy">Customer Privacy
                      Policy</a> and <a href="" class="customer-service">Customer Service Terms</a>.</label>
                </div>
                <button type="submit" className="member-submit">Signup</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}