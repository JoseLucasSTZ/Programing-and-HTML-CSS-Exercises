import java.util.Random;

public class Policial {
    
    //ASSOCIAÇÃO

        Random geradorRandom = new Random();
    
    //ATRIBUTOS

        private int idade = geradorRandom.nextInt(60);
        private String nome; 

    //CONSTRUTORES

        public Policial(String nome) {        
            this.nome = nome;
        }

    //MÉTODOS ESPECIAIS

        public void aplicaMulta(boolean sinistro, int velocidadeCarro, int velMaxima){
            if (velocidadeCarro >= velMaxima || sinistro == true){
                System.out.println("------");
                System.out.println("O CONDUTOR FOI MULTADO");
                System.out.println("------");
            }
        }

    //GETTERS AND SETTERS

        public Random getGeradorRandom() {
            return this.geradorRandom;
        }

        public void setGeradorRandom(Random geradorRandom) {
            this.geradorRandom = geradorRandom;
        }

        public int getIdade() {
            return this.idade;
        }

        public void setIdade(int idade) {
            this.idade = idade;
        }

        public String getNome() {
            return this.nome;
        }

        public void setNome(String nome) {
            this.nome = nome;
        }


    //toString


        @Override
        public String toString() {
            return 
            " Nome do Policial " + getNome() +    
            ", Idade " + getIdade()
            ;
    }


    
}
