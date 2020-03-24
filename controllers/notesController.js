const db = require('./../models/db.json');
const fs =  require('fs');

module.exports = {
    getNotes: (req, res) => {
        res.json(db);
    },
    createNotes: (req, res) => {
        const newNotes = req.body;
        const id = 0;
        // newNotes.id = id +1;
        db.push(newNotes);
        res.json(db);
        assignID();
        console.log(db);
    },
        // deletes the note when the trash button is clicked
        deleteNote: (req, res) => {
            console.log(req.params.id);
            const noteID = req.params.id;
            // let newID = 0;
            db.splice(noteID, 1);
            // fs.writeFileSync("./models/db.json", JSON.stringify(db), function (err) {
            //     if (err)
            //     throw err
            // });
            assignID();
            res.json(db);
            console.log(`Deleting note with ID ${noteID}`);
            // newNotes = newNotes.filter(currNoted => {
            //     return currNoted.id != noteID;
            // })
        
    }
}

function assignID() {
    for (i = 0; i < db.length; i ++) {
        db[i].id == i;
    }
};