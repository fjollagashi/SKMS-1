using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Models;
using Persistence;

namespace BusinessLogic.Classrooms
{
    public class Edit
    {



        public class Command : IRequest
        {
            public Classroom Classroom { get; set; }
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
                var classroom = await context.Classrooms.FindAsync(request.Classroom.ClassroomId);

                mapper.Map(request.Classroom, classroom);

                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }

    }
}