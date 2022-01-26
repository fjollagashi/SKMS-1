
using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace BusinessLogic.Subjects
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
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
                var subject = await context.Subjects.FindAsync(request.Id);

                context.Remove(subject);

                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}