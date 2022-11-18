public class PlecakDZ
{
    final static int N = 6; 
    final static int MAX_V = 10; 

    final static int [] V = {6,2,3,2,3,1};
    final static int [] W = {6,4,5,7,10,2};

    static int plecak(int i, int v)
    {
        int w1,w2;

        if (i==0 && v < V[0])return 0;
        if (i==0 && v >= V[0])return W[0];

        w1 = plecak(i-1,v);
        if (i>0 && v < V[i])return w1;

        w2 = W[i] + plecak(i-1, v-V[i]);
        if (w2>w1) return w2;
        else return w1;
    }
    public static void main(String[] args) {
        System.out.println("Wartosc przedmiotow: "+plecak(N-1,MAX_V));
    }
}