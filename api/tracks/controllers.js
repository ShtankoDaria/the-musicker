const db = require("../db-connection");

const controllers = {
  getAll: (req, res) => {
    const sql = `SELECT * FROM tracks`;

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
    const sql = `SELECT * FROM tracks WHERE TrackId = '${id}'`;
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
    const newTrack = req.body;
    const sql = `INSERT INTO tracks (TrackId, Name, AlbumId, MediaTypeId, GenreId, Composer, Milliseconds, Bytes, UnitPrice)
        VALUES("${newTrack.TrackId}","${newTrack.Name}" ,"${newTrack.AlbumId}" ,"${newTrack.MediaTypeId}" ,"${newTrack.GenreId}" ,"${newTrack.Composer}" ,${newTrack.Milliseconds},${newTrack.Bytes},${newTrack.UnitPrice})`;
    console.log(newTrack);
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        console.log(err);
        return;
      }
      res.json("New track is added.");
    });
  },
  update: (req, res) => {
    // read row data from body
    const newTrack = req.body;
    const sql = `UPDATE tracks SET Name ='${newTrack.Name}',AlbumId="${newTrack.AlbumId}",MediaTypeId ="${newTrack.MediaTypeId}",GenreId= "${newTrack.GenreId}", Composer = "${newTrack.Composer}", Milliseconds =${newTrack.Milliseconds}, 
    Bytes = ${newTrack.Bytes}, UnitPrice =  ${newTrack.UnitPrice}     WHERE TrackId =${newTrack.TrackId}`;
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
    const sql = `DELETE FROM tracks WHERE TrackId = ${id}`;
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
