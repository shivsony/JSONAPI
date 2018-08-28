export const fetchData = async () => {
  try {
    const response = await fetch("https://wind-bow.glitch.me/twitch-api/streams/ESL_SC2");
     const data = await response.json();
     return data;
  }
  catch(e) {
    console.log(e);
  }
}
