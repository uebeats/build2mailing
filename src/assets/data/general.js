/**
 * En general.js puedes ingresar información importante del newsletter y que puede ser usada en la plantilla de forma global.
 * Por ejemplo: Template, titulo, marcaje, legal, etc.
 */

let general = {
  template: 1,
  title: "Mailing Title",
  marker: "marcaje_mailing_xxxxxx",
  source: "email",
  medium: "mailing",
  legal: "Aplican condiciones disponibles en cada cupón. El cupón debe ser activado para participar de la promoción respectiva. Los puntos serán abonados a más tardar 10 días hábiles a contar del último día de vigencia del cupón.",
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com'
  }
};

module.exports = general;