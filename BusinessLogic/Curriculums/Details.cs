

using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Models;
using Persistence;

namespace BusinessLogic.Curriculums
{

    public class Details
    {
        public class Query : IRequest<Curriculum>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Curriculum>
        {
            private readonly SKMSDatabaseContext context;
            public Handler(SKMSDatabaseContext context)
            {
                this.context = context;
            }

            public async Task<Curriculum> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Curricula.FindAsync(request.Id);
            }
        }
    }


}