//FÓRMULA E INDICACIONES PARA CIFRAR
const cipher = {
    encode: (offset, string,) => {
      let resultado = "";
      let mensaje = "";
      for (let i = 0; i < string.length; i++) {
        //Fórmula letras mayúsculas
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
          mensaje = ((string.charCodeAt(i) - 65 + parseInt(offset)) % 26) + 65;
        }
  
        //Fórmula letras minúsculas
        else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
          mensaje = ((string.charCodeAt(i) - 97 + parseInt(offset)) % 26) + 97;
        }
  
        //Espacio en el Número 32 del Código ASCII
        else if (string.charCodeAt(i) === 32) {
          mensaje = 32;
        }
  
        //Agregar números del Código ASCII
        else if (string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) {
          mensaje = ((string.charCodeAt(i) - 57 + parseInt(offset)) % 10) + 57;
        }
  
        resultado += String.fromCharCode(mensaje);
      }
  
      return resultado;
  
    },
  
  
    //FÓRMULA E INDICACIONES PARA DESCIFRAR
    decode: (offset, string) => {
      let resultado = "";
      let mensaje = "";
      for (let i = 0; i < string.length; i++) {
        //Fórmula letras mayúsculas
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
          mensaje = ((string.charCodeAt(i) - 90 - parseInt(offset)) % 26) + 90;
        }
  
        //Fórmula letras minúsculas
        else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
          mensaje = ((string.charCodeAt(i) - 122 - parseInt(offset)) % 26) + 122;
        }
  
        //Espacio en el Número 32 del Código ASCII
        else if (string.charCodeAt(i) === 32) {
          mensaje = 32;
        }
  
        //Agregar números del Código ASCII
        else if (string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) {
          mensaje = ((string.charCodeAt(i) - 57 - parseInt(offset)) % 10) + 57;
        }
  
        resultado += String.fromCharCode(mensaje);
      }
  
      return resultado;
  
    }
  }
  
  export default cipher;