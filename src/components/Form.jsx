import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgTrash } from "react-icons/cg";
import { BsPencilSquare } from "react-icons/bs";
import { data } from "../data";

function Form() {
  const [titlename, setTitlename] = useState("");
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");

  const [movies, setMovies] = useState(data);

  const history = useNavigate();

  const addMovie = () => {
    const newEntry = {
      titlename: titlename,
      genre: genre,
      date: date,
    };

    setMovies((prev) => [...prev, newEntry]);
    console.log(movies);
  };

  const handleDelete = (id) => {
    let index = movies
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    movies.splice(index, 1);
    console.log(index);
    console.log("delete btn");
    history("/");
  };
  const handleEdit = () => {
    alert("No edit functionality yet.");
  };

  return (
    <div className="container m-5 p-3 d-flex justify-content-between">
      <div className="body">
        <h1>Movie</h1>
        <label htmlFor="titlename">Title Name</label>
        <br />
        <input
          type="text"
          name="titlename"
          onChange={(e) => {
            setTitlename(e.target.value);
          }}
          className="w-100"
        />
        <br />
        <label htmlFor="genre">Genre</label>
        <br />
        <input
          type="text"
          name="genre"
          onChange={(e) => {
            setTitlename(e.target.value);
          }}
          className="w-100"
        />
        <br />
        <label htmlFor="date">Release Date</label>
        <br />
        <input
          type="date"
          name="purpose"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          className="w-100"
        />
        <br />
        <button
          onClick={addMovie}
          className="btn btn-success btn-sm mt-4 w-100"
        >
          Add
        </button>
      </div>
      <div className="table m-3 p-2 w-75 justify-content-between">
        <table className="card-body">
          <thead className="thead-blue">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th> 
              <th scope="col">Release Date</th>              
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => {
              return (
                <tr key={index}>
                  <td>{movie.titlename}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.date}</td>
                  <td>
                    <button
                      className="btn btn-sm bg-info m-1 w-100 text-white"
                      onClick={() => handleEdit()}
                    >
                      <BsPencilSquare />
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm bg-danger m-1 w-100 text-white"
                      onClick={() => handleDelete(movie.id)}
                    >
                      <CgTrash />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Form;
