let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';

mouseEvent = 'click'; // ✅ Válido
mouseEvent = 'dblclick'; // ✅ Válido
mouseEvent = 'mouseup'; // ✅ Válido
mouseEvent = 'mousedown'; // ✅ Válido
// mouseEvent = 'mouseover'; // ❌ Erro, pois 'mouseover' não é do tipo 'click'

// String literal types são um recurso do TypeScript que permite definir um tipo que pode ser apenas um conjunto específico de valores de string. 
// No exemplo acima, a variável mouseEvent só pode ser atribuída a um dos valores de string especificados ('click', 'dblclick', 'mouseup', 'mousedown'). 
// Isso é útil para garantir que uma variável só possa conter valores específicos, evitando erros de digitação e melhorando a legibilidade do código. 
// String literal types são frequentemente usados em conjunto com union types para criar tipos mais complexos e restritivos.