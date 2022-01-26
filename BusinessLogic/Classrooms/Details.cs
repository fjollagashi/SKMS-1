using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Models;
using Persistence;

namespace BusinessLogic.Classrooms
{

    public class Details
    {
        public class Query : IRequest<Classroom>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Classroom>
        {
            private readonly SKMSDatabaseContext context;
            public Handler(SKMSDatabaseContext context)
            {
                this.context = context;
            }

            public async Task<Classroom> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Classrooms.FindAsync(request.Id);
            }
        }
    }


}