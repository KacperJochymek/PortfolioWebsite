public class PlecakMC
{
    static final int N = 6;
    static final int MAX_V = 10;
    final static int[]V= {2,6,3,3,1,2};
    final static int[]W = {4,6,5,10,2,7};

    public static void main(String[] args)
    {
        String optKonfig = new String();
        int optV = -1;
        int optW =0;

        Random los = new Random();

        for (int i =0;i<10;i++)                                                            
        {
            int[]ustaw = new int[N];                                                        
            for (int j=0;j<N;j++)
                ustaw[j]=j;

            for (int j=0;j<N;j++)                                                          
            {
                int rndIndex = los.nextInt(N);
                if (rndIndex != j)
                {
                    int pom = ustaw[j];                                                        
                    ustaw[j] = ustaw[rndIndex];
                    ustaw[rndIndex] = pom;
                }
            }
            String locKonfig = new String();                                                       
            int sumV= 0;
            int sumW = 0;
            int j =0;

            while ((j<N) && (sumV+V[ustaw[j]] <= MAX_V))                                            
            {
                sumV = sumV + V[ustaw[j]];
                sumW= sumW + W[ustaw[j]];
                locKonfig = locKonfig + " " + ustaw[j];
                j++;
            }
            if (sumW > optW)                                                                        
            {
                optW = sumW;
                optV = sumV;
                optKonfig=locKonfig;
            }

        }
        System.out.println("Calk objetosc: "+optV);
        System.out.println("Calk wartosc: "+optW);
        System.out.println("Konfiguracja: "+optKonfig);
        System.out.println("Niewykorzystana objetosc: "+(MAX_V-optV));
    }
}