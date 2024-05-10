using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Währungsrechner.Models
{
    public class ConvertierungsCentrum
    {
        public int[,] TieresWährung = 
        {
            {2850,650,500,50},
            {0,0,0,0}
        };

        public string Summe { get; set; }

        public void Convertation()
        {
            int beitrag = int.Parse(Summe);

            for (int i = 0; i < 4; i++)
            {
                TieresWährung[1, i]=beitrag/ TieresWährung[0, i];
                beitrag=beitrag% TieresWährung[0, i];
            }



        }

         
    }
}
