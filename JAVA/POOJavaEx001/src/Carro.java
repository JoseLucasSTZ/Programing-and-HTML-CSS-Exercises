public abstract class  Carro {
    

    //ATRIBUTOS
        private int portas = 0;
        private String marca = "";
        private String motor = "";
        private boolean airbag = true;
        private int velocidade = 0;
        private int aceleracao = 0;

    //CONSTRUTORES

        public Carro() {
        }

        public Carro(int portas, String marca, String motor, boolean airbag, int velocidade, int aceleracao) {
            this.portas = portas;
            this.marca = marca;
            this.motor = motor;
            this.airbag = airbag;
            this.velocidade = velocidade;
            this.aceleracao = aceleracao;
        }


    //MÉTODOS ESPECIAIS
        
        

    //GETTERS E SETTERS

        public int getPortas() {
            return this.portas;
        }

        public void setPortas(int portas) {
            this.portas = portas;
        }

        public String getMarca() {
            return this.marca;
        }

        public void setMarca(String marca) {
            this.marca = marca;
        }

        public String getMotor() {
            return this.motor;
        }

        public void setMotor(String motor) {
            this.motor = motor;
        }

        public boolean isAirbag() {
            return this.airbag;
        }

        public boolean getAirbag() {
            return this.airbag;
        }

        public void setAirbag(boolean airbag) {
            this.airbag = airbag;
        }

        public int getVelocidade() {
            return this.velocidade;
        }

        public void setVelocidade(int velocidade) {
            this.velocidade = velocidade;
        }

        public int getAceleracao() {
            return this.aceleracao;
        }

        public void setAceleracao(int aceleracao) {
            this.aceleracao = aceleracao;
        }

    //toString

        @Override
        public String toString() {
            if (airbag = true){
                return
                    " Portas: " + getPortas() + "" +
                    ", Marca: " + getMarca() + "" +
                    ", Motor: " + getMotor() + "" +
                    ", Airbag: " + "Possui Airbag"+ "" +
                    ", Velocidade: " + getVelocidade() + "" +
                    ", Aceleracao: " + getAceleracao() + "";
            } else{
                return
                    " portas: " + getPortas() + "'" +
                    ", marca: " + getMarca() + "'" +
                    ", motor: " + getMotor() + "'" +
                    ", airbag: " + "Não possui Airbag"+ "'" +
                    ", velocidade: " + getVelocidade() + "'" +
                    ", aceleracao: " + getAceleracao() + "'";
            }
        }

        
}
