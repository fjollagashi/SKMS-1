
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Models;
using Persistence;

namespace BusinessLogic.Students
{

    public class Create
    {
        public class Command : IRequest
        {
            public Student Student { get; set; }
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

                request.Student.ClassGroupNavigation = null;
                request.Student.StudentNavigation.UserAddressNavigation = null;

                context.Students.Add(request.Student);

                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }


}