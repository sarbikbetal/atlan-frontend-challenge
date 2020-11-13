export const state = () => ({
  playerFields: {
    Age: {
      type: "range",
      range: [18, 80]
    },
    Height: {
      type: "range",
      range: [5, 7]
    },
    Batting_Hand: {
      type: "checkbox",
      val: {
        Right_Hand: false,
        Left_Hand: false
      }
    },
    Bowling_Skills: {
      type: "checkbox",
      val: {
        Right_Arm: false,
        Left_arm: false,
        Fast: false,
        Fast_Medium: false,
        Medium_Fast: false,
        Medium: false,
        Slow: false,
        Orthodox: false,
        Legbreak: false,
        Googly: false,
        Offbreak: false,
        Chinaman: false
      }
    },
    Team: {
      type: "checkbox",
      val: {
        "Rising Pune Supergiant": false,
        "Mumbai Indians": false,
        "Chennai Super Kings": false,
        "Delhi Capitals": false,
        "Sunrisers Hyderabad": false,
        "Rajasthan Royals": false,
        "Deccan Chargers": false,
        "Kings XI Punjab": false,
        "Royal Challengers Bangalore": false,
        "Kolkata Knight Riders": false,
        "Delhi Daredevils": false,
        "Pune Warriors": false,
        "Kochi Tuskers Kerala": false,
        "Gujarat Lions": false
      }
    },
    Country: {
      type: "checkbox",
      val: {
        India: false,
        England: false,
        Sri_Lanka: false,
        West_Indies: false,
        New_Zealand: false,
        Australia: false,
        Pakistan: false,
        South_Africa: false,
        Bangladesh: false,
        Netherlands: false,
        Zimbabwea: false
      }
    }
  },
  teamFields: {
    Total_Wins: {
      type: "range",
      range: [5, 70]
    },
    Strenth: {
      type: "radio",
      val: ["Batting", "Bowling", "Fielding"]
    },
    Won_IPL: {
      type: "switch",
      val: false
    }
  },
  venueFields: {
    Seating_Capacity: {
      type: "discrete_range",
      range: [20000, 30000, 40000, 50000, 60000, 70000]
    },
    Pitch_Type: {
      type: "checkbox",
      val: {
        Dusty: false,
        Dead: false,
        Green: false,
        Slow: false,
        Fast: false,
        Seaming: false
      }
    }
  },
  ownerFields: {
    Profession: {
      type: "checkbox",
      val: {
        Dusty: false,
        Dead: false
      }
    },
    Pitch_Type: {
      type: "checkbox",
      val: {
        Dusty: false,
        Dead: false,
        Green: false,
        Slow: false,
        Fast: false,
        Seaming: false
      }
    }
  }
});
