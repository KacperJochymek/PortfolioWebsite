public class OdgadywanieLiczbyDZ
{
    static int krok =0;
    static int liczba;

    static void znajdz(int a, int b)
    {
        krok++;
        int srodek = (a+b)/2;

        if (srodek==liczba)
        {
            System.out.println("Zaproponowano:"+srodek+"za mala");
        }else
            if (liczba<srodek)
            {
                System.out.println("zaproponowano: "+srodek + "za duza");
                System.out.println("przedzial: "+a+" "+(srodek -1));
                znajdz(a, srodek-1);
            }
            if (srodek<liczba)
            {
                System.out.println("Zaproponowano: "+ srodek + " za mala");
                System.out.println("przedział: "+ (srodek +1 )+" "+ b);
                znajdz(srodek+1,b);
            }
    }

    public static void main(String[] args)
    {
        System.out.println("Podaj liczbe z przedzialu 0 - 1000");
        BufferedReader klaw = new BufferedReader(new InputStreamReader(System.in));

        try{
            liczba = Integer.parseInt(klaw.readLine());
        }catch(IOException ex){
            System.out.println("błąd");
        }

        if (liczba<0 || liczba > 1000)
        {
            System.out.println("Podales liczbe z poza przedziału");
            System.exit(0);
        }
        znajdz(0,1000);
    }
}