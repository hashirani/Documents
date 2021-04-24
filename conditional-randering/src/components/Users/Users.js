import React from 'react';

const Users = (props) => {
    const user = props.user;
    let greetings ;
    if (user) {
       greetings=<p>Welcome ,my friend</p>        
    }
    else{
        greetings=<p>Who the hell are you</p>
    }
    return (
        <div>
             <div>        
          <h2>Greetings</h2>
          {greetings}
          </div>
          <div>
              <h3>Food</h3>
              {
                  user 
                  ? <p>My favourite food</p>
                  : <p>I don't  like this food</p>
              }
          </div>
          <div>
              <h2>Join</h2>
              {
                  user && <p>We will join the party</p>
              }
          </div>
        </div>
    );
};

export default Users;