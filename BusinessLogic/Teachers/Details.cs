using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Models;
using Persistence;

namespace BusinessLogic.Teachers
{

    public class Details
    {
        public class Query : IRequest<Teacher>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Teacher>
        {
            private readonly SKMSDatabaseContext context;
            public Handler(SKMSDatabaseContext context)
            {
                this.context = context;
            }

            public async Task<Teacher> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Teachers.FindAsync(request.Id);
            }
        }
    }


}