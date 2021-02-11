// aca va el detalle del item
// acá adentro debería ir el counter
// el más y el menos mandan eventos al padre "quiero restar/sumar uno" y se lo manda como prop
// el nro/stock que aparece al principio viene del padre, variable "initial" --> sería useState(initial)
// el total del stock viene del padre, variable "stock"
// counter es el hijo
// el padre sería toda la ventana
// el botón agregar al carrito es un hijo

// el botón agregar carrito tiene que cambiar a terminar compra 
// si llega al máximo de stock con el botón más

// {isBottonAdd ? <div>Agregar carrito</div : <h2>Terminar compra</h2>
// el botón terminar compra te debería llevar al checkout
// {seAgregoProducto ? <TerminarCompra/> : <AgregarAlCarrito/>} 

// el counter no hace nada, la lógica está en el padre
// initial empieza en uno y se lo manda al componente
// el onClick del menos y mas llama a setInitial

// el state del counter hay que mandárselo al padre.
// el padre va a manejar todos los states

// <ItemDetail setInitial=[setCounter] />

//