const News = require("../model/news");
const SavedNews = require("../model/savedNews");

exports.getNews = (req, res, next) => {
  News.find()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

exports.postNews = (req, res, next) => {
  const bodyItem = req.body;
  bodyItem.map((item) => {
    const news = new News({
      title: item.title,
      description: item.description,
      content: item.content,
    });
    news
      .save()
      .then((result) => res.json({ message: "posted to db" }))
      .catch((err) => console.log(err));
  });
};

exports.saveNews = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const description = req.body.description;
  const savedNews = new SavedNews({
    title: title,
    content: content,
    description: description,
  });
  savedNews
    .save()
    .then((result) => res.json({ message: "saved to db" }))
    .catch((err) => console.log(err));
};

exports.getSavedNews = (req, res, next) => {
  SavedNews.find()
    .then((result) => res.json(result))
    .catch((err) => err);
};
