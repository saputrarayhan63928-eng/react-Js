import { useState } from "react";

function MataUangInput({ Uang, onAmountChange, TypeDuit }) {
  const currencyNames = {
    usd: "Dollar",
    idr: "Rupiah"
  };
  return (
    <fieldset>
      <legend>Masukkan jumlah dalam {currencyNames[TypeDuit]}:</legend>
      <input
        value={Uang}
        onChange={(e) => onAmountChange(e.target.value)}/>
    </fieldset>
  );
}

function toIDR(usd) {
  return usd * 16000;
}

function toUSD(idr){
    return idr / 16000;
}

function tryConvert(Uang, convert) {
    const input = parseFloat(Uang);
    if (Number.isNaN(input)){
        return ``;
    }
    const output = convert (input);
    const rounded = Math.round (output * 1000) / 1000;
    return rounded.toString();
}

function DuitConverter(){
    const [Uang, setUang] = useState(``);
    const [TypeDuit, setTypeDuit] = useState(`usd`);

    const handleUSDChange = (Duit) => {
        setUang(Duit);
        setTypeDuit(`usd`);
    }

    const handleIDRChange = (Duit) => {
        setUang(Duit);
        setTypeDuit(`idr`);
    }

    const idr = TypeDuit === 'usd' ? tryConvert(Uang, toIDR) : Uang;
    const usd = TypeDuit === 'idr' ? tryConvert(Uang,toUSD) : Uang;

    return(
        <>
        <div>
        <h1>Mengubah Mata Uang </h1>
        <MataUangInput 
            TypeDuit="idr"
            Uang={idr}
            onAmountChange={handleIDRChange}
        />
        <MataUangInput
        TypeDuit="usd"
        Uang={usd}
        onAmountChange={handleUSDChange}
        />
        <p>Nilai IDR : {idr}</p>
        <p>Nilai USD : {usd}</p>
        </div>
        </>
    )
}

export default DuitConverter