using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Models;
using Microsoft.AspNetCore.Mvc;
using BusinessLogic.Curriculums;

namespace Services.Controllers
{
    public class CurriculumsController : BaseAPIController
    {
        
    [HttpGet]

    public async Task<ActionResult<List<Curriculum>>> GetCurriculums()
    {
        return await Mediator.Send(new List.Query());
    }

    
        [HttpGet("{id}")]

        public async Task<ActionResult<Curriculum>> GetCurriculum(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id=id});
        }
           
     [HttpPost]

     public async Task<IActionResult> CreateCurriculum(Curriculum curriculum)
     {
         return Ok(await Mediator.Send(new Create.Command {Curriculum = curriculum}));
     }

     [HttpPut("{id}")]

     public async Task<IActionResult> EditCurriculum(Guid id,Curriculum curriculum)
     {
         curriculum.CurriculumId=id;

        return Ok(await Mediator.Send(new Edit.Command{Curriculum =curriculum}));
     }

     [HttpDelete("{id}")]

     public async Task<IActionResult> DeleteCurriculum(Guid id,Curriculum curriculum)
     {
         
        return Ok(await Mediator.Send(new Delete.Command{Id = id}));
     }
}
}