public class ResztaMC {

    public static void main(String[] args) throws IOException {
        Random los = new Random();
        final int [] MONETY = {500,200,100,50,20,10,5,2,1};
        final int [] L = {5,0,0,0,0,0,0,0,0,0,13};
        int [] zliczaj = new int[MONETY.length];
        final int LIMIT_WYDYWANY_MONET = 1000;
        final int LICZBA_LOSOWAN = 100;
        int index_monety  = 0;
        int minLiczbaWydanychMonet = LIMIT_WYDYWANY_MONET;
        int[] wydaneMonety = new int [LIMIT_WYDYWANY_MONET];
        int[] minWydaneMonety = new int[LIMIT_WYDYWANY_MONET];
        int moneta, zl ,gr, r = 0;
        zl = 15;
        gr = 13;
        r = zl * 100 + gr;
        int liczbaWydanychMonet = 0;

        while (r > 0 && liczbaWydanychMonet < LIMIT_WYDYWANY_MONET) {
            moneta = MONETY[los.nextInt(MONETY.length)];
            if (r >= moneta && L[index_monety] > 0) {
                wydaneMonety[liczbaWydanychMonet] = moneta;
                r = r - moneta;
                zliczaj[index_monety]++;
                liczbaWydanychMonet++;
                L[index_monety]--;
            }else{
                index_monety++;
            }

        }

        if (liczbaWydanychMonet < minLiczbaWydanychMonet) {
            minLiczbaWydanychMonet = liczbaWydanychMonet;
            for (int j = 0; j < liczbaWydanychMonet; j++) {
                minWydaneMonety[j] = wydaneMonety[j];
            }
        }
        if(minLiczbaWydanychMonet < LIMIT_WYDYWANY_MONET){
            System.out.println("Reszta");
            for(int j = 0 ; j < minLiczbaWydanychMonet ; j++){
                System.out.print(minWydaneMonety[j] / 100.0 + " ");
            }
        }else{
            System.out.println("Nie znaleziono rozwiązania");
        }

        System.out.println("Nominał \t Ilość");
        for(int j = 0; j < MONETY.length ; j++){
            if(zliczaj[j] > 0)
                System.out.print(MONETY[j]/ 100.0 + " \t\t " + zliczaj[j]);
        }

        if(r>0) {
            System.out.println(" NO I CHUJ NIE DOSTANMIESZ RESZTY " +
                    "" + r / 100.0 + " zł");
        }

    }
}