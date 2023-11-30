import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ keyword, handleKeyPress, setKeyword, fetchMusicData }) => {
  return (
    <header className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/BeatBuff">
          <i className="bi bi-music-note-list mx-3"></i> BeatBuff
        </Link>
        <div className="dropdown">
          {/* ... (unchanged code) */}
        </div>

        <div
          className="collapse navbar-collapse d-flex justify-content-center"
          id="navbarSupportedContent"
        >
          <input
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            onKeyDown={handleKeyPress}
            className="form-control me-2 w-75"
            type="search"
            placeholder="Search"
            aria-label="Search Music"
          />
          <button onClick={fetchMusicData} className="btn btn-outline-success">
            Search
          </button>

          {/* Button for Liked Music */}
          <Link to="/likedMusic" className="btn btn-outline-primary mx-2">
            💖
          </Link>

          {/* Link to the login page */}
          <Link to="/login" className="btn btn-outline-primary mx-2">
            Login
          </Link>
          {/* Link to the signup page */}
          <Link to="/signup" className="btn btn-outline-primary">
            Signup
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;