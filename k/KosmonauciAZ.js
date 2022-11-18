public class KosmonauciAlgZachl
{
    public static void main(String[] args)
    {
       
        int[][]astroSkills = {{1,4},{2,3,4},{3,5},{1,2,5}};
        int[]astro = {1,2,3,4,5};
        int ind = 0;                                                        

        ArrayList<Integer>onBoard = new ArrayList<Integer>();
        while(true)
        {
            if(ind == astro.length)break;                                  
            System.out.println("Analizowany astro:" +astro[ind]);

            int skill = 0;
            for (int i =0; i<astroSkills[i].length;i++)                 
            {
                for (int j =0; j<astroSkills[i].length;j++)
                {
                    if (astro[ind] == astroSkills[i][j])
                        skill++;
                }
            }
            System.out.println("astro"+astro[ind]+" "+skill+"spec");

            if (skill >= 1)                                         
            {
                onBoard.add(astro[ind]);
                System.out.println("na pokładzie:" +onBoard.toString());
            } else {
                ind++; continue;
            }
            int match = 0;                                      
            for (int i =0;i<astroSkills.length;i++)             
            {
                for (int j=0; j<astroSkills[i].length;j++)         
                {
                    if (onBoard.contains(astroSkills[i][j]))        
                    {
                        match++; break;
                    }
                }
            }
            System.out.println("obsadzonych dziedzin: "+match);

            if (match == astroSkills.length) break;                 
            ind++;                                                  
        }
        if (ind== astro.length)System.out.println("Brak rozwiązania!");
        else
            System.out.println("Moga leciec kosmonauci: "+onBoard.toString());
    }
}