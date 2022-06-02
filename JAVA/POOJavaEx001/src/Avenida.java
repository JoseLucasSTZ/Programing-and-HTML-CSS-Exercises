public class Avenida {
    
    //ATRIBUTOS
        private int extensao;
        private int velMaxima;
        private Carro carrosPassando;
        private Carro carroVindo;
        private Carro carroIndo;

    //CONSTRUTORES

        public Avenida() {
        }

        public Avenida(int extensao, int velMaxima) {
            this.extensao = extensao;
            this.velMaxima = velMaxima;
        }

    //MÉTODOS ESPECIAIS
/* 
        public double multa(){
            if (velMaxima) {
               
                return
            } else{
                return
            }
            
        }
*/
    //GETTERS AND SETTERS

        public int getExtensao() {
            return this.extensao;
        }

        public void setExtensao(int extensao) {
            this.extensao = extensao;
        }

        public int getVelMaxima() {
            return this.velMaxima;
        }

        public void setVelMaxima(int velMaxima) {
            this.velMaxima = velMaxima;
        }

        public Carro getCarrosPassando() {
            return this.carrosPassando;
        }

        public void setCarrosPassando(Carro carrosPassando) {
            this.carrosPassando = carrosPassando;
        }

        public Carro getCarroVindo() {
            return this.carroVindo;
        }

        public void setCarroVindo(Carro carroVindo) {
            this.carroVindo = carroVindo;
        }

        public Carro getCarroIndo() {
            return this.carroIndo;
        }

        public void setCarroIndo(Carro carroIndo) {
            this.carroIndo = carroIndo;
        }

    //toString

        @Override
        public String toString() {
            return 
                " Extensão da via " + getExtensao() + " Km, " +
                " Velocidade máxima permitida " + getVelMaxima() + " km/h, " +
                " Carros passando: " + getCarrosPassando() +
                " Carro vindo: " + getCarroVindo() + 
                " Carro indo: " + getCarroIndo() ;
        }

}
