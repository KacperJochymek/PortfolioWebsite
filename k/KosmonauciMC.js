public class KosmonauciMC
{
    static final int LOS = 10; 

    public static void main(String[] args)
    {
        
        int[][] astroSpec = {{1,4},{2,3,4},{3,5},{1,2,5}};
        int[] astro = {1,2,3,4,5};
        int N = astro.length;

        String optKonfig = new String();                                                
        int optAstroLicz = N;

        Random los = new Random();                                                     
        for (int i=0;i < LOS;i++)
        {
            System.out.println("Rozwiązanie nr "+(i+1));                                    
            for (int j =0; j< astro.length;j++)
            {
                int rndIndex = los.nextInt(N);
                if (rndIndex != j)
                {
                    int pom = astro[j];                                                             
                    astro[j] = astro[rndIndex];
                    astro[rndIndex]=pom;
                }
            }
            System.out.println("kolejnosc  astro po przemieszaniu:");
            for (int j : astro) System.out.println(j+"");
            System.out.println("");

            String locKonfig = new String();                                                    
            int astroLicz =0;
            int[]specStatus = new int[astroSpec.length];
            int j =0;
            int sumSpec=0;

            while(sumSpec < astroSpec.length)                                               
            {
                for (int k=0; k<astroSpec.length;k++)
                {
                    for (int l=0;l<astroSpec[k].length;l++)
                    {
                        if (astroSpec[k][l]==astro[j])
                            specStatus[k]++;
                    }
                }
                locKonfig = locKonfig + " " + astro[j];                                         
                astroLicz++;                                                                    
                j++;
                sumSpec=0;
                for (int specStat : specStatus)                                                    
                    if (specStat>=1)
                        sumSpec++;

                System.out.println("astro zabrani: "+locKonfig);
                System.out.println("obsadzone specjalnosci:"+sumSpec+"");
                for (int specStat : specStatus)
                    System.out.println(specStat + "");
                System.out.println();
            }
            if (astroLicz < optAstroLicz)                                                           
                optKonfig=locKonfig;
            optAstroLicz=astroLicz;
        }
        System.out.println("Moga leciec: "+optKonfig);
    }

}