export const state = () => ({
  playerFields: {
    Age: {
      type: "range",
      range: [18, 80]
    },
    "Height (cm)": {
      type: "discrete_range",
      range: [150, 220],
      interval: 10
    },
    Batting_Hand: {
      type: "checkbox",
      val: ["Right_Hand", "Left_Hand"],
      open: true
    },
    Bowling_Skills: {
      type: "checkbox",
      val: [
        "Right_Arm",
        "Left_arm",
        "Fast",
        "Fast_Medium",
        "Medium_Fast",
        "Medium",
        "Slow",
        "Orthodox",
        "Legbreak",
        "Googly",
        "Offbreak",
        "Chinaman"
      ]
    },
    Team: {
      type: "checkbox",
      val: [
        "Rising Pune Supergiant",
        "Mumbai Indians",
        "Chennai Super Kings",
        "Delhi Capitals",
        "Sunrisers Hyderabad",
        "Rajasthan Royals",
        "Deccan Chargers",
        "Kings XI Punjab",
        "Royal Challengers Bangalore",
        "Kolkata Knight Riders",
        "Delhi Daredevils",
        "Pune Warriors",
        "Kochi Tuskers Kerala",
        "Gujarat Lions"
      ]
    },
    Country: {
      type: "checkbox",
      val: [
        "India",
        "England",
        "Sri_Lanka",
        "West_Indies",
        "New_Zealand",
        "Australia",
        "Pakistan",
        "South_Africa",
        "Bangladesh",
        "Netherlands",
        "Zimbabwea"
      ]
    }
  },
  teamFields: {
    Total_Wins: {
      type: "range",
      range: [5, 70]
    },
    Won_IPL: {
      type: "switch"
    },
    Strenth: {
      type: "checkbox",
      val: ["Batting", "Bowling", "Fielding"],
      open: true
    }
  },
  venueFields: {
    "Seating Capacity (K)": {
      type: "discrete_range",
      range: [20, 70],
      interval: 10
    },
    Pitch_Type: {
      type: "checkbox",
      val: ["Dusty", "Dead", "Green", "Slow", "Fast", "Seaming"],
      open: true
    }
  },
  ownerFields: {
    Profession: {
      type: "checkbox",
      val: ["Bollywood", "Business"],
      open: true
    },
    Gender: {
      type: "checkbox",
      val: ["Male", "Female"],
      open: true
    }
  },
  routeQuery: {}
});

export const mutations = {
  setRouteQuery(state, query) {
    state.routeQuery = query;
  }
};

export const getters = {
  getRouteQuery: state => {
    return { ...state.routeQuery };
  }
};
