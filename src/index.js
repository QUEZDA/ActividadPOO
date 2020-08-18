import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

class Smartphone {
  constructor(gama, marca, camara) {
    this.gama = gama;
    this.marca = marca;
    this.camara = camara;
  }

  escoger() {
    console.log("escogiendo marca");
    console.log("modelo escogido");
    return this;
  }

  revisar() {
    console.log("revisando componentes...");
    console.log("terminando revision");
    return this;
  }

  empacar() {
    console.log("empacando smartphone...");
    console.log("listo para el envio");
    return this;
  }
}
const smartphoneGamaAlta = new Smartphone("Gama Alta", "xiaomi", "Camara 12mx");
console.log(smartphoneGamaAlta.escoger());
console.log(smartphoneGamaAlta.revisar());
console.log(smartphoneGamaAlta.empacar());
