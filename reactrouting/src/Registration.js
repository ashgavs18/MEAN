import React, { useState , useEffect} from 'react';

function Registration() {
    const [userArray, setUserArray] = useState(() => {
      const storedUserArray = JSON.parse(localStorage.getItem('userArray'));
      return storedUserArray ? storedUserArray : [];
    });
  
    useEffect(() => {
      localStorage.setItem('userArray', JSON.stringify(userArray));
    }, [userArray]);
 
  const submit = (event) => {
    event.preventDefault();

    const x = event.target.elements.Fname.value;
    const y = event.target.elements.Lname.value;
    const z = event.target.elements.email.value;

    const newUser = {
      firstName: x,
      lastName: y,
      email: z,
    };

    const updatedUserArray = [...userArray, newUser];
    setUserArray(updatedUserArray);
    localStorage.setItem('userArray', JSON.stringify(updatedUserArray));

    event.target.reset();
  };

  const RemoveEntry = (event) => {
    event.preventDefault();

    const index = event.target.getAttribute('index');
    const updatedUserArray = [...userArray];
    updatedUserArray.splice(index, 1);
    setUserArray(updatedUserArray);
    localStorage.setItem('userArray', JSON.stringify(updatedUserArray));
  };
  
  return (
    <div className='card'>
      <fieldset>
        <legend>Registration ReactJS</legend>
        <form onSubmit={submit}>
          <label>FirstName</label>
          <input type="text" name="Fname" /><br />
          <label>LastName</label>
          <input type="text" name="Lname" /><br />
          <label>Email</label>
          <input type="email" name="email"  /><br />
          <input type="submit" value="Register" />
        </form>
      </fieldset>
      <div id="span">
        <table>
          <caption>Registered Users</caption>
          <tbody>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Delete</th>
            </tr >
            
            {   
             
            userArray.map((user, index) => (
              <tr key={index}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td><input className="class"type="button" value="Remove" onClick={RemoveEntry} index={index} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Registration;