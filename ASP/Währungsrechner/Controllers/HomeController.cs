using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Währungsrechner.Models;
using Währungsrechner.Models;

namespace Währungsrechner.Controllers
{
    public class HomeController : Controller
    {

        [HttpGet]

        public IActionResult Index()
        {
            return View();
        }




        [HttpPost]
        public IActionResult Index(ConvertierungsCentrum centrum)
        {
            centrum.Convertation();
            return View("BerechnungsForm", centrum);
        }
    }
}
