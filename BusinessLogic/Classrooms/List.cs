using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Models;
using Persistence;

namespace BusinessLogic.Classrooms
{
    public class List
    {
        public class Query : IRequest<List<Classroom>>
        { }

        public class Handler : IRequestHandler<Query, List<Classroom>>
        {
            private readonly SKMSDatabaseContext context;
            public Handler(SKMSDatabaseContext context)
            {
                this.context = context;
            }

            public async Task<List<Classroom>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Classrooms.ToListAsync();
            }
        }
    }
}