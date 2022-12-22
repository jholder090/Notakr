//prop down attemptTokenLogin to SignIn.js
//render home page for logged in user
import React, {useState} from 'react';
import SignIn from './SignIn';
import axios from 'axios';

const Home = () => {
  const [auth, setAuth] = React.useState({});
  // const [notes, setNotes] = React.useState([]);

  const signIn = async (credentials) => {
    const response = await axios.post('/api/users', credentials);
    const  { token }  = response.data;
    console.log("STEP 3: REACT TOKEN", token)
    window.localStorage.setItem('token', token);
    attemptTokenLogin();
  };

  const attemptTokenLogin = async () => {
    const token = window.localStorage.getItem('token');
    if (token) {
      const { data: auth } = await axios.get('/api/users', {
        headers: {
          authorization: token,
        },
      });
      console.log("STEP 6: REACT AUTH", auth);
      setAuth(auth);

      // const { data: notes } = await axios.get(`/api/users/${auth.id}/notes`, {
      //   headers: {
      //     authorization: token,
      //   },
      // });
      // setNotes(notes);
      // console.log("NOTES --->", notes)
    }
  };



  // React.useEffect(() => {
  //   attemptTokenLogin();
  // }, []);



  // const logout = () => {
  //   window.localStorage.removeItem('token');
  //   setAuth({});
  // };


  if (!auth.id) return <SignIn signIn={signIn} attemptTokenLogin={attemptTokenLogin} />;



  return (
    <div>
      <div>
        Welcome {auth.username}!
        <button onClick={logout}>Logout</button>
      </div>
      <ul>
        {notes.map((note) => {
          return (
            <li key={note.id}>{note.text}</li>
          )
        })}</ul>
    </div>
  );
};

export default Home;
