
using Microsoft.AspNetCore.Mvc;
using MediatR;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Models;
using Persistence;
using BusinessLogic.Administration;
using System;

namespace Services.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class AdministrationController : BaseAPIController {

        [HttpGet("{id}")]
        public async Task<ActionResult<School>> GetSchoolDetails(Guid id) {
            return await Mediator.Send(new GetSchoolDetails.Query { SchoolID = id });
            }

        }
    }
