const { body } = require('express-validator/check')

exports.validate = (method) => {
  switch (method) {
    case 'createProd': {
     return [ 
        body('name', 'Nombre no fue ingresado').exists().isString(),
        body('cantidad', 'Cantidad no ingresada').isString(),
        body('caducidad', 'Caducidad no ingresada').isString(),
        body('precio', 'Precio no ingresado').isString(),
        body('invenID').isString()
       ]   
    }
    case 'createInv': {
        return [ 
           body('name', 'Nombre no ingresado').exists().isString(),
           body('creation', 'Fecha no registrada').optional(),
           body('description').isString(),
           body('uID').isString()
          ]   
       }
  }
}