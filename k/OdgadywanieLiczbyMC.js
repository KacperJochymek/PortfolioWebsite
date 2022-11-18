public class OdgadywanieLiczbyMC {

    public static void main(String[] args) {

        Random rand = new Random();
        int szukana = rand.nextInt(1001);
        int zakresgorny=1000;
        int zakresdolny=0;
        boolean nieznaleziono = true;
        int iloscprob=0;

        do {
            int srodkowa=(zakresgorny+zakresdolny)/2;

            System.out.println("Czy twoja liczba to: "+srodkowa+" ?");
            iloscprob++;
            if(szukana==srodkowa){

                System.out.println("Twoja liczba to: "+srodkowa);
                nieznaleziono=false;

            }else if(szukana>srodkowa)
            {
                System.out.println("za mala");
                zakresdolny=srodkowa;
            }else if(szukana<srodkowa)
            {
                System.out.println("za duza");
                zakresgorny=srodkowa;
            }
        }while(nieznaleziono);
        System.out.println("Liczbę znaleziono po "+iloscprob);
    }
}