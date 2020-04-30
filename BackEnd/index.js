let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());

// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let staffs = [
    { 'id': 0, 'Day':'Mon,Tus,Wed','Firstname': 'Weerapat', 'Lastname': 'Jetowimut', 'Tel': '0987654321' },
    { 'id': 1, 'Day':'Thu,Fri','Firstname': 'Sarawut', 'Lastname': 'Junpan', 'Tel': '0812345678' },
    { 'id': 2, 'Day':'Sat,Sun','Firstname': 'benjawan', 'Lastname': 'keeyasoot', 'Tel': '0801234567'}
];

router.route('/staffs')
    // get all staffs
    .get((req, res) => res.json(staffs))
    // insert a new staff
    .post((req, res) => {
        var staff = {};
        staff.id = staffs.length > 0 ? staffs[staffs.length - 1].id + 1 : 0;
        staff.day = req.body.day
        staff.firstname = req.body.firstname
        staff.lastname = req.body.lastname
        staff.tel = req.body.tel
        staffs.push(staff);
        res.json({ message: 'staff created!' })
    })

router.route('/staffs/:staff_id')
    .get((req, res) => {
        let id = req.params.staff_id
        let index = staffs.findIndex(staff => (staff.id === +id))
        res.json(staffs[index])                   // get a staff
    })
    .put((req, res) => {                               // Update a staff
        let id = req.params.staff_id
        let index = staffs.findIndex(staff => (staff.id === +id))
        staffs[index].day = req.body.day;
        staffs[index].firstname = req.body.firstname;
        staffs[index].lastname = req.body.lastname;
        staffs[index].tel = req.body.tel;
        res.json({ message: 'staff updated!' + req.params.staff_id });
    })
    .delete((req, res) => {                   // Delete a staff
        // delete     staffs[req.params.staff_id]
        let id = req.params.staff_id
        let index = staffs.findIndex(staff => staff.id === +id)
        staffs.splice(index, 1)
        res.json({ message: 'staff deleted: ' + req.params.staff_id });
    })


app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(3000, () => console.log("Server is running"));