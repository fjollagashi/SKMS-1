using BusinessLogic.AuthHelpers;

using MediatR;

using Microsoft.EntityFrameworkCore;

using Models;

using Persistence;

using System;

using System.Threading;
using System.Threading.Tasks;

namespace BusinessLogic.Authentification {
    public class ParentLogIn {

        public class Query : IRequest<Parent> {
            public string _jwtToken { get; set; }
            }

        public class Handler : IRequestHandler<Query, Parent> {

            private readonly SKMSDatabaseContext _context;
            private readonly IJwtService _jwt;
            public Handler(SKMSDatabaseContext context, IJwtService jwtService) {
                _context = context;
                _jwt = jwtService;
                }

            public async Task<Parent> Handle(Query request, CancellationToken cancellationToken) {

                var token = _jwt.Verify(request._jwtToken);
                Guid userId = Guid.Parse(token.Issuer);

                return await _context.Parents
				    .Include(p => p.ParentNavigation)
					.Include("ParentNavigation.UserAddressNavigation")
					.Include("ParentNavigation.UserAddressNavigation.CityNavigation")
                    .Include("ParentsStudents")
                    .Include("ParentsStudents.Student")
                    .Include("ParentsStudents.Student.ClassGroupNavigation")
                    .Include("ParentsStudents.Student.StudentNavigation")
                    .Include("ParentsStudents.Student.ClassGroupNavigation.HomeroomTeacherNavigation")
                    .Include("ParentsStudents.Student.ClassGroupNavigation.HomeroomTeacherNavigation.TeacherNavigation")
                    .FirstOrDefaultAsync();

                }
            }
        }

    }