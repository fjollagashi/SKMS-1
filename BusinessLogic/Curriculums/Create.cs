

using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Models;
using Persistence;

namespace BusinessLogic.Curriculums
{

    public class Create
    {
        public class Command : IRequest
        {
            public Curriculum Curriculum { get; set; }
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
                 context.Curricula.Add(request.Curriculum);

                 await context.SaveChangesAsync();

                 return Unit.Value;
            }
        }
    }


}