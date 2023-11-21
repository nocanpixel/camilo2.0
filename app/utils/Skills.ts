export const skills = [
    {
      id: 1,
      name: "Javascript",
      color: "#F0DB4F",
      text: getTextColor("#F0DB4F"), // Yellow background, black text
      logo: "https://abrudz.github.io/logos/JS.svg",
      experience: "6",
      class: "md:row-span-3"
    },
    {
      id: 2,
      name: "React JS",
      color: "#61DBFB",
      text: getTextColor("#61DBFB"), // Red background, black text
      logo: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
      experience: "4",
      class: "md:row-span-3 md:col-start-4 md:row-start-3  "
    },
    {
      id: 3,
      name: "Node JS",
      color: "#3C873A",
      text: getTextColor("#3C873A"), // Green background, white text
      logo: "https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png",
      experience: "2",
      class: "md:row-span-3 md:col-start-5 md:row-start-1"
    },
    {
      id: 4,
      name: "HTML 5",
      color: "#F06529",
      text: getTextColor("#F06529"), // Orange background, white text
      logo: "https://cdn.freebiesupply.com/logos/large/2x/html5-logo-png-transparent.png",
      experience: "6",
      class: "md:row-span-3 md:col-start-3 md:row-start-1 "
    },
    {
      id: 5,
      name: "CSS",
      color: "#3C99DC",
      text: getTextColor("#3C99DC"), // Red background, white text
      logo: "https://cdn.freebiesupply.com/logos/large/2x/css-3-logo-png-transparent.png",
      experience: "6",
      class: "md:row-span-3 md:col-start-2 md:row-start-3 "
    },
    {
      id: 6,
      name: "Github",
      color: "#F3FA8C",
      text: getTextColor("#F3FA8C"), // Yellow background, black text
      logo: "https://cdn.freebiesupply.com/logos/large/2x/github-icon-1-logo-png-transparent.png",
      experience: "3",
      class: "md:row-span-3 md:col-start-5 md:row-start-4 "
    },
    {
      id: 7,
      name: "S. components",
      color: "#4D326B",
      text: getTextColor("#4D326B"), // Pink background, black text
      logo: "https://avatars.githubusercontent.com/u/20658825?s=200&v=4",
      experience: "2",
      class: "md:row-span-3 md:col-start-3 md:row-start-4 "
    },
    {
      id: 9,
      name: "Redux",
      color: "#EFB9E4",
      text: getTextColor("#EFB9E4"), // Purple background, white text
      logo: "https://redux.js.org/img/redux.svg",
      experience: "2",
      class: "md:row-span-3 md:col-start-1 md:row-start-4"
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

  
  
  
  