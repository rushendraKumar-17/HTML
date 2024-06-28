let players = {
    "top_active_players": [
      {
        "name": "Cristiano Ronaldo",
        "goals": 800,
        "country": "Portugal",
        "age": 38,
        "club": "Manchester United",
        "position": "Forward"
      },
      {
        "name": "Lionel Messi",
        "goals": 750,
        "country": "Argentina",
        "age": 34,
        "club": "Paris Saint-Germain",
        "position": "Forward"
      },
      {
        "name": "Robert Lewandowski",
        "goals": 450,
        "country": "Poland",
        "age": 33,
        "club": "Bayern Munich",
        "position": "Forward"
      },
      {
        "name": "Neymar Jr.",
        "goals": 401,
        "country": "Brazil",
        "age": 30,
        "club": "Paris Saint-Germain",
        "position": "Forward"
      },
      {
        "name": "Mohamed Salah",
        "goals": 330,
        "country": "Egypt",
        "age": 29,
        "club": "Liverpool",
        "position": "Forward"
      },
      {
        "name": "Karim Benzema",
        "goals": 350,
        "country": "France",
        "age": 34,
        "club": "Real Madrid",
        "position": "Forward"
      },
      {
        "name": "Harry Kane",
        "goals": 290,
        "country": "England",
        "age": 29,
        "club": "Tottenham Hotspur",
        "position": "Forward"
      },
      {
        "name": "Sergio Agüero",
        "goals": 400,
        "country": "Argentina",
        "age": 33,
        "club": "Barcelona",
        "position": "Forward"
      },
      {
        "name": "Luis Suárez",
        "goals": 480,
        "country": "Uruguay",
        "age": 35,
        "club": "Atlético Madrid",
        "position": "Forward"
      },
      {
        "name": "Edinson Cavani",
        "goals": 390,
        "country": "Uruguay",
        "age": 35,
        "club": "Manchester United",
        "position": "Forward"
      },
      {
        "name": "Gonzalo Higuaín",
        "goals": 350,
        "country": "Argentina",
        "age": 34,
        "club": "Inter Miami CF",
        "position": "Forward"
      },
      {
        "name": "Antoine Griezmann",
        "goals": 280,
        "country": "France",
        "age": 30,
        "club": "Barcelona",
        "position": "Forward"
      },
      {
        "name": "Raheem Sterling",
        "goals": 200,
        "country": "England",
        "age": 27,
        "club": "Manchester City",
        "position": "Forward"
      },
      {
        "name": "Kylian Mbappé",
        "goals": 220,
        "country": "France",
        "age": 23,
        "club": "Paris Saint-Germain",
        "position": "Forward"
      },
      {
        "name": "Paulo Dybala",
        "goals": 190,
        "country": "Argentina",
        "age": 28,
        "club": "Juventus",
        "position": "Forward"
      },
      {
        "name": "Eden Hazard",
        "goals": 150,
        "country": "Belgium",
        "age": 31,
        "club": "Real Madrid",
        "position": "Forward"
      },
      {
        "name": "Sadio Mané",
        "goals": 180,
        "country": "Senegal",
        "age": 29,
        "club": "Liverpool",
        "position": "Forward"
      },
      {
        "name": "Toni Kroos",
        "goals": 120,
        "country": "Germany",
        "age": 32,
        "club": "Real Madrid",
        "position": "Midfielder"
      },
      {
        "name": "Luka Modrić",
        "goals": 100,
        "country": "Croatia",
        "age": 36,
        "club": "Real Madrid",
        "position": "Midfielder"
      },
      {
        "name": "Virgil van Dijk",
        "goals": 30,
        "country": "Netherlands",
        "age": 30,
        "club": "Liverpool",
        "position": "Defender"
      }
    ]
  }
  
async function call(){
    // let data = await fetch("https://apiv3.apifootball.com/?action=get_events&from=2024-05-01&to=2024-05-16&league_id=152&APIkey=a93a738cab1b843f6f89649df6822459ebf8b71934375a5fc32198aea4918487");
    // let dataR = await data.json();
    // console.log(dataR);
    let img = document.querySelector(".image");
    players["top_active_players"].forEach((elem)=>{
        console.log(elem);
    })
    let name = "Cristiano Ronaldo";
    let d= await fetch(`https://apiv3.apifootball.com/?action=get_players&player_name=${name}&APIkey=a93a738cab1b843f6f89649df6822459ebf8b71934375a5fc32198aea4918487`);
    let dr = await d.json();
    console.log(dr);
    img.setAttribute("src",dr[0].player_image);
}
call();