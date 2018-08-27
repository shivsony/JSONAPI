export const fetchData = async () => {
  try {
    const response = await fetch("https://api.twitch.tv/kraken/streams/freecodecamp?callback=?",function(data) {
      console.log(data);
    });
     const data = await response.json();
     console.log(data);
     return data;
  }
  catch(e) {
    console.log(e);
  }
}
