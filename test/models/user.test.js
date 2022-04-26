const User = require('./../../app/models/user')

describe("Unit Tests for User class", () => {
    test('Create an user object', () => {

     // Aqui invocas el codigo que vas a usar en tu app
    // Aqui escribimos el codigo que queremos usar tal cual
    
    //Requerimiento1
    //const user = new User(1, "carlogilmar", "Carlo", "Bio", "dateCreated", "lastUpdated")    
    
    //Requerimiento2
    const user = new User(1, "carlogilmar", "Carlo", "Bio")  

    // Aqui validas los resulados de ese codigo
    // esta es una comparacion que va igualar el valor de la izquierda con el valor de la derecha (valor esperado)
    //Validamos que este codigo funcione de la forma esperada
      expect(user.id).toBe(1);
      expect(user.username).toBe("carlogilmar");
      expect(user.name).toBe("Carlo");
      expect(user.bio).toBe("Bio");
     
      //Requerimiento 1
      //expect(user.dateCreated).toBe("dateCreated");
      //expect(user.lastUpdated).toBe("lastUpdated");
      
      //Requerimiento 2
      expect(user.dateCreated).not.toBeUndefined;// verifica que el valor no sea undefine
      expect(user.lastUpdated).not.toBeUndefined;
    });


  })