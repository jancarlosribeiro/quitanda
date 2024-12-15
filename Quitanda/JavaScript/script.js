const inicioPrograma = Number(prompt(`
    ======== Bem-Vindo =========
        O que deseja comprar?
    ============================
        Selecione uma opção:
    ____________________________    
    [1] - Maracuja
    [2] - Tomate
    [3] - Cupuacu
    [4] - Pitaya
    [5] - Mamona
    ____________________________
    `))

    function comprarMaracuja() {
        var resultado = 0
        alert("Preço do maracuja é R$1,30 a unidade, a partir de 12 unidades o preço é R$1,00")
        var qtdMaracuja = Number(prompt("Quantos Maracujás você deseja comprar?"))
        /* var precoUm = 1.30
        var calculoMaracuja = qtdMaracuja  */
        if (qtdMaracuja >= 12) {
            resultado = qtdMaracuja * 1
            /* precoUm = 1 */
            alert(`Você comprou ${qtdMaracuja} e saiu por ${resultado.toLocaleString('pt-br', 
                {
                    style: 'currency',
                    currency: 'BRL',
                }
            )}`)
        }else {
            resultado = qtdMaracuja * 1.30
            alert(`Você comprou ${qtdMaracuja} maracujás e saiu por ${resultado.toLocaleString('pt-br', 
                {
                    style: 'currency',
                    currency: 'BRL',
                }
            )}`)}
    }
    function comprarTomate() {
        resultado = 0
        var qtdTomate = Number(prompt("Quantos Tomates você deseja comprar?"))
        if (qtdTomate >= 2) {
            var resultado = qtdTomate * 6.99
            alert(`Você comprou ${qtdTomate} e saiu por ${resultado}`)
        }else {
            resultado = qtdTomate * 8.55
            alert(`Você comprou ${qtdTomate} Tomate e saiu por ${resultado}`)
        }
        
    }
    function comprarCupuacu() {
        alert("Você tem 3 opções de Manga: [1] Redondo R$5,49   [2] Mamorama R$10,00   [3] Mamau R$2,99")
    }
switch (inicioPrograma) {
    case 1:
        comprarMaracuja()
        break;
    case 2:
        comprarTomate()
        /* O KG do Tomate é de R$8,55, a partir de 2KG sai por R$6,99 */
        alert("")
        break;
    case 3:
        comprarCupuacu()
        break;
    case 4:
        alert("Você escolheu = Pitaya! XD")
        break;
    case 5:
        alert("Você escolheu = Mamona! XD")
        break;

    default:
        ("Essa opção não existe!!! >:( ")
        break;
}