import React, { useState } from "react";
import moment from "moment/moment";

const SearchResults = ({ results }) => {

  const [item, setItem] = useState([]);

    const selected = (toggle) =>{
    return (toggle ? "selected" : "");
  }

  const handleClick = (user) => {
    //console.log(_event.currentTarget.classList.add("selected"));
    setItem(item.concat(user));
  }
 
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">title</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scope="col">nights</th>
          <th scope="col">profile</th>
        </tr>
      </thead>

      <tbody>
        {results.map((user) => {
          const checkIn = moment(user.checkInDate);
          const checkOut = moment(user.checkOutDate);
          const difference = checkOut.diff(checkIn, "days");

          return (
            <tr key={user.id} onClick={() => handleClick(user)} className={selected(item)}>
              <td>{user.title}</td>
              <td>{user.firstName}</td>
              <td>{user.surname}</td>
              <td>{user.email}</td>
              <td>{user.roomId}</td>
              <td>{user.checkInDate}</td>
              <td>{user.checkOutDate}</td>
              <td>{difference}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
