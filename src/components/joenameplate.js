import React, { useEffect, useState } from 'react'

function JoeName() {
      const bungie = "https://bungie.net"
      const [nameplate, setNameplate] = useState(null);
      const [gamertag, setGamertag] = useState(null);
      const [guardianRank, setGuardianRank] = useState("1");
      const [lastPlayedDate, setDateLastPlayed] = useState(null);
      const [ally, setAlly] = useState(0);
      const [fun, setFun] = useState(0);
      const [mastery, setMastery] = useState(0);
      const [leadership, setLeadership] = useState(0);
      const newDate = new Date(lastPlayedDate)
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const lastPlayedDateUpdate = newDate.toLocaleDateString(undefined, options);
      const [seasonPass, setSeasonPass] = useState(0);
      
       useEffect(() => {
        const fetchData = async() => {
          const url = "https://www.bungie.net/Platform/Destiny2/1/Profile/4611686018518057094/?components=100,200,1400,202";
          const getData = await fetch(url, {
              headers: {
                  'x-api-key': '2c6c008e57644a4bb63f00504758c443'
              }
          })
          getData.json().then(json => {
            setNameplate(json.Response.characters.data["2305843009889894407"].emblemBackgroundPath);
            setGamertag(json.Response.profile.data.userInfo.bungieGlobalDisplayName);
            setGuardianRank(json.Response.profile.data.currentGuardianRank);
            setDateLastPlayed(json.Response.profile.data.dateLastPlayed);
            setAlly(json.Response.profileCommendations.data.commendationNodeScoresByHash["154475713"]);
            setFun(json.Response.profileCommendations.data.commendationNodeScoresByHash["1341823550"]);
            setMastery(json.Response.profileCommendations.data.commendationNodeScoresByHash["4180748446"]);
            setLeadership(json.Response.profileCommendations.data.commendationNodeScoresByHash["1390663518"]);
            setSeasonPass(json.Response.characterProgressions.data["2305843009889894407"].progressions["982440978"].level)
          });
        }
        fetchData();
       },[]);

        return (
          <section>
            <div>
                <h1 id='andrew' className='text-center'>{gamertag}</h1>
               <img className='img-fluid' src={bungie + nameplate} alt='Image' />
               <p className='text-center'>Last logged in: {lastPlayedDateUpdate}</p>
               <p className='text-center'>Guardian Rank: <span className='font-bold'>{guardianRank}</span></p>
               <p className='text-center'>Season Pass Rank: <span className='font-bold'>{seasonPass}</span></p>
            </div>
            <div className='data_container tenpx_gap'>
              <p className='text-center '>Ally: <span className='font-bold'>{ally}</span></p>
              <p className='text-center'>Fun: <span className='font-bold'>{fun}</span></p>
              <p className='text-center'>Mastery: <span className='font-bold'>{mastery}</span></p>
              <p className='text-center'>leadership: <span className='font-bold'>{leadership}</span></p>
            </div>

          </section>
          )
      }
    

export default JoeName;