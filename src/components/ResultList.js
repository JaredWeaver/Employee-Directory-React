import React from 'react';

const ResultList = (props) => {
  return (
    <table
      className="table table-dark table-striped table-bordered table-sm"
      cellSpacing="0"
      width="100%"
    >
      <thead>
        <tr>
          <th scope="col" className="th-sm"></th>
          <th scope="col" className="th-sm">
            First Name
          </th>
          <th scope="col" className="th-sm">
            Last Name <i className="fas fa-sort icon" onClick={props.handleSort}></i>
          </th>
          <th scope="col" className="th-sm">
            Email
          </th>
          <th scope="col" className="th-sm">
            Phone Number
          </th>
        </tr>
      </thead>
      <tbody>
        {props.employees.length > 0 ? (
          props.employees.map((employee) => {
            return (
              <tr>
                <td>
                  <img src={employee.picture.large} alt="employee headshot" />
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
