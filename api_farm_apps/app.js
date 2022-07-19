//var mhs = "wayan"
//var kelas = 12

//console.log(mhs, kelas)


//let mhs = "wayan"
//let kelas = 12

//console.log(mhs, kelas)

//const a = 12
//const b = 10
//const c = a +b

//console.log(c)
//====
const express = require('express')
const app = express()
const mongosee = require('mongoose')
const dbConfig = require('./config/dbConfig')

app.use(express.json())

app.use(express.urlencoded({
    extended: true

}))

mongosee.connect(dbConfig.mongoUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> {
   console.log("Berhasil Konek ke mongodb")

}).catch(err => {
   console.log(err)
})

app.get('/', function (req, res) {
  res.send('Selamat Datang')
})

// //https://localhost:3000/data-mahasiswa/20421092/wayan

// app.get('/data-mahasiswa/:npm/:nama', function (req, res) {
//     res.json({
//         npm: req.params.npm,
//         nama: req.params.nama
//     })
//   })
//   //https://localhost:3000/data-mahasiswa-query?npm=20421092&nama=Wayan

//   app.get('/data-mahasiswa-query', function (req, res) {
//     res.json({
//         npm: req.query.npm,
//         nama: req.query.nama
//     })
//   })

// //localhost:3000/data-mahasiswa/wayan_nurfidi/08444-query?alamat=Rumbia
//   app.post('/data-mahasiswa/:nama/:hp-query', function (req, res) {
//     res.json({
//         alamat: req.query.alamat,
//         npm: req.body.npm,
//         nama: req.params.nama,
//         agama: req.body.agama,
//         hobi: req.body.hobi,
//         kampus: req.body.kampus,
//         prodi: req.body.prodi,
//         jenis_kelamin: req.body.jenis_kelamin,
//         golongan_darah: req.body.golongan_darah,
//         hp: req.params.hp
//     })
//   })

// app.listen(3000)

app.use('/users', require('./routes/userRoutes'))
app.use('/kategori', require('./routes/kategoriRoutes'))
app.use('/barang', require('./routes/barangRoutes'))
app.use('/keranjang', require('./routes/keranjangRoutes'))
app.use('/transaksi', require('./routes/transaksiRoutes'))
app.use('/gambar-barang', express.static('public/images'));

const port = 3000
app.listen(port, () => {
  console.log('Server Berjalan di Port')
})

