document.addEventListener('DOMContentLoaded', () => {
    
    const pantalla = document.getElementById('resultado');
    const botones = document.querySelectorAll('.boton')
    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            
            pantalla.value = validarEvento(boton.textContent, pantalla.value)

        });
    });
})

let texto=''

function validarEvento(boton, contenido){

        console.log(boton);
        
        if (boton === 'C'){
            texto=''
        }
        else if(boton === '='){
            try{

            texto=eval(contenido)
            console.log(contenido);
            
        }

            catch (error){
                texto = 'error'
                console.log('Se produjo un error');
            }
        }
        else if(boton==='←'){
            texto=texto.slice(0, -1)

        }
        else if (boton === '+' || boton === '-' || boton === '*' || boton === '/') {
        texto += boton;        
        return contenido
             
    }
        
        
        else texto+=boton
        
        return texto
        
        
    }
    
