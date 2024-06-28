async function getScore(){
    let responseLeagues= await fetch(`https://apiv3.apifootball.com/?action=get_leagues&country_id=6&APIkey=a93a738cab1b843f6f89649df6822459ebf8b71934375a5fc32198aea4918487`);
    let scoreData = await responseLeagues.json();
    let responseTeams = await fetch(`https://apiv3.apifootball.com/?action=get_teams&league_id=302&APIkey=a93a738cab1b843f6f89649df6822459ebf8b71934375a5fc32198aea4918487`);
    let teams = await responseTeams.json();
    let standings = await fetch(`https://apiv3.apifootball.com/?action=get_standings&league_id=152&APIkey=a93a738cab1b843f6f89649df6822459ebf8b71934375a5fc32198aea4918487`);
    let rank = await standings.json();
    let fixtures = await fetch(`https://apiv3.apifootball.com/?action=get_events&from=2023-04-05&to=2023-04-05&league_id=152&APIkey=a93a738cab1b843f6f89649df6822459ebf8b71934375a5fc32198aea4918487`);
    let matches = await fixtures.json();
    let Statistics = await fetch(`https://apiv3.apifootball.com/?action=get_statistics&match_id=86392&APIkey=a93a738cab1b843f6f89649df6822459ebf8b71934375a5fc32198aea4918487`);
    let Stats = await Statistics.json();
    
}
let number = document.querySelector("#number");
let liveMatches = document.querySelector(".liveMatches");
let data;
let APIkey = "a93a738cab1b843f6f89649df6822459ebf8b71934375a5fc32198aea4918487";
async function socketsLive(){

    var APIkey='your_account_APIkey';
    var socket  = new WebSocket('wss://wss.apifootball.com/livescore?Widgetkey='+APIkey+'&timezone=+03:00');
    
      console.log('Connecting...');	
        socket.onopen = await function(e) {
        //   alert('Connected');
          console.log('Connected');
          console.log('Waiting data...');
      }		  
      socket.onmessage = await function(e) {
        //   alert( e.data );
          if (e.data) {
              var data =JSON.parse(e.data);
              console.log(data);
              number.innerHTML=data.length;
              liveMatches.innerHTML="";
              if(data.length===0){
                liveMatches.innerHTML=`<h1 class="noMatches">No live Matches currently</h1>`;
              }
            //   console.log(data[0].league_name);
            else{
              data.forEach((elem)=> {
                liveMatches.innerHTML+=`<div class="match">
                <h4>${elem.league_name}</h4>
                <div class="teams">
                    <div class="home">
                        <div class="logo-score">
                            <img src="${elem.team_home_badge}" alt="img" class="home-logo"> 
                            <div class="homeScore">${elem.match_hometeam_score}</div>
                        </div>
                        <h3>${elem.match_hometeam_name}</h3>
                    </div>
                    <div class="loading">
                        <h4>Live</h4>
                        <div class="load">
                            <div class="innerload"></div>
                        </div>
                    </div>
                    <div class="away">
                        <div class="logo-score">
                            <div class="homeScore">${elem.match_awayteam_score}</div>
                            <img src="${elem.team_away_badge}" alt="img" class="home-logo">
                        </div>
                        <h3>${elem.match_awayteam_name}</h3>
                    </div>
                </div>
            </div>`;
              });
            }

          } else {
              console.log('No new data!');
          }
      }
      // socket.onclose = await function(){
      //     socket = null;
      //     setTimeout(socketsLive, 5000);
      // }
      
  
  }
socketsLive();
getScore();