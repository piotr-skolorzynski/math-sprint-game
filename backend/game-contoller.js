const getGames = (_1, res, _2) => {
  res.status(200).json([
    {
      id: "1",
      title: "10 Questions",
      questionNumber: 10,
      bestScore: 30.0,
    },
    {
      id: "2",
      title: "25 Questions",
      questionNumber: 25,
      bestScore: 10.0,
    },
    {
      id: "3",
      title: "50 Questions",
      questionNumber: 50,
      bestScore: 10.0,
    },
    {
      id: "4",
      title: "99 Questions",
      questionNumber: 99,
      bestScore: 10.0,
    },
  ]);
};

exports.getGames = getGames;
