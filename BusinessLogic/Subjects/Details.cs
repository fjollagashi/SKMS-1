using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Models;
using Persistence;

namespace BusinessLogic.Subjects
{

    public class Details
    {
        public class Query : IRequest<Subject>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Subject>
        {
            private readonly SKMSDatabaseContext context;
            public Handler(SKMSDatabaseContext context)
            {
                this.context = context;
            }

            public async Task<Subject> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Subjects.FindAsync(request.Id);
            }
        }
    }


}