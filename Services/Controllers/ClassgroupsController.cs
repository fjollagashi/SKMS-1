using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Models;
using Microsoft.AspNetCore.Mvc;
using BusinessLogic.Classgroups;

namespace Services.Controllers
{
    public class ClassgroupsController : BaseAPIController
    {
        
    [HttpGet]

    public async Task<ActionResult<List<Classgroup>>> GetClassgroups()
    {
        return await Mediator.Send(new List.Query());
    }

    
        [HttpGet("{id}")]

        public async Task<ActionResult<Classgroup>> GetClassgroup(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id=id});
        }
           
     [HttpPost]

     public async Task<IActionResult> CreateClassgroup(Classgroup classgroup)
     {
         return Ok(await Mediator.Send(new Create.Command {Classgroup = classgroup}));
     }

     [HttpPut("{id}")]

     public async Task<IActionResult> EditClassgroup(Guid id,Classgroup classgroup)
     {
         classgroup.GroupId=id;

        return Ok(await Mediator.Send(new Edit.Command{Classgroup = classgroup}));
     }

     [HttpDelete("{id}")]

     public async Task<IActionResult> DeleteClassgroup(Guid id,Classgroup classgroup)
     {
         
        return Ok(await Mediator.Send(new Delete.Command{Id = id}));
     }
}
}