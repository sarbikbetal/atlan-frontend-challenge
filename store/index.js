export const state = () => ({
  players: [],
  teams: [],
  venues: [],
  owners: [],
  playerFields: [],
  teamFields: {}
});

export const mutations = {
  loadPlayerData(state, playerData) {
    state.players = playerData;
  },
  loadTeamData(state, teamData) {
    state.teams = teamData;
  },
  loadPlayerFilters(state, playerData) {
    // state.playerFields = playerData;
  },
  loadTeamFilters(state, teamData) {
    let h_wins = [];
    let a_wins = [];
    let h_matches = [];
    let a_matches = [];
    teamData.forEach(team => {
      h_wins.push(team.h_wins);
      a_wins.push(team.a_wins);
      h_matches.push(team.h_ms);
      a_matches.push(team.a_ms);
    });

    state.teamFields = {
      "Home Wins": {
        type: "range",
        val: [Math.min(...h_wins), Math.max(...h_wins)]
      },
      "Away Wins": {
        type: "range",
        val: [Math.min(...a_wins), Math.max(...a_wins)]
      },
      "Home Matches": {
        type: "range",
        val: [Math.min(...h_matches), Math.max(...h_matches)]
      },
      "Away Matches": {
        type: "range",
        val: [Math.min(...a_matches), Math.max(...a_matches)]
      }
    };
  }
};

export const actions = {
  async loadPlayerData(context) {
    const playerData = await fetch("players.json").then(res => res.json());
    context.commit("loadPlayerData", playerData);
  },
  async loadTeamData(context) {
    const teamData = await fetch("teams.json").then(res => res.json());
    context.commit("loadTeamData", teamData);
    context.commit("loadTeamFilters", teamData);
  }
};
