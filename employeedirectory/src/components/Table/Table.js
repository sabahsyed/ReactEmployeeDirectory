import React from "react";

function Table(props) {
  return (
      // <table>
      //   <thead>
      //     <tr>
      //       <th scope = "col">Image</th>
      //       <th scope="col">Name
      //         <button onClick = {()=> props.sort()}>Sort</button></th>
      //       <th scope="col">Phone</th>
      //       <th scope="col">Email</th>
      //       <th scope="col">DOB</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {props.results.map(employee => {
      //       console.log("Mapping of employee ==>TABLE ");
      //       return(
      //         <tr key = {employee.email}>
      //           <td><img alt = "employee" src = {employee.picture.thumbnail} /></td>
      //           <td>{employee.name.title + "  " + employee.name.first +  " " + employee.name.last}</td>
      //            <td>{employee.phone}</td>
      //             <td>{employee.email}</td>
      //             <td>{employee.dob}</td>
      //         </tr>
      //       );
      //     })}
      //   </tbody>
      // </table>
      <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name
          <button  onClick =  { () => props.sort()}> Sort</button></th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(employee => {
          console.log(employee);
          return (
            <tr key={employee.phone}>
              <td><img alt="employee" src={employee.picture.thumbnail}/></td>
              <td>{employee.name.first + " " + employee.name.last}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{employee.dob.date}</td> 
            </tr>
          )
        })}
        
      </tbody>
    </table>
  );
}

export default Table;





