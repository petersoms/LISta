/* EXERCICIO 1 - criar três classes de objetos



    1ª - Classe de herois da Marvel
    2ª - Classe de Vingadores
    3ª - Classe de Vingadores que morreram no cinema

    Métodos: Voar, Correr Muito Rapido, Bater, Lutar
    Atributos: teletrasporte, Se Regenerar, Super Força, Imortalidade

    construir atraves do metodo construtor.

    VA TE CATAR!!

    */
   class herois{
     Nome: string
     Metodo: string
     Atributos: string
     causadamorte:string

     constructor(m: string, n:string,  a:string){
        this.Metodo=m
        this.Atributos=a
        this.Nome=n
     }
     exibirDocs(): void{
        console.log(`ALERTA INDIVIDUO ESTA ${this.Metodo} em direção a base.
         Checando Banco de Dados....
         Acessando sistema da Lista de Herois....
         Bem vindo ${this.Nome} -Titulo:${this.Atributos} `)
     }
   }
  let Herois = new herois("Voando","Lanterna Verde- Hal Jordan","Primeiro Lanterna Humano" )
   Herois.exibirDocs()
  class Vingadores extends herois{
    
    exibirDocs(): void {
        console.log(`UM INDIVIDUO ESTA ${this.Metodo} EM DIREÇÃO DA BASE.
        CHECANDO IDENTIDADE....
        IDENTIDADE DE "VINGADOR" AUTORIZADA....
         A entrada de ${this.Nome} Foi autorizada
        Titulo:${this.Atributos} `)
    }
    
   }
   let vingadores = new Vingadores("Voando","Thor","Deus do Trovão" )
    vingadores.exibirDocs()

   class VingadoresArrastaPraCima extends herois{

    
    superconstructor(m: string, n:string,  a:string, ){
        this.Metodo=m
        this.Atributos=a
        this.Nome=n
      

     }
   
     exibirDocs(): void {
        console.log(`HEROI GRAVEMENTE DURANTE${this.Metodo}.
        CHECANDO IDENTIDADE....
        IDENTIDADE DE "VINGADOR" RECONHECIDA....
         Os restos de ${this.Nome} foram reconhecidos 
         Titulo: Inut....(atualizando titulo para devida atribuição)....${this.Atributos}
        enviado noticia para entes queridos e familia junto da lista de preparos para  honrarias finais... `)

    }


   

   }
   let VAPC = new VingadoresArrastaPraCima("BATALHA CONTRA THANOS","Homem de Ferro","Heroi do Universo")
    VAPC.exibirDocs()