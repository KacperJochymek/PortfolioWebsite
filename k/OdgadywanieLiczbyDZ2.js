public class OdgadywanieLiczby2DZ
{
    static int N;

    public static void main(String[] args)
    {
        Random los = new Random();
        N= los.nextInt(1000);
        System.out.println(N);
        odgadnij(0,1000);
    }

    public static void odgadnij(int a, int b)
    {
        int x = (a+b)/2;
        System.out.println("Myślisz o : "+ x + " ?");
        if (x == N )
        {
            System.out.println("TAK");
            return;
        }
        if (x>N)
        {
            System.out.println("Szukam mniejszej liczby");
            odgadnij(a, x - 1);
            }else
                {
                System.out.println("szukam większej liczby");
                odgadnij(x+1, b);
                }
        }
    }
