using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using BusinessLogic.AuthHelpers;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Models;
using Persistence;

namespace BusinessLogic.Authentification
{
    public class GenerateLoginToken
    {

        public class Query : IRequest<String>
        {

            public User user { get; set; }
            public HttpResponse response { get; set; }

        }

        public class Handler : IRequestHandler<Query, String>
        {

            private readonly SKMSDatabaseContext _context;
            private readonly IJwtService _jwt;
            public Handler(SKMSDatabaseContext context, IJwtService jwtService)
            {
                _context = context;
                _jwt = jwtService;
            }

            public async Task<String> Handle(Query request, CancellationToken cancellationToken)
            {

                var user = await _context.Users.FindAsync(request.user.UserId);

                if (user == null) return "Does not exist";

                if (!BCrypt.Net.BCrypt.Verify(request.user.UserPassword, user.UserPassword)) return "Bad password";

                string token = _jwt.Generate(request.user.UserId);

                request.response.Cookies.Append("jwt", token, new CookieOptions
                {
                    HttpOnly = true,
                    Expires = DateTime.Today.AddDays(1),
                });

                return "OK";
            }

        }
    }

}
