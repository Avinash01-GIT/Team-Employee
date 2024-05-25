import EmployeesData from "../utils/EmployeesData";
import { useTeam } from "../context/TeamContext";
import "../App.css";

const TeamManager = () => {
  const { team, addToTeam, removeFromTeam, calculateAverageAge } = useTeam();

  return (
    <div className="container">
      <div className="box">
        <h2>Employees</h2>
        {EmployeesData.map((employee) => (
          <div key={employee.id} className="employee">
            <span>
              {employee.first_name} {employee.last_name} ({employee.age})
            </span>
            <button className="button" onClick={() => addToTeam(employee)}>
              ADD
            </button>
          </div>
        ))}
      </div>
      <div className="box">
        <h2>Team</h2>
        {team.map((employee) => (
          <div key={employee.id} className="employee">
            <span>
              {employee.first_name} {employee.last_name} ({employee.age})
            </span>
            <button
              className="button remove"
              onClick={() => removeFromTeam(employee)}
            >
              REMOVE
            </button>
          </div>
        ))}
        <div className="average-age">Average Age: {calculateAverageAge()}</div>
      </div>
    </div>
  );
};

export default TeamManager;
