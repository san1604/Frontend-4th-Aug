function image(title, artist, date)
{
    this.title = title
    this.artist = artist
    this.date = date
}
function getImage(title,artist,date)
{
    return new image(title, artist, date)
}
let imageData = [
    {title: "Mona Lisa", artist:"Leonardo da Vinci", dateOfCreation: 1503},
    {title: "The Last Supper", artist:"Leonardo da Vinci", dateOfCreation: 1495},
    {title: "Starry Night", artist:"Vincent van Gogh", dateOfCreation: 1889},
    {title: "The Scream", artist:"Edvard Munch", dateOfCreation: 1893},
    {title: "Starry Night", artist:"Vincent van Gogh", dateOfCreation: 1889},
    {title: "Guernica", artist:"Pablo Picasso", dateOfCreation: 1937},
    {title: "The Kiss", artist:"Gustav Klimt", dateOfCreation: 1907},
    {title: "Girl With a Pearl Earring", artist:"Johannes Vermeer", dateOfCreation: 1665},
    {title: "Las Meninas", artist:"Diego Velázquez", dateOfCreation: 1656},
    {title: "The Creation of Adam", artist:"Michelangelo", dateOfCreation: 1512},
    {title: "The Birth of Venus", artist:"Sandro Botticelli", dateOfCreation: 1485}
]
let images1 = imageData.map(img => new image(img.title, img.artist, img.dateOfCreation));
let images2 = imageData.map(img => getImage(img.title, img.artist, img.dateOfCreation));

console.log(images2);

// function Image(title, artist, date) {
//     this.title = title;
//     this.artist = artist;
//     this.date = date;
// }

// function getImage(title, artist, date) {
//     return new Image(title, artist, date);
// }

// let imageData = [
//     {title: "Mona Lisa", artist:"Leonardo da Vinci", dateOfCreation: 1503},
//     {title: "The Last Supper", artist:"Leonardo da Vinci", dateOfCreation: 1495},
//     {title: "Starry Night", artist:"Vincent van Gogh", dateOfCreation: 1889},
//     {title: "The Scream", artist:"Edvard Munch", dateOfCreation: 1893},
//     {title: "Starry Night", artist:"Vincent van Gogh", dateOfCreation: 1889},
//     {title: "Guernica", artist:"Pablo Picasso", dateOfCreation: 1937},
//     {title: "The Kiss", artist:"Gustav Klimt", dateOfCreation: 1907},
//     {title: "Girl With a Pearl Earring", artist:"Johannes Vermeer", dateOfCreation: 1665},
//     {title: "Las Meninas", artist:"Diego Velázquez", dateOfCreation: 1656},
//     {title: "The Creation of Adam", artist:"Michelangelo", dateOfCreation: 1512},
//     {title: "The Birth of Venus", artist:"Sandro Botticelli", dateOfCreation: 1485}
// ];

// let images1 = imageData.map(img => new Image(img.title, img.artist, img.dateOfCreation));
// let images2 = images1.map(img => getImage(img.title, img.artist, img.date));

// console.log(images2);