using BusinessLogic.AuthHelpers;

using MediatR;

using Microsoft.EntityFrameworkCore;

using Models;

using Persistence;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace BusinessLogic.Authentification {
    public class AdminLogIn {

        public class Query : IRequest<Administrator> {
            public string _jwtToken { get; set; }
            }

        public class Handler : IRequestHandler<Query, Administrator> {

            private readonly SKMSDatabaseContext _context;
            private readonly IJwtService _jwt;
            public Handler(SKMSDatabaseContext context, IJwtService jwtService) {
                _context = context;
                _jwt = jwtService;
                }

            public async Task<Administrator> Handle(Query request, CancellationToken cancellationToken) {

                var token = _jwt.Verify(request._jwtToken);
                Guid userId = Guid.Parse(token.Issuer);

                return await _context.Administrators.Include(a => a.AdministratorNavigation).ThenInclude(an => an.UserAddressNavigation).ThenInclude(uan => uan.CityNavigation).Where(a => a.AdministratorId == userId).FirstOrDefaultAsync();

                }
            }
        }

    }