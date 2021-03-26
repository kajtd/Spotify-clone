// put your clientID here
const clientID = "";

const AUTH_URL =
  `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

const Login = () => {
  return (
    <div className="container">
      <button className="login-btn">
        <a href={AUTH_URL}>
          Login With Spotify
        </a>
      </button>
    </div>
  );
}

export default Login;