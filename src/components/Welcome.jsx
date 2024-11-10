import React from "react";

function Welcome({onGetPostsClick}) {
  return (
    <center>
      <h1 className="welcome-message">There are no posts.</h1>
      <button type="button" class="btn btn-primary" onClick={onGetPostsClick}>Get Posts From Server</button>
    </center>
  );
}

export default Welcome;
