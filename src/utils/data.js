let notes = [
    {
        id: 1,
        title: "Babel",
        body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
    },
    {
        id: 2,
        title: "Functional Component",
        body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
    },
    {
        id: 3,
        title: "Modularization",
        body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
    },
    {
        id: 4,
        title: "Lifecycle",
        body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
    },
    {
        id: 5,
        title: "ESM",
        body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
    },
    {
        id: 6,
        title: "Module Bundler",
        body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
    },
]

function getNotes() {
    return notes.filter((note) => !note.archived);
}

function getNoteById(id) {
    if (!id) {
        return null;
    }

    return notes.find((note) => note.id === id);
}

function addNotes(note) {
    notes = [...notes, { id: +new Date(), createdAt: new Date(), archived: false, ...note }];
}

function editNote({id, body}) {
    const noteToEdit = notes.find((n) => n.id === id);
    if (noteToEdit) {
        noteToEdit.body = body;
    }
}

function deleteNotes(id) {
    notes = notes.filter((note) => note.id !== id);
}

function archiveNotes(id) {
    const note = notes.find((note) => note.id === id);
    if (note) {
        note.archived = true;
    }
}

function unarchiveNotes(id) {
    const note = notes.find((note) => note.id === id);
    if (note) {
        note.archived = false;
    }
}

function getArchiveNotes() {
    return notes.filter((note) => note.archived);
}

export { getNotes, getNoteById, addNotes, editNote, deleteNotes, archiveNotes, unarchiveNotes, getArchiveNotes };