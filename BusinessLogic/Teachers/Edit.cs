
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Models;
using Persistence;

namespace BusinessLogic.Teachers
{
    public class Edit
    {



        public class Command : IRequest
        {
            public Teacher Teacher { get; set; }
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
                var teacher = await context.Teachers.FindAsync(request.Teacher.TeacherId);

                mapper.Map(request.Teacher, teacher);

                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }

    }
}