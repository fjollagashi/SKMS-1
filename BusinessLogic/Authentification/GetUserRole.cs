using BusinessLogic.AuthHelpers;

using MediatR;

using Microsoft.AspNetCore.Http;

using Models;

using Persistence;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace BusinessLogic.Authentification {
    public class GetUserRole {

        public class Query : IRequest<string> {
            public string _jwtToken { get; set; }
            }

        public class Handler : IRequestHandler<Query, string> {

            private readonly SKMSDatabaseContext _context;
            private readonly IJwtService _jwt;
            public Handler(SKMSDatabaseContext context, IJwtService jwtService) {
                _context = context;
                _jwt = jwtService;
                }

            public async Task<string> Handle(Query request, CancellationToken cancellationToken) {

                var token = _jwt.Verify(request._jwtToken);
                Guid userId = Guid.Parse(token.Issuer);

                var parent = await _context.Parents.FindAsync(userId);
                var admin = await _context.Administrators.FindAsync(userId);

                if (parent != null) {
                    return "PARENT";
                    }

                else if (admin != null) {
                    return "ADMIN";
                    }

                return "BAD";

                }

            }


        }
    }
