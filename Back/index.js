const server = require('./src/index.js');
const { conn } = require('./src/db.js');
const port = process.env.PORT || 3001
const {
  saveDogs,
    saveUsers,
    savePost,
    saveArticles,
} = require('../Back/src/handlers/saveData.js')

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(port, async () => {
    saveDogs(),
    saveUsers(),
    savePost(),
    saveArticles(),
  console.log(`%s listening at ${port}`); // eslint-disable-line no-console
  });
});
