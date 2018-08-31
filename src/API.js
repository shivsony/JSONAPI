
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
    var arr = [];
    // const response = await fetch("https://wind-bow.glitch.me/twitch-api/streams/ESL_SC2");
    for(let i=0;i<8;i++){
      const response2 = await fetch(`https://wind-bow.glitch.me/twitch-api/channels/${streams[i]}`);
      const response = await fetch(`https://wind-bow.glitch.me/twitch-api/streams/${streams[i]}`);
      const data2 = await response2.json();
      const data = await response.json();
      data.stream ? data2.online = true : data2.online = false;
      arr.push(data2);
    }
    // console.log(arr);
    // const data = await response.json();
    return arr;
  }
  catch(e) {
    console.log(e);
  }
}
