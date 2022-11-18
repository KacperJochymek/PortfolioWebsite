public class LodyMC {
    static String[] nazwy = {"wiśnia", "jabłko", "cytryna", "pomarańcza", "kiwi", "cola"};
    static int[][] tab = {
            {0,7,20,-1,12,23},
            {27,0,13,16,-1,5},
            {53,-1,0,25,27,6},
            {16,2,35,0,47,-1},
            {31,29,-1,18,0,4},
            {-1,24,1,17,5,0}
    };

    static int losuj(){
        Random rand = new Random();
        return rand.nextInt(6);
    }
    static boolean searchTable(int[] table, int x, int z)
    {
        for(int i = 0 ; i < z; i++){
            if(table[i] == x){
                return true;
            }
        }
        return false;
    }
    static void kolejnoscLodow(int losowania)
    {
        int[] najlepszaKolejnosc = new int[6];
        int[] kolejnosc = new int[6];
        int najlepszyWynik = 99999;
        int wynik = 0;
        int x;
        int h = 0;

        for(int i = 0 ; i <= losowania; i ++) {
            wynik = 0;
            kolejnosc = new int[6];
            for (int j = 0; j < 6; j++) {
                x = losuj();
                h = 0;
                if( j > 0) {
                    while (tab[kolejnosc[j - 1]][x] <= 0 || searchTable(kolejnosc,x,j)) {
                        x = losuj();
                        h++;
                        if (h > 10) {
                            break;
                        }
                    }
                }
                if (h < 10) {
                    kolejnosc[j] = x;
                    if (j > 0) {
                        wynik = wynik + tab[kolejnosc[j - 1]][kolejnosc[j]];
                    }
                } else {
                    wynik = 999999;
                    break;
                }
            }
            wynik = wynik + tab[kolejnosc[5]][kolejnosc[0]];

            if (wynik < najlepszyWynik) {
                najlepszyWynik = wynik;
                for (int k = 0; k < 6; k++) {
                    najlepszaKolejnosc[k] = kolejnosc[k];
                }
            }
        }
        if(najlepszyWynik > 9999){
            System.out.println("Nie udało się znaleźć rozwiązania");
        }else {
            System.out.println("Najkrótszy czas to: " + najlepszyWynik);
            System.out.print("Kolejniść: [ ");
            for (int l = 0; l < 6; l++) {
                System.out.print(nazwy[najlepszaKolejnosc[l]] + " ");
            }
            System.out.print("]");
        }

    }
    public static void main(String[] args) {
        kolejnoscLodow(50);
    }
}