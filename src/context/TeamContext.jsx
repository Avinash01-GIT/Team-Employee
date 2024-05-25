import { createContext, useState, useContext } from "react";

const TeamContext = createContext();

export const useTeam = () => {
  return useContext(TeamContext);
};

export const TeamProvider = ({ children }) => {
  const [team, setTeam] = useState([]);

  const addToTeam = (employee) => {
    if (!team.find((member) => member.id === employee.id)) {
      setTeam([...team, employee]);
    }
  };

  const removeFromTeam = (employee) => {
    setTeam(team.filter((member) => member.id !== employee.id));
  };

  const calculateAverageAge = () => {
    if (team.length === 0) return 0;
    const totalAge = team.reduce((sum, member) => sum + member.age, 0);
    return (totalAge / team.length).toFixed(1);
  };

  return (
    <TeamContext.Provider
      value={{ team, addToTeam, removeFromTeam, calculateAverageAge }}
    >
      {children}
    </TeamContext.Provider>
  );
};
