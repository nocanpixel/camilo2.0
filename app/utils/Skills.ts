export const skills = [
    {
      id: 1,
      name: "Javascript",
      color: "#F0DB4F",
      text: getTextColor("#F0DB4F"), // Yellow background, black text
    },
    {
      id: 2,
      name: "React JS",
      color: "#61DBFB",
      text: getTextColor("#61DBFB"), // Red background, black text
    },
    {
      id: 3,
      name: "Node JS",
      color: "#3C873A",
      text: getTextColor("#3C873A"), // Green background, white text
    },
    {
      id: 4,
      name: "HTML",
      color: "#F06529",
      text: getTextColor("#F06529"), // Orange background, white text
    },
    {
      id: 5,
      name: "CSS",
      color: "#3C99DC",
      text: getTextColor("#3C99DC"), // Red background, white text
    },
    {
      id: 6,
      name: "Vite",
      color: "#F3FA8C",
      text: getTextColor("#F3FA8C"), // Yellow background, black text
    },
    {
      id: 7,
      name: "Styled components",
      color: "#4D326B",
      text: getTextColor("#4D326B"), // Pink background, black text
    },
    {
      id: 9,
      name: "GraphQL",
      color: "#EFB9E4",
      text: getTextColor("#EFB9E4"), // Purple background, white text
    },
  ];
  
  function getTextColor(backgroundColor:string) {
    // Convert the background color to a RGB value
    const r = parseInt(backgroundColor.slice(1, 3), 16);
    const g = parseInt(backgroundColor.slice(3, 5), 16);
    const b = parseInt(backgroundColor.slice(5, 7), 16);
  
    // Calculate the brightness using a simple formula
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
    // Return black for light backgrounds and white for dark backgrounds
    return brightness > 128 ? "#000000" : "#FFFFFF";
  }

  
  
  
  