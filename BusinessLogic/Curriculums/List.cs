
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Models;
using Persistence;

namespace BusinessLogic.Curriculums
{
    public class List
    {
        public class Query : IRequest<List<Curriculum>>
        { }

        public class Handler : IRequestHandler<Query, List<Curriculum>>
        {
            private readonly SKMSDatabaseContext context;
            public Handler(SKMSDatabaseContext context)
            {
                this.context = context;
            }

            public async Task<List<Curriculum>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Curricula.ToListAsync();
            }
        }
    }
}