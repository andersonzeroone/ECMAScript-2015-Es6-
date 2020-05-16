class users{
    constructor(email, password){
        this.isAdmin = false;
        
    }
}

class admin extends users{
    constructor(){
        super();
        this.isAdmin = true;
      
    }
}

const user1 = new users('test@gmail.com', 'password123');
const adm = new admin('drive@fmail.com','pass456');

console.log(user1.isAdmin);
console.log(adm.isAdmin);