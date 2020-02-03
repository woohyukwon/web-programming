// Create a new database named blogger with a collection named articles
mongo --host mongodb:27017 blogger

db.articles.insert({
  author_name: "Liangyin Yu",
  email: "liangyin.yu@du.edu",
  creation_date: ISODate("2020-03-02"),
  text: "web programming"
})

db.articles.find()
