
const streams = [
  "ESL_SC2",
  "OgamingSC2",
  "cretetion",
  "freecodecamp",
  "storbeck",
  "habathcx",
  "RobotCaleb",
  "noobs2ninjas"
];
export const fetchData = async (shiv) => {
  try {
    const response = await fetch("https://wind-bow.glitch.me/twitch-api/streams/ESL_SC2");
    // const response2 = await fetch("https://wind-bow.glitch.me/twitch-api/streams/OgamingSC2");
    // const response3 = await fetch("https://wind-bow.glitch.me/twitch-api/streams/cretetion");
    // const response4 = await fetch("https://wind-bow.glitch.me/twitch-api/streams/freecodecamp");
    // const response5 = await fetch("https://wind-bow.glitch.me/twitch-api/streams/storbeck");
    // const response6 = await fetch("https://wind-bow.glitch.me/twitch-api/streams/habathcx");
    // const response7 = await fetch("https://wind-bow.glitch.me/twitch-api/streams/RobotCaleb");
    // const response8 = await fetch("https://wind-bow.glitch.me/twitch-api/streams/noobs2ninjas");
    const data = await response.json();
    return data;
  }
  catch(e) {
    console.log(e);
  }
}
