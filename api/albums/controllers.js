const db = require("../db-connection");

const controllers = {
  getAll: (req, res) => {
    const sql = `SELECT * FROM albums`;

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
    const sql = `SELECT * FROM albums WHERE AlbumId = ${id}`;
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
    const newAlbum = req.body;
    const sql = `INSERT INTO albums (Title, ArtistId)
        VALUES("${newAlbum.Title}","${newAlbum.ArtistId}")`;
    console.log(newAlbum);
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        console.log(err);
        return;
      }
      res.json("New album is added.");
    });
  },
  update: (req, res) => {
    // read row data from body
    const Id = req.params.id;
    const newAlbum = req.body;
    const sql = `UPDATE albums SET Title ='${newAlbum.Title}',ArtistId =${newAlbum.ArtistId} WHERE AlbumId = ${Id}`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json("Value is updated");
    });
  },
  delete: (req, res) => {
    const Id = req.params.id;
    const sql = `DELETE FROM albums WHERE AlbumId = ${Id}`;
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
