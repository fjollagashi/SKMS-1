
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Models;
using Persistence;

namespace BusinessLogic.Students
{
    public class Edit
    {



        public class Command : IRequest
        {
            public Student Student { get; set; }
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly SKMSDatabaseContext context;
            private readonly IMapper mapper;
            public Handler(SKMSDatabaseContext context, IMapper mapper)
            {
                this.mapper = mapper;
                this.context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var student = await context.Students.FindAsync(request.Student.StudentId);

                mapper.Map(request.Student, student);

                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }

    }
}