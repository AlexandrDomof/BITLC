using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ZSK_ASP.Models {
    public static class ZSKBerechnung {

        static int[] Tier_Preis = { 2850, 650, 500, 50 };

        public static int[] Beitrag_ZSK ( string euro) {
            
            int [ ] ergebnis = new int [ 4 ];

            int euroInt = Convert.ToInt32 ( euro );

            // Berechnung
            for (int i = 0; i < 4; i++)
            {
                ergebnis[i] = euroInt / Tier_Preis[i];
                euroInt = euroInt % Tier_Preis[i];
            }

            return ergebnis;
        }

        public static string ZSK_Beitrag(int [] zsk)
        {

            int[] ergebnis = new int[4];

            int beitrag = 0;

            // Berechnung
            for (int i = 0; i < 4; i++)
            {
                beitrag += zsk[i] * Tier_Preis[i];
            }
            string str_beitrag = Convert.ToString(beitrag);

            return str_beitrag;
        }


    }
}
