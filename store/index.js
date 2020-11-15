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
        "Chinaman",
        "Fast",
        "Fast_Medium",
        "Googly",
        "Left_arm",
        "Legbreak",
        "Medium",
        "Medium_Fast",
        "Offbreak",
        "Orthodox",
        "Right_Arm",
        "Slow"
      ]
    },
    Team: {
      type: "checkbox",
      val: [
        "Chennai Super Kings",
        "Delhi Capitals",
        "Kings XI Punjab",
        "Kolkata Knight Riders",
        "Mumbai Indians",
        "Rajasthan Royals",
        "Royal Challengers Bangalore",
        "Sunrisers Hyderabad"
      ]
    },
    Country: {
      type: "checkbox",
      val: [
        "India",
        "Australia",
        "Bangladesh",
        "England",
        "Netherlands",
        "New_Zealand",
        "Pakistan",
        "South_Africa",
        "Sri_Lanka",
        "West_Indies",
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
    "Pitch Type": {
      type: "checkbox",
      val: ["Dead", "Dusty", "Fast", "Green", "Seaming", "Slow"],
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
      val: ["Female", "Male"],
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
