// API Routes
app.get("/api/tables", function(req, res) {
    res.json(friends);
});

app.post("/api/friends", function(req, res) {
    friends.push(req.body);
    res.json(true);
});

module.exports = apiRoutes;
  