exports.fieldValidator = (req, res, next) => {
req.check = ('names', 'El campo names es obligatorio')
      .notEmpty()
      .islength({
        min: 1,
        max: 20
      });
req.check = ('surname', 'El campo surname es obligatorio')
      .notEmpty()
      .islength({
        min: 1,
        max: 20
      });
req.check('email', 'El formato de su correo no es valido, debe contener @')
      .matchesmatches(/.+\@.+\..+/)
      .islength({
        min: 5,
        max: 15
      });
req.check('password', 'Debe ingresar su password').notEmpty();
req.check('message', 'Debe redactar su mensaje').notEmpty();

const errors = req.validationErrors();
 if (errors) {
    const firstError = errors.map(error => error.msg)[0];         //Capturamos los mensajes de errores
    return res.status(400).json({
      error: firstError
    });
  }

next();
};