public class VerificaAcidente {
    //ATRIBUTOS
        private Avenida Local;
        private boolean sinistro = false; 

    //CONSTRUTORES

        public VerificaAcidente(Avenida Local) {
            this.Local = Local;
        }

    //MÉTODOS ESPECIAIS

        public void verificaAcidente(String nome, int velocidade){
            if (velocidade >=100){
                this.sinistro=true;
                System.out.println(" ");
                System.out.println("------------------------------------");
                System.out.println(nome+ ": BATEU NO POSTE!");
                System.out.println("------------------------------------");
                System.out.println(" ");
            } else {
                System.out.println("------------------------------------");
                System.out.println(nome +": A LOMBADA ELETRÔNICA MOSTRA: "+ velocidade);
                System.out.println("------------------------------------");
                System.out.println(" ");
            }
        }

    //GETTERS AND SETTERS

        public Avenida getLocal() {
            return this.Local;
        }

        public void setLocal(Avenida Local) {
            this.Local = Local;
        }

        public boolean isSinistro() {
            return this.sinistro;
        }

        public boolean getSinistro() {
            return this.sinistro;
        }

        public void setSinistro(boolean sinistro) {
            this.sinistro = sinistro;
        }



    //toString

        @Override
        public String toString() {
            return 
                " Local do Acidente: " + getLocal();
    }
        
}
