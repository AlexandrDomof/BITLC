using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ZSK_ASP.Models
{
    public  static class DAHRSBerechnung
    {
        static float[] Fisch_Preis = new float[5];


        private static void SetFisch_Preis()
        {
            Fisch_Preis[0] = 8; // Dorsch 8
            Fisch_Preis[2] = Fisch_Preis[0] / 11; //Aal 0,73
            Fisch_Preis[3] = Fisch_Preis[2] / 5; //Hering 0,145
            Fisch_Preis[4] = Fisch_Preis[3] / 11; // Sprotten 0,0132
            Fisch_Preis[1] = 9 * Fisch_Preis[3] + 7 * Fisch_Preis[2]; // Rochen 1,134
        }


        public static int[] Beitrag_DAHRS(string euro)
        {
            SetFisch_Preis();
            int[] ergebnis = new int[5];
            int euroInt = Convert.ToInt32(euro);
            float euroInt_fl = (float)euroInt;
            // Berechnung
            for (int i = 0; i < 5; i++)
            {
                while (euroInt_fl>Fisch_Preis[i])
                {
                    ergebnis[i]++;
                    euroInt_fl -= Fisch_Preis[i];
                }
            }
            return ergebnis;
        }
    }   
}
