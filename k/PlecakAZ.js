public class PlecakAZ
{
    final static int N = 6;
    final static int MAX_V = 10;
    final static int[] V = {1,2,3,2,3,1};
    final static int [] W = {6,4,5,7,10,2};

    public static void main(String[] args) {
        pakujMale();
    }
    
    public static void pakujMale (){
        boolean [] rozw = new boolean[N]; 
        for (int i= 0; i<N; i++)
            rozw[i]= false; 

        int sumaW=0;
        int sumaV =0;

        while(true){
            int minV = Integer.MAX_VALUE;
            int maxPoz = -1;

            for (int i =0; i< N; i++){ 
                if(!rozw[i]){
                    if ((sumaV + V[i] <= MAX_V) && (V[i]<minV)){ 
                        minV=V[i];
                        maxPoz = i;
                    }
                }
            }
            if (maxPoz>-1){
                rozw[maxPoz]=true;
                sumaW= sumaW + W[maxPoz];
                sumaV=sumaV+V[maxPoz];
            }else break;
        }
        System.out.println("Przedmioty w plecaku mają wartość:"+sumaW);
        System.out.println("Są to przedmioty o numerach:");

        for (int i =0; i<N;i++){
            if (rozw[i])
                System.out.println(i+" ");
        }
    }

    public static void plecakIloraz(){
        boolean [] rozw = new boolean[N];
        for (int i =0; i<N;i++)
            rozw [i] = false;
        int sumaW=0;
        int sumaV = 0;

        while(true){
            double maxFrac =0;
            int maxPoz = -1;
            for (int i=0; i<N; i++){
                if(!rozw[i]){
                    double frac = W[i]/V[i];
                    if ((sumaV+V[i]<MAX_V)&& (frac>maxFrac)){
                        maxPoz = i;
                        maxFrac=frac;
                    }
                }
            }
            if (maxPoz > -1){
                rozw[maxPoz] = true;
                sumaW = sumaW + W[maxPoz];
                sumaV = sumaV + V[maxPoz];
            }else break;
        }
        System.out.println("Wartości w plecaku = " + sumaW);
        System.out.println("Są to przedmioty o numerach: ");
        for (int i =0; i<N;i++){
            if (rozw[i])
                System.out.println(i+" ");
        }
    }
}