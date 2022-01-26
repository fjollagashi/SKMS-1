
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Models;
using Persistence;

namespace BusinessLogic.Curriculums
{
    public class Edit
    {



        public class Command : IRequest
        {
            public Curriculum Curriculum { get; set; }
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
                var curriculum = await context.Curricula.FindAsync(request.Curriculum.CurriculumId);

                mapper.Map(request.Curriculum, curriculum);

                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }

    }
}