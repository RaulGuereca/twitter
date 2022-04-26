class User {
    //Requerimiento 1
    //constructor(id, username, name, bio, dateCreated, lastUpdated){
       
    //Requerimiento 2    
    constructor(id, username, name, bio){     
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio

       // Requerimiento 1
       // this.dateCreated = dateCreated
       // this.lastUpdated = lastUpdated

       // Requerimiento 2
        this.dateCreated = new Date()
        this.lastUpdated = new Date()
    }
}

module.exports = User