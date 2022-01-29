using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Models;
using Microsoft.AspNetCore.Mvc;
using BusinessLogic.Streets;

namespace Services.Controllers
{
    public class StreetsController : BaseAPIController
    {
        
    [HttpGet]

    public async Task<ActionResult<List<Street>>> GetStreets()
    {
        return await Mediator.Send(new List.Query());
    }

    
}
}