using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using BusinessLogic.Authentification;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;
using Newtonsoft.Json.Linq;

namespace Services.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : BaseAPIController
    {

        [HttpPost("generateLogin")]
        public async Task<ActionResult<String>> Login(User user)
        {

            return await Mediator.Send(new GenerateLoginToken.Query { user = user, response = Response });

        }

        [HttpPost("hashPassword")]
        public async Task<string> HashPassword(string s)
        {
            return BCrypt.Net.BCrypt.HashPassword(s);
        }
        [HttpGet("getAllUsers")]

        public async Task<User> GetAllUsers(Guid ID)
        {
            return await Mediator.Send(new BusinessLogic.Users.List.Query { id = ID });
        }

        [HttpGet("logOut")]
        public async Task<ActionResult> LogOut()
        {
            Response.Cookies.Delete("jwt");
            return Ok();
        }

        [HttpGet("getRole")]
        public async Task<ActionResult<String>> GetUserRole()
        {

            return await Mediator.Send(new GetUserRole.Query { _jwtToken = Request.Cookies["jwt"] });

        }

        [HttpGet("adminLogin")]
        public async Task<ActionResult<Administrator>> AdminLogin()
        {

            return await Mediator.Send(new AdminLogIn.Query { _jwtToken = Request.Cookies["jwt"] });

        }

        [HttpGet("parentLogin")]
        public async Task<ActionResult<Parent>> ParentLogin()
        {

            return await Mediator.Send(new ParentLogIn.Query { _jwtToken = Request.Cookies["jwt"] });

        }
    }





}
