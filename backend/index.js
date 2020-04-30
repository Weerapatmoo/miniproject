let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());

// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let staffs = [  { 'no': 0, 'day':'Mon,Tus,Wed','firstname': 'Weerapat', 'lastname': 'Jetowimut', 'tel': '0987654321' },
{ 'no': 1, 'day':'Thu,Fri','firstname': 'Sarawut', 'lastname': 'Junpan', 'tel': '0812345678' },
{ 'no': 2, 'day':'Sat,Sun','firstname': 'benjawan', 'lastname': 'keeyasoot', 'tel': '0801234567'}
               ];
router.route('/staffs')
    // get all staffs
    .get((req, res) => res.json(staffs))
    // insert a new staff
    .post((req, res) => {
    var staff = {};
    staff.no = staffs.length > 0 ? staffs[staffs.length - 1].no + 1 : 0;
    staff.firstname = req.body.firstname
    staff.lastname = req.body.lastname
    staff.day = req.body.day
    staff.tel = req.body.tel
    staffs.push(staff);
    res.json({ message: 'staffs created!' })
    })
router.route('/staffs/:staff_no')
    .get((req, res) => {
        let no = req.params.staff_no
        let index = staffs.findIndex(staff => (staff.no === +no))
        res.json(staffs[index])                   // get a staff
    })
    .put((req, res) => {                               // Update a bear
        let no = req.params.staff_no
        let index = staffs.findIndex(staff => (staff.no === +no))
        staffs[index].firstname = req.body.name;
        staffs[index].lastname = req.body.surname;
        staffs[index].day = req.body.day;
        staffs[index].tel = req.body.tel;
        res.json({ message: 'staff updated!' + req.params.staff_no });
    })
    .delete((req, res) => {                   // Delete a bear
        let no = req.params.staff_no
        let index = staffs.findIndex(staff => staff.no === +no)
        staffs.splice(index, 1)
        res.json({ message: 'staff deleted: ' + req.params.staff_no });
    })


app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(80, () => console.log("Server is running"));