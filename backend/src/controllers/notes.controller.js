const notesCtrl = {};

const Note = require('../models/note');

notesCtrl.getNotes = async (req, res) => {
    const notesList = await Note.find();
    // res.json({message : `${req.method} - Request`});
    res.json(notesList);
};

notesCtrl.createNote = async (req, res) => {
    // console.log(req.body); // estos son los datos que enviamos desde la pagina
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author: author
    });
    await newNote.save();
    // res.json({message : `${req.method} - Request`});
    res.json({message : `Nota guardada.`});
};

notesCtrl.getNote = async (req, res) => {
    // res.json({
    //     message : `${req.method} - Mostrando la nota con id: ${req.params.id}`,
    //     id : req.params.id,
    //     titulo : "First Note",
    //     texto : "probando"
    // })
    const note = await Note.findById(req.params.id);
    res.json(note);
};

notesCtrl.updateNote = async (req, res) => {
    // res.json({message : `${req.method} - Actualizando la nota de id: ${req.params.id}`})
    const { title, content, author } = req.body;
    await Note.findByIdAndUpdate(req.params.id, {
        title : title,
        content : content,
        author: author
    });
    res.json({message : 'Nota actualizada'});
};

notesCtrl.deleteNote = async (req, res) => {
    // res.json({message : `${req.method} - Eliminando la nota de id: ${req.params.id}`})
    await Note.findByIdAndDelete(req.params.id);
    res.json({message : 'Nota eliminada'});
};

notesCtrl.notFound = (req, res) => {
    res.json({message : `La ruta ${req.url} aun no ha sido asignada con el método ${req.method}.`});
};

module.exports = notesCtrl;