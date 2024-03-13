const { v4: uuidv4 } = require('uuid');

let users = [
    {id: 1 , nama:'fadli', email:'riansyahfadli12@gmail.com'},
    {id: 2 , nama:'hahaha', email:'haha@gmail.com'}
]

module.exports = {
    index: (req, res)=> {
      res.render('pages/user/index', {users: users})
    },
    show: (req, res) => {
        const id = req.params.id
        const data = users.filter(user =>{
            return user.id == id
        } )
        res.render('pages/user/show', {user: data})
    },
    create: (req, res) => {
        res.render('pages/user/create',{})
    },
     store: (req, res) => {
        users.push({
            id: uuidv4() ,
            nama: req.body.nama,
            email: req.body.email,
        });
        console.log(users)
        res.redirect('/users')
    },
    update: (req, res) => {
        const id = req.params.id;
        users.filter(user => {
            if(user.id == id){
                user.id = req.body.id
                user.nama = req.body.nama
                user.email = req.body.email
            }
            return users
        })
        res.json({
            status: true,
            data: users,
            message: 'data berhasil diedit',
            method: req.method,
            url: req.url
        })
    },
    delete: (req, res) => {
        const id = req.params.userId
        users = users.filter(user => user.id != id)
        
         res.json({
             status: true,
             data: users,
             message: 'data berhasil dihapus',
             method: req.method,
             url: req.url
         })
    }
}