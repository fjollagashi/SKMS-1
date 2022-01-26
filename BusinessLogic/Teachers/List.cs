
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Models;
using Persistence;

namespace BusinessLogic.Teachers
{
    public class List
    {
        public class Query : IRequest<List<Teacher>>
        { }

        public class Handler : IRequestHandler<Query, List<Teacher>>
        {
            private readonly SKMSDatabaseContext context;
            public Handler(SKMSDatabaseContext context)
            {
                this.context = context;
            }

            public async Task<List<Teacher>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Teachers.ToListAsync();
            }
        }
    }
}