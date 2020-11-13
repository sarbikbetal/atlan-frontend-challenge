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
    Seating_Capacity: {
      type: "discrete_range",
      range: [20000, 70000],
      interval: 10000
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
    }
  }
});
