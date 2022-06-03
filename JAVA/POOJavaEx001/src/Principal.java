public class Principal {
    public static void main(String[] args) {
        
        //DECLARAÇÃO DOS OBJETOS ENVOLVIDOS
        
            Carro mustang = new Carro();
            mustang.setNome("Mustang");
            Carro palio = new Carro();
            palio.setNome("Palio");
            Avenida BaraoRioBranco = new Avenida(10, 60);
           
        //AGREGAÇÃO AOS OBJETOS

            BaraoRioBranco.setCarroIndo(palio);
            BaraoRioBranco.setCarroVindo(mustang);
            VerificaAcidente Lombada1 = new VerificaAcidente(BaraoRioBranco);
            Policial Roberto = new Policial("Roberto");
            Roberto.aplicaMulta(Lombada1.getSinistro, velocidadeCarro, velMaxima);

        //APRESENTAÇÃO DOS DADOS

            System.out.println(" ");

       // System.out.println(mustang);

            System.out.println(" ");
            System.out.println(BaraoRioBranco);
            System.out.println(" ");

    }
}
