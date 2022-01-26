
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Models;
using Persistence;

namespace BusinessLogic.Students
{
    public class List
    {
        public class Query : IRequest<List<Student>>
        { }

        public class Handler : IRequestHandler<Query, List<Student>>
        {
            private readonly SKMSDatabaseContext context;
            public Handler(SKMSDatabaseContext context)
            {
                this.context = context;
            }

            public async Task<List<Student>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Students.ToListAsync();
            }
        }
    }
}