const functionfile = require("./function");
const fs = require("fs");
const readStream = fs.createReadStream("./content/blog.txt", {
  encoding: "utf-8",
});
//const writeStream = fs.createWriteStream("./content/blog1.txt");
const writeStream = fs.createWriteStream("./content/blog2.txt");
console.log("========Arithmetic Functions===========");
const movies = require("./movie");
const sum = functionfile.addfunction(3, 2);
console.log("the addition of num is:" + " " + sum);
const subt = functionfile.subfunction(3, 2);
console.log("the subtraction of num is" + " " + subt);
const div = functionfile.divfunction(10, 5);
console.log("the division of num is" + " " + div);
console.log("========Printing The Movies===========");
console.log("the movies are:" + " " + JSON.stringify(movies));
console.log("the movies are.......");
console.log(movies);
//console.log("the movies are:" + " " + movies);
//to add movie:
const movie = [
  {
    id: 103,
    name: "Cindrella",
  },
  {
    id: 104,
    name: "Princess",
  },
];
movies.push(movie);
console.log("========adding===========");
console.log(movies);
//to find movie:
const findid = 100;
const findMovie = movies.find(function (m) {
  return m.id === findid;
});
if (!findMovie) {
  console.log(findid, "not found");
} else {
  console.log(findMovie, "movie found");
}
// to update movies:
const updateId = 101;
const movieName = "Change Into Matrix";
const movieIndex = movies.findIndex(function (m) {
  return m.id === updateId;
});

console.log(movieIndex);
if (movieIndex == -1) {
  console.log(updateId, "not found");
} else {
  movies[movieIndex]["name"] = movieName;
  console.log("After updating");
  console.log(movies);
}
//to Delete movies:
const delteId = 102;
const movieIndexToDel = movies.findIndex(function (m) {
  return m.id === delteId;
});
console.log("========deleting===========");
if (movieIndexToDel == -1) {
  console.log(delteId, "not found");
} else {
  movies.splice(movieIndexToDel, 1);
  console.log("splicing the Id:", delteId);
  console.log(movies);
}
// learning time out function
setTimeout(() => {
  console.log("in the time out function");
  clearInterval(int);
}, 3000);
const int = setInterval(() => {
  console.log("in the interval");
}, 1000);
//reading file
fs.readFile("./content/content1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});
//writing file
fs.writeFile("./content/content1.txt", "hello Gayathri", () => {
  console.log("file written");
});
fs.writeFile("./content/content2.txt", "hello Gayathri Devi", () => {
  console.log("file written");
});
//directories
if (!fs.existsSync("./new_assets")) {
  fs.mkdir("./new_assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./new_assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}
//Streams
// readStream.on("data", (chunk) => {
//   console.log("===New chunk===");
//   console.log(chunk);
//   writeStream.write("\nNew Chunk\n");
//   writeStream.write(chunk);
// });
//piping:
readStream.pipe(writeStream);
