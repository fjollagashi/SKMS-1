using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MediatR;
using Models;
using Persistence;
using System.Threading;

namespace BusinessLogic.Administration {
    public class GetSchoolDetails {

        public class Query : IRequest<School> {

            public Guid SchoolID { get; set; }

            }

        public class Handler : IRequestHandler<Query, School> {

            private readonly SKMSDatabaseContext _context;

            public Handler(SKMSDatabaseContext context) { _context = context; }

            public async Task<School> Handle(Query request, CancellationToken token) {
                return await _context.Schools.FindAsync(request.SchoolID);
                }


            }

        }
    }
