using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Models;
using Microsoft.AspNetCore.Mvc;
using BusinessLogic.Classrooms;

namespace Services.Controllers
{
    public class ClassroomsController : BaseAPIController
    {
        
    [HttpGet]

    public async Task<ActionResult<List<Classroom>>> GetClassrooms()
    {
        return await Mediator.Send(new List.Query());
    }

    
        [HttpGet("{id}")]

        public async Task<ActionResult<Classroom>> GetClassroom(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id=id});
        }
           
     [HttpPost]

     public async Task<IActionResult> CreateClassroom(Classroom classroom)
     {
         return Ok(await Mediator.Send(new Create.Command {Classroom = classroom}));
     }

     [HttpPut("{id}")]

     public async Task<IActionResult> EditClassroom(Guid id,Classroom classroom)
     {
         classroom.ClassroomId=id;

        return Ok(await Mediator.Send(new Edit.Command{Classroom = classroom}));
     }

     [HttpDelete("{id}")]

     public async Task<IActionResult> DeleteClassroom(Guid id,Classroom classroom)
     {
         
        return Ok(await Mediator.Send(new Delete.Command{Id = id}));
     }
}
}