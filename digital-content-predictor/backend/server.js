const app = require('./app/app');



const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {
  console.log(`D.content API running on http://localhost:${PORT}`);
});
