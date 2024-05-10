using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using ZSK_ASP.Models;

namespace ZSK_ASP.Controllers
{
    public class HomeController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult ZSKEingabe()
        {
            return View();
        }

        public IActionResult DAHRS_Eingabe()
        {
            return View();
        }

        public IActionResult ZSK_DAHRS()
        {
            return View();
        }




        public IActionResult Berechnung_Betrag_ZSK(Waehrung s)
        {
            int[] zsk = ZSKBerechnung.Beitrag_ZSK(s.Eurobetrag);

            return View("Ergebnis", zsk);
        }

        public IActionResult Berechnung_Betrag_DAHRS(Waehrung s)
        {
            
            int[] dahrs = DAHRSBerechnung.Beitrag_DAHRS(s.Eurobetrag);

            return View("Ergebnis_Beitrag_DAHRS", dahrs);
        }



    }
}

