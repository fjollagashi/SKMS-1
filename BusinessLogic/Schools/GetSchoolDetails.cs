using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Models;
using Persistence;

namespace BusinessLogic.Schools
{
    public class GetSchoolDetails
    {

        public class Query : IRequest<School>
        {

            public Guid SchoolID { get; set; }

        }

        public class Handler : IRequestHandler<Query, School>
        {

            private readonly SKMSDatabaseContext _context;

            public Handler(SKMSDatabaseContext context) { _context = context; }

            public async Task<School> Handle(Query request, CancellationToken token)
            {
                return await _context.Schools.FindAsync(request.SchoolID);
            }


        }

    }
}
