import React from 'react';

const  ResultList = (props) => {
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Picture</th>
          <th scope="col">First</th>
          <th scope="col" onClick={props.handleSort} >Last</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.length > 0 ? props.employees.map(employee => {
          console.log(employee)
          return (
            <tr>
          <th scope="row">1</th>
          <td><img src={employee.picture.thumbnail} alt=""/></td>
          <td>{employee.name.first}</td>
          <td>{employee.name.last}</td>
          <td>{employee.location.city}, {employee.location.state}</td>
        </tr>
          )
        }) :  <tr>
          <th scope="row">1</th>
          <td><img src="" alt=""/></td>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Location</td>
        </tr>}
        
      </tbody>
    </table>
  );
}

export default ResultList;
//     <ul className="list-group">
//       {props.results.map(result => (
//         <li className="list-group-item" key={result.id}>
//           <img alt={result.title} className="img-fluid" src={result.images.original.url} />
//         </li>
//       ))}
//     </ul>
