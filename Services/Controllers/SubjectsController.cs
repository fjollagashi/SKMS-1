using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Models;
using Microsoft.AspNetCore.Mvc;
using BusinessLogic.Subjects;

namespace Services.Controllers
{
    public class SubjectsController : BaseAPIController
    {
        
    [HttpGet]

    public async Task<ActionResult<List<Subject>>> GetSubject()
    {
        return await Mediator.Send(new List.Query());
    }

    
        [HttpGet("{id}")]

        public async Task<ActionResult<Subject>> GetSubject(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id=id});
        }
           
     [HttpPost]

     public async Task<IActionResult> CreateSubject(Subject subject)
     {
         return Ok(await Mediator.Send(new Create.Command {Subject = subject}));
     }

     [HttpPut("{id}")]

     public async Task<IActionResult> EditSubject(Guid id,Subject subject)
     {
         subject.SubjectId=id;

        return Ok(await Mediator.Send(new Edit.Command{Subject = subject}));
     }

     [HttpDelete("{id}")]

     public async Task<IActionResult> DeleteSubject(Guid id,Subject subject)
     {
         
        return Ok(await Mediator.Send(new Delete.Command{Id = id}));
     }
}
}