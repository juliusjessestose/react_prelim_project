import React from "react";

function Edit() {
  return (
    <>
      <div className="container  d-flex align-item-center justify-content-center mt-4">
        <div className="form w-50 shadow-lg p-4">
          <h1 className="text-center">Movie Entry</h1>
          <label htmlFor="titlename">Title Name</label>
          <br />
          <input type="text" name="titlename" className="w-100" />
          <br />
          <label htmlFor="genre">Genre</label>
          <br />
          <input type="text" name="genre" className="w-100" />
          <br />
          <label htmlFor="date">Date</label>
          <br />
          <input type="date" name="purpose" className="w-100" />
          <br />
          <button className="btn btn-success btn-sm mt-3 w-100">Submit</button>
        </div>
      </div>
    </>
  );
}

export default Edit;
