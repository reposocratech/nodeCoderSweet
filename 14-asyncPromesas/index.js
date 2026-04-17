//promesa: es un objeto que representa la terminación correcta o no de una accín asyncrona
//tiene dos estados : pendientes o resuelto (resuelto ok o rechazado)


//pendiente
// rechazada (reject)
// aceptada (resolve)

//fabrico la promesa

const mipromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("hacemos petición async");
        let error = true;
        if(!error){
            resolve({resultado: "todo ok"})
        }else{
            reject(new Error("algo ha fallado"))
        }
    }, 4000)
}) 


mipromesa
    .then(res=>console.log(res))
    .catch(err=>console.log(err))





