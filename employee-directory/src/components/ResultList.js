import React from 'react';

const ResultList = (props) => {
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">First Name</th>
          <th scope="col" onClick={props.handleSort}>
            Last Name
          </th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.length > 0 ? (
          props.employees.map((employee) => {
            console.log(employee);
            return (
              <tr>
                <td>
                  <img src={employee.picture.large} alt="Photo of employee" />
                </td>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>{employee.email}</td>
                <td>{employee.cell}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td>
              <img src="" alt="" />
            </td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>Phone Number</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ResultList;
//     <ul className="list-group">
//       {props.results.map(result => (
//         <li className="list-group-item" key={result.id}>
//           <img alt={result.title} className="img-fluid" src={result.images.original.url} />
//         </li>
//       ))}
//     </ul>
