const selectDiasProduccion = document.getElementById('id-select-dias')
const btnCargarProduccion = document.getElementById('id-btn-cargar-produccion')
const btnPresentar = document.getElementById('id-btn-presentar-produccion')
const txtPresentar = document.getElementById('id-listado-produccion')
const btnProduccionTotal = document.getElementById('id-btn-produccion-total')
const txtProduccionTotal = document.getElementById('id-txt-produccion-total')
const btnMayorProduccion = document.getElementById('id-btn-mayor-produccion')
const txtMayorProduccion = document.getElementById('id-txt-mayor-produccion')
const btnMenorproduccion = document.getElementById('id-btn-menor-produccion')
const txtMenorProduccion = document.getElementById('id-txt-menor-produccion')
const btnPromedioSemanal = document.getElementById('id-btn-promedio-semanal')
const txtPromedioSemanal = document.getElementById('id-txt-promedio-semanal')
const btnsuperiorAlPromedio = document.getElementById('id-btn-superior-al-promedio')
const txtsuperiorAlPromedio = document.getElementById('id-txt-superior-al-promedio')
const btnProduccionCritica = document.getElementById('id-btn-produccion-critica')
const txtProduccionCritica = document.getElementById('id-txt-produccion-critica')
const btnProduccionRepetida = document.getElementById('id-btn-produccion-repetida')
const txtProduccionRepetida = document.getElementById('id-txt-produccion-repetida')

let vectorProduccion = []
const diasSemana = ['Lunes','Martes', 'Miercoles','Jueves','Viernes','Sabado','Domingo']

btnCargarProduccion.addEventListener('click', function (e){
    const dimension = selectDiasProduccion.value
    vectorProduccion = []
    cargarProduccion(dimension)
})

btnPresentar.addEventListener('click',function (e) {
    txtPresentar.value = vectorProduccion.join(', ')
})


btnProduccionTotal.addEventListener('click', function(e){
    const completo = produccioToptal()
    

    txtProduccionTotal.value = completo
})


btnMayorProduccion.addEventListener('click', function (e){
    const indice = mayorProduccion()

    const mayor  = vectorProduccion[indice]
    const dia = diasSemana[indice]

    txtMayorProduccion.value = 'Dia ;'+ dia + ' valor:' + mayor
})


btnMenorproduccion.addEventListener('click', function(e){
    const infer = menorProduccion()

    const menor = vectorProduccion [infer]
    const diamenor = diasSemana[infer]

    txtMenorProduccion.value = 'Dia; ' + diamenor + ' valor: ' + menor
})


btnPromedioSemanal.addEventListener('click', function(e){
    const promedio = promedioSemanal()
    

    txtPromedioSemanal.value = promedio
})

btnsuperiorAlPromedio.addEventListener('click', function(e){
    const superior = superirorAlPromedio()

    txtsuperiorAlPromedio.value = superior
})
btnProduccionCritica.addEventListener('click', function(e){
    const critico = produccionCritica()

    txtProduccionCritica.value = critico
})


btnProduccionRepetida.addEventListener('click', function(e){
    const repetido = produccionRepetida()

    txtProduccionRepetida.value = repetido
})

function cargarProduccion (dimension){
    for(let i = 0 ; i < dimension; i++) {
        const numAleatorio = Math.ceil(Math.random()* 1000)
        vectorProduccion[i] = numAleatorio
    }
}

function produccioToptal(){
     let suma = 0
     for(let i = 0; i < vectorProduccion.length; i++){
        suma = suma + vectorProduccion[i]
    }
    return suma
    }

function mayorProduccion(){
    let mayor = 0
    let index = 0
    for(let i = 0; i < vectorProduccion.length; i++){
        const produccion = vectorProduccion[i]
        if (produccion > mayor){
            mayor =  produccion
            index = i
        }
    }
    return index
}




    function menorProduccion(){
        let menor = vectorProduccion[0]
        let inferior = 0
        for(let i = 0; i < vectorProduccion.length; i++){
            const produccion = vectorProduccion[i]
            if(produccion< menor){
            menor = produccion
                inferior = i
            }
    }
    return inferior
    }

    function promedioSemanal(){
     let suma = 0
     for(let i = 0; i < vectorProduccion.length; i++){
        suma = suma + vectorProduccion[i]
    }
    let promedio = suma / vectorProduccion.length
    return promedio
    }


    function superirorAlPromedio(){
         let suma = 0
     for(let i = 0; i < vectorProduccion.length; i++){
        suma = suma + vectorProduccion[i]
    }
    let promedio = suma / vectorProduccion.length
    
    let contador = 0
    for(let i = 0 ; i < vectorProduccion.length; i++){
        if(vectorProduccion[i] > promedio){
        contador++
        }
    }
    return contador
    }


    function produccionCritica(){
         let suma = 0
     for(let i = 0; i < vectorProduccion.length; i++){
        suma = suma + vectorProduccion[i]
    }
    let promedio = suma / vectorProduccion.length
    
    let contador = 0
    let critico = 100
    for(let i = 0 ; i < vectorProduccion.length; i++){
        if(vectorProduccion[i] < critico){
        contador++
        }
    }
    return contador
    }


    function produccionRepetida(){
        for(let i = 0; i < vectorProduccion.length; i++){
            for(let j = i + 1; j < vectorProduccion.length; j++){
                if(vectorProduccion[i] === vectorProduccion[j]){
                    return 'Existen dias con produccion repetida'
                }
            }
        }
        return 'No existen dias con produccion repetida'
        
    }
    
    
