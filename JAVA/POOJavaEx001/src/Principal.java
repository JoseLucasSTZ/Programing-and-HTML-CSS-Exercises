public class Principal {
    public static void main(String[] args) {
        
        //DECLARAÇÃO DOS OBJETOS ENVOLVIDOS
        
            Carro mustang = new Carro();
            mustang.setNome("Mustang");
            mustang.setVelocidade(120);
            Carro palio = new Carro();
            palio.setNome("Palio");
            palio.setVelocidade(50);
            Avenida BaraoRioBranco = new Avenida(10, 60);
            VerificaAcidente Lombada1 = new VerificaAcidente(BaraoRioBranco);

        //AGREGAÇÃO AOS OBJETOS
            Lombada1.verificaAcidente(palio.getNome(), palio.getVelocidade());
            Lombada1.verificaAcidente(mustang.getNome(),mustang.getVelocidade());
            BaraoRioBranco.setCarroIndo(palio);
            BaraoRioBranco.setCarroVindo(mustang);
            Policial Roberto = new Policial("Roberto");
            Roberto.aplicaMulta(Lombada1.getSinistro(),palio.getNome(), palio.getVelocidade(), BaraoRioBranco.getVelMaxima());
            Roberto.aplicaMulta(Lombada1.getSinistro(),mustang.getNome(), mustang.getVelocidade(), BaraoRioBranco.getVelMaxima());

        //APRESENTAÇÃO DOS DADOS

            System.out.println(" ");

       // System.out.println(mustang);

            System.out.println(" ");
            System.out.println(BaraoRioBranco);
            System.out.println(" ");

    }
}
