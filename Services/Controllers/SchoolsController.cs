
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessLogic.Schools;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Models;
using Persistence;

namespace Services.Controllers
{

    public class SchoolsController : BaseAPIController
    {

        [HttpGet("{id}")]
        public async Task<ActionResult<School>> GetSchoolDetails(Guid id)
        {
            return await Mediator.Send(new GetSchoolDetails.Query { SchoolID = id });
        }

        //We only have one school right night so the ID part can be added later
        [HttpGet("getSchoolArticles")]

        public async Task<List<Article>> GetSchoolArticles()
        {
            return await Mediator.Send(new BusinessLogic.Articles.List.Query { });
        }


    }
}
