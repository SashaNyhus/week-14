const data = [
  {
    title: "Luke",
    age: 19,
    homeworld: "Tattooine",
    destiny: "Jedi Master",
    worldColor: "Tan",
    population: 200000,
    url: "https://static3.srcdn.com/wordpress/wp-content/uploads/2019/12/Mark-Hamill-as-Luke-Skywalker-and-Rey-and-Kylo-Ren-in-The-Rise-of-Skywalker.jpg"
  },
  {
    title: "Leia",
    age: 19,
    homeworld: "Alderaan",
    destiny: "General",
    worldColor: "Turquoise",
    population: 2000000000,
    url: "https://am22.mediaite.com/tms/cnt/uploads/2017/08/leiatop1-650x574.jpg"
  },
  {
    title: "Han",
    age: 35,
    homeworld: "Corellia",
    destiny: "Be tragically cool",
    worldColor: "Grey",
    population: 3000000000,
    url: "https://upload.wikimedia.org/wikipedia/en/b/be/Han_Solo_depicted_in_promotional_image_for_Star_Wars_%281977%29.jpg"
  },
  {
    title: "Chewy",
    age: "100+",
    homeworld: "Kashyyk",
    destiny: "Eternal Sidekick :sob:",
    worldColor: "DarkGreen",
    population: 56000000,
    url: "data:image/jpeg;base64,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"
  },
  {
    title: "Obi-wan Kenobi",
    age: 55,
    homeworld: "Stieu-jon",
    destiny: "Protect and guide Luke",
    worldColor: "LightBlue",
    population: "0 because it's absurd that this would even be a place",
    url: "https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=960"
  },
  {
    title: "Darth Vader",
    age: 45,
    homeworld: "Mustafar",
    destiny: "Bring balance to the force",
    worldColor: "Red",
    population: 1,
    url: "https://fastly.syfy.com/sites/syfy/files/wire/legacy/rogue-one-darth-vader.jpg"
  },
];

export default data;