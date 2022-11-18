public class PlecakDyn
{
    final static int N=6;
    final static int MAX_V = 10;

    final static int []V = {6,2,3,2,3,1};
    final static int []W = {6,4,5,7,10,2};

    public static void main(String[] args)
    {
        int [][] tab = new int[N][MAX_V+1];

        for (int v =0; v<=MAX_V; v++)
        {
            if (v<V[0])tab [0][v] =0;
            else tab [0][v] = W[0];
        }

        for (int i =1; i<N; i++)
        {
            for (int v =0;v<=MAX_V;v++)
            {
                if (v<V[i]) tab [i][v] = tab [i-1][v];
                else {
                    int p1 = tab[i-1][v];
                    int p2 = W[i]+tab[i-1][v-V[i]];
                    if (p1>p2)tab [i][v] = p1;
                    else tab [i][v] = p2;
                }
            }
            System.out.println("v= 0    1   2   3   4   5   6   7   8   9");

            for (int j=0;j<N;j++)
            {
                System.out.println("i= "+i + " ");
                for (int k=0;k<=MAX_V;k++)
                {
                    int val = tab[i][j];
                    if (val<100) System.out.println(" ");
                    if (val<10) System.out.println(" ");
                    System.out.println(val + "");
                }
                System.out.println();
            }
        }
    }
}