import { teamModel } from "../models/team.model.js";


export const getTeams = async function () {
  //get all teams
  try {
    const teams = await teamModel.find();
    if (teams) {
      return teams;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}



export const filterTeamByAlphabeticName = async function () {
  //get all teams
  try {
    const teams = await teamModel.find();
    if (teams) {
      teams.sort((a, b) => a.name.localeCompare(b.name));// Ordenar equipos alfabeticamente
      return teams;
    }
  } catch (error) {
    return null;
  }
}