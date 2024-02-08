const notesCtrl = {};

notesCtrl.getNotes = (req, res) => {res.json({message : `${req.method} - Request`});};

notesCtrl.createNote = (req, res) => {res.json({message : `${req.method} - Request`});};

notesCtrl.getNote = (req, res) => {
    res.send({
        message : `${req.method} - Mostrando la nota con id: ${req.params.id}`,
        id : req.params.id,
        titulo : "First Note",
        texto : "probando"
    })
};

notesCtrl.updateNote = (req, res) => {res.send({message : `${req.method} - Actualizando la nota de id: ${req.params.id}`})};

notesCtrl.deleteNote = (req, res) => {res.send({message : `${req.method} - Eliminando la nota de id: ${req.params.id}`})};

notesCtrl.notFound = (req, res) => {res.send({message : `La ruta ${req.url} aun no ha sido asignada con el método ${req.method}.`});};

module.exports = notesCtrl;