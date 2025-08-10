import React, { useState } from "react";
import useForm from "./hooks/useForm";

const FormAndTableComponent = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");

  //   const [user, setUser] = useState({});
  const { formValue: user, handleChange } = useForm();

  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prev) => [...prev, user]);
  };

  return (
    <>
      <h1>Vijay</h1>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Enter your name...!"
              onChange={handleChange}
              name="name"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter your email...!"
              onChange={handleChange}
              name="email"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Enter your age...!"
              onChange={handleChange}
              name="age"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter your place...!"
              onChange={handleChange}
              name="place"
            />
          </div>
          <div>
            <textarea
              type="text"
              placeholder="Enter your address...!"
              onChange={handleChange}
              name="address"
            />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
      </section>
      <hr />
      <section className="table">
        {users.length > 0 && (
          <table border="1" cellPadding="10" cellSpacing="0">
            <thead>
              <tr>
                {Object.keys(users[0])?.map((data) => {
                  return <th key={data}>{data}</th>;
                })}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => {
                return (
                  <tr>
                    {Object.values(user)?.map((data) => {
                      return <td key={data}>{data}</td>;
                    })}
                    <td>
                      <button
                        onClick={() => {
                          users.splice(idx, 1);
                          setUsers([...users]);
                        }}
                      >
                        Del
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </section>
    </>
  );
};

export default FormAndTableComponent;
