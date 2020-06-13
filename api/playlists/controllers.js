const db = require("../db-connection");

const controllers = {
  getAll: (req, res) => {
    const sql = `SELECT * FROM playlists`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }

      res.json(rows);
    });
  },
  getOne: (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM playlists WHERE PlaylistId = '${id}'`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json(rows);
    });
  },
  create: (req, res) => {
    // read row data from body
    const newPlaylist = req.body;
    const sql = `INSERT INTO playlists (PlaylistId, Name)
        VALUES("${newPlaylist.PlaylistId}","${newPlaylist.Name}")`;
    console.log(newPlaylist);
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        console.log(err);
        return;
      }
      res.json("New playlist is added.");
    });
  },
  update: (req, res) => {
    // read row data from body
    const newPlaylist = req.body;
    const sql = `UPDATE playlists SET Name ='${newPlaylist.Name}' WHERE PlaylistId =${newPlaylist.PlaylistId}`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json("Value is updated");
    });
  },
  delete: (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM playlists WHERE PlaylistId = ${id}`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json("Value is deleted");
    });
  },
};

module.exports = controllers;
