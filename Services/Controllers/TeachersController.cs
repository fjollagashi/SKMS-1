using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Models;
using Microsoft.AspNetCore.Mvc;
using BusinessLogic.Teachers;

namespace Services.Controllers
{
    public class TeachersController : BaseAPIController
    {
        
    [HttpGet]

    public async Task<ActionResult<List<Teacher>>> GetTeachers()
    {
        return await Mediator.Send(new List.Query());
    }

    
        [HttpGet("{id}")]

        public async Task<ActionResult<Teacher>> GetTeacher(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id=id});
        }
           
     [HttpPost]

     public async Task<IActionResult> CreateTeacher(Teacher teacher)
     {
         return Ok(await Mediator.Send(new Create.Command {Teacher = teacher}));
     }

     [HttpPut("{id}")]

     public async Task<IActionResult> EditTeacher(Guid id,Teacher teacher)
     {
         teacher.TeacherId=id;

        return Ok(await Mediator.Send(new Edit.Command{Teacher =teacher}));
     }

     [HttpDelete("{id}")]

     public async Task<IActionResult> DeleteTeacher(Guid id,Teacher teacher)
     {
         
        return Ok(await Mediator.Send(new Delete.Command{Id = id}));
     }
}
}