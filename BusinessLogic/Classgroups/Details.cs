using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Models;
using Persistence;

namespace BusinessLogic.Classgroups
{

    public class Details
    {
        public class Query : IRequest<Classgroup>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Classgroup>
        {
            private readonly SKMSDatabaseContext context;
            public Handler(SKMSDatabaseContext context)
            {
                this.context = context;
            }

            public async Task<Classgroup> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Classgroups.FindAsync(request.Id);
            }
        }
    }


}