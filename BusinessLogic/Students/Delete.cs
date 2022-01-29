

using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace BusinessLogic.Students
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

                var student = await context.Students.FindAsync(request.Id);

                context.Remove(student);

                await context.SaveChangesAsync();

                var user = await context.Users.FindAsync(request.Id);

                context.Remove(user);

                await context.SaveChangesAsync();

                return Unit.Value;


            }
        }
    }
}