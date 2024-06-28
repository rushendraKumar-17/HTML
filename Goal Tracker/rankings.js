let players = {
  top_active_players: [
    {
      name: "Cristiano Ronaldo",
      goals: 800,
      country: "Portugal",
      age: 38,
      club: "Manchester United",
      position: "Forward",
      img:"https://b.fssta.com/uploads/application/soccer/headshots/885.vresize.350.350.medium.14.png"
    },
    {
      name: "Lionel Messi",
      goals: 750,
      country: "Argentina",
      age: 34,
      club: "Paris Saint-Germain",
      position: "Forward",
      img:"https://toppng.com/uploads/preview/messi-fifa-17-11550717274zfcvhpnydw.png"
    },
    {
      name: "Robert Lewandowski",
      goals: 450,
      country: "Poland",
      age: 33,
      club: "Bayern Munich",
      position: "Forward",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEnQCrjphc0o__6Jutfpgf3ubpFDQKt43mvlkc-ev4Z0YqnyjuD2ZO_1yXTCxn_5unmZc&usqp=CAU"
    },
    {
      name: "Neymar Jr.",
      goals: 401,
      country: "Brazil",
      age: 30,
      club: "Paris Saint-Germain",
      position: "Forward",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfeHD5umdpA2LxY2tgzzfqe1HhOFLF2nc6EazAcYPYs0jurtnHY3fwYIG0c4PS0IdSug4&usqp=CAU"
    },
    {
      name: "Mohamed Salah",
      goals: 330,
      country: "Egypt",
      age: 29,
      club: "Liverpool",
      position: "Forward",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIUBCxjNx_DVB-m90-_hGyvU0DqYXHq9YJ7ZTVixKVg&s"
    },
    {
      name: "Karim Benzema",
      goals: 350,
      country: "France",
      age: 34,
      club: "Real Madrid",
      position: "Forward",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPJpaLrRm0iuyz9feR1lKdu0zDj_Qq3lvs6uznz1Bt-Q&s"
    },
    {
      name: "Harry Kane",
      goals: 290,
      country: "England",
      age: 29,
      club: "Tottenham Hotspur",
      position: "Forward",
      img:"https://w7.pngwing.com/pngs/201/247/png-transparent-harry-kane-2018-world-cup-england-national-football-team-england-tshirt-human-world.png"
    },
    {
      name: "Sergio Agüero",
      goals: 400,
      country: "Argentina",
      age: 33,
      club: "Barcelona",
      position: "Forward",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxrrmUE5MAudMunxKrDNgT0KyHmaGLDHRD3f77rzmpQ&s"
    },
    {
      name: "Luis Suárez",
      goals: 480,
      country: "Uruguay",
      age: 35,
      club: "Atlético Madrid",
      position: "Forward",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanH0SjI9kHbLdtqGydoV79TBbYNVjsnhpWDQKdhxa2A&s"
    },
    {
      name: "Edinson Cavani",
      goals: 390,
      country: "Uruguay",
      age: 35,
      club: "Manchester United",
      position: "Forward",
      img:"https://b.fssta.com/uploads/application/soccer/headshots/4041.vresize.350.350.medium.47.png"
    },
    {
      name: "Gonzalo Higuaín",
      goals: 350,
      country: "Argentina",
      age: 34,
      club: "Inter Miami CF",
      position: "Forward",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Xov9d0mPdA5LKL41URm0ZNyN4OiM-_30qYg04T4vTg&s"
    },
    {
      name: "Antoine Griezmann",
      goals: 280,
      country: "France",
      age: 30,
      club: "Barcelona",
      position: "Forward",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSqUxRSLeNG2651MG4PrIs2-GDjKzR2K9dZ0iVRlZ1HYj3Z9jUMgn0p5FoFFgW3NoGFSs&usqp=CAU"
    },
    {
      name: "Raheem Sterling",
      goals: 200,
      country: "England",
      age: 27,
      club: "Manchester City",
      position: "Forward",
      img:"https://imagecache.365scores.com/image/upload/f_png,w_250,h_250,c_limit,q_auto:eco,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/Athletes/415"
    },
    {
      name: "Kylian Mbappé",
      goals: 220,
      country: "France",
      age: 23,
      club: "Paris Saint-Germain",
      position: "Forward",
      img:"https://b.fssta.com/uploads/application/soccer/headshots/40670.vresize.350.350.medium.91.png"
    },
    {
      name: "Paulo Dybala",
      goals: 190,
      country: "Argentina",
      age: 28,
      club: "Juventus",
      position: "Forward",
      img:"https://img.uefa.com/imgml/TP/players/1/2016/324x324/250086333.jpg"
    },
    {
      name: "Eden Hazard",
      goals: 150,
      country: "Belgium",
      age: 31,
      club: "Real Madrid",
      position: "Forward",
      img:"https://e7.pngegg.com/pngimages/916/272/png-clipart-eden-hazard-2018-world-cup-fifa-18-2014-fifa-world-cup-eden-hazard-world-cup-2018-face-head-thumbnail.png"
    },
    {
      name: "Sadio Mané",
      goals: 180,
      country: "Senegal",
      age: 29,
      club: "Liverpool",
      position: "Forward",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmYVpLHfktOgBznnL178qh-hw4FGYKajsHgzNcW0JRg&s"
    },
    {
      name: "Toni Kroos",
      goals: 120,
      country: "Germany",
      age: 32,
      club: "Real Madrid",
      position: "Midfielder",
      img:"https://cdn.futwiz.com/assets/img/fifa20/careerfaces/182521.png"
    },
    {
      name: "Luka Modrić",
      goals: 100,
      country: "Croatia",
      age: 36,
      club: "Real Madrid",
      position: "Midfielder",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3I88-3zSyAOqV_UBRIbuUsJqGODbg1xErQ-Gd6eTlwn_OuOkUmajyYAQjxweCSMewTy0&usqp=CAU"
    },
    {
      name: "Virgil van Dijk",
      goals: 30,
      country: "Netherlands",
      age: 30,
      club: "Liverpool",
      position: "Defender",
      img:"https://cdn.futwiz.com/assets/img/fc24/faces/203376.png"
    },
  ],
};

let playersDiv = document.querySelector(".players");
players["top_active_players"].forEach((elem) => {
  playersDiv.innerHTML += `<div class="player">
    <div class="image"><img src=${elem.img} alt="" /></div>
    <div class="name">${elem.name}</div>
    <div class="age">${elem.age}</div>
    <div class="country">${elem.country}</div>
    <div class="club">${elem.club}</div>
    <div class="goals">${elem.goals}</div>
    <div class="position">${elem.position}</div>
  </div>`;
});
