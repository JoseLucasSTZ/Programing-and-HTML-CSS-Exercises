public class Principal {
    public static void main(String[] args) {
        
        //DECLARAÇÃO DOS OBJETOS ENVOLVIDOS
        Ford mustang = new Ford();
        Fiat palio = new Fiat();
        Avenida BaraoRioBranco = new Avenida(10, 60);

        BaraoRioBranco.setCarroIndo(palio);
        BaraoRioBranco.setCarroVindo(mustang);

        //APRESENTAÇÃO DOS DADOS
        System.out.println(" ");
        System.out.println(mustang);
        System.out.println(" ");
        System.out.println(BaraoRioBranco);
        System.out.println(" ");

    }
}
