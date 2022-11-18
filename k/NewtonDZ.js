public class NewtonDZ
{
    public static void main(String[] args)
    {
        final int N =5;
        final int K =3;
        System.out.println(Newton(N,K));
    }
    static int Newton(int n, int k)
    {
        if (k==0 || k==n ) return 1;
        else
        {
            return Newton(n-1,k-1)+Newton(n-1,k);
        }
    }
}