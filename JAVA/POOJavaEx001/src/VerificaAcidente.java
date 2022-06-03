public class VerificaAcidente {
    //ATRIBUTOS
        private Avenida Local;
        private boolean sinistro = false; 

    //CONSTRUTORES

        public VerificaAcidente(Avenida Local) {
            this.Local = Local;
        }

    //MÉTODOS ESPECIAIS

        public void verificaAcidente(int velocidade){
            if (velocidade >=100){
                this.sinistro=true;
                System.out.println("CRASH!");
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
