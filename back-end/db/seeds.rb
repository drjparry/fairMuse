User.create(id: 0, email:'admin@gmail.com', password: '12345678', balance: 100)
Track.create(name: "default", genre: "Rock", file: "", id:2, artist_id: 1)
Track.create(name: "Yan-Yi's song", genre: "Electro", file: "", id: 1, artist_id: 1)
Track.create(name: "Another song", genre: "Electro", file: "", id: 3, artist_id: 2)
Artist.create(email:'artist@gmail.com', password: '12345678', balance: 0)
Artist.create(email:'artist2@gmail.com', password: '12345678', balance: 0)