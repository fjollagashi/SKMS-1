using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Models;
using Persistence;

namespace BusinessLogic.Classgroups
{
    public class List
    {
        public class Query : IRequest<List<Classgroup>>
        { }

        public class Handler : IRequestHandler<Query, List<Classgroup>>
        {
            private readonly SKMSDatabaseContext context;
            public Handler(SKMSDatabaseContext context)
            {
                this.context = context;
            }

            public async Task<List<Classgroup>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Classgroups.ToListAsync();
            }
        }
    }
}