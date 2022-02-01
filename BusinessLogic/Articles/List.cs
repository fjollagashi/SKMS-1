using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Models;
using Persistence;

namespace BusinessLogic.Articles
{
    public class List
    {
        public class Query : IRequest<List<Article>>
        {

        }

        public class Handler : IRequestHandler<Query, List<Article>>
        {
            private readonly SKMSDatabaseContext context;
            public Handler(SKMSDatabaseContext context)
            {
                this.context = context;
            }

            public async Task<List<Article>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Articles.ToListAsync();
            }

        }

    }
}