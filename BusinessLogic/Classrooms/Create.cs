using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Models;
using Persistence;

namespace BusinessLogic.Classrooms
{

    public class Create
    {
        public class Command : IRequest
        {
            public Classroom Classroom { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly SKMSDatabaseContext context;
            public Handler(SKMSDatabaseContext context)
            {
                this.context = context;

            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                 context.Classrooms.Add(request.Classroom);

                 await context.SaveChangesAsync();

                 return Unit.Value;
            }
        }
    }


}