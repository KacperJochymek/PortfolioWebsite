public class ResztaAZ3
{
    public static void main(String[] args) throws IOException
    {
        InputStreamReader str = new InputStreamReader(System.in);
        BufferedReader wejscie = new BufferedReader(str);
        String tekst;

        final int[]M = {500,200,100,50,20,10,5,2,1};
        final int[] L = {1,   2,   0,   7,  2,  2,  5, 2, 10};
        int zl, gr, r, i =0;

        int [] zliczaj = new int[M.length];

        System.out.println("Podaj reszte ...");
        System.out.println("zlotych: ");

        tekst = wejscie.readLine();
        zl = Integer.parseInt(tekst);

        System.out.println("groszy: ");
        tekst = wejscie.readLine();
        gr = Integer.parseInt(tekst);

        System.out.println("Reszta: ");
        r = zl * 100 + gr;

        while(r>0 && i<M.length)
        {
            if (r>=M[i] && L[i]>0)
            {
                System.out.println(M[i]/100.0 + " ");
                zliczaj[i]++;
                r=r-M[i];
                L[i]--;
            }
            else
            {
                i++;
            }
            System.out.println();
            System.out.println("\n Wydane monety: \n"+ "nominal \t liczba monet");

            for (int j=0; j<M.length; j++)
                System.out.println(M[j]/100.0 + "\t" + zliczaj[j]);

            if (r>0)
                System.out.println("Nie mozna wydac calej reszty! Zostalo: "+ r/100.0 + "zl");
        }
    }
}